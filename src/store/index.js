import { createStore } from "vuex";
import { auth } from "@/firebase/config";
// import { database } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { 
  getDatabase, 
  ref, 
  push, 
  set, 
  remove,
  onValue
} from "firebase/database";

const store = createStore({
  state: {
    // poner variables y colecciones aquí
    dataCategories: [],
    dataArea: [],
    dataSelectedCateArea: [],
    dataRandomMeal: [],
    dataIdMeal: [],
    dataAllIngredients: [],
    dataFavorite: {},
    dataWeek: {},
    weekIngredients: {},
    // guardamos los datos del usuario registrado
    user: null,
    authIsReady: false,
  },
  getters: {
    emptyData(state) {
      return state.dataSelectedCateArea.meals;
    },
  },
  mutations: {
    // funciones síncronas para cambiar el estado e.j. put, edit, delete
    setCategories: (state, payload) =>
      (state.dataCategories.categories = payload),
    setArea: (state, payload) => (state.dataArea.area = payload),
    setSelectedCateArea: (state, payload) =>
      (state.dataSelectedCateArea.meals = payload),
    setRandomMeal: (state, payload) => (state.dataRandomMeal.meals = payload),
    setIdMeal: (state, payload) => (state.dataIdMeal.meals = payload),
    setAllIngredients: (state, payload) => (state.dataAllIngredients.meals = payload),
    setWeekPlanner: (state, payload) =>
      (state.dataWeek[payload.idMeal] = payload),

    setWeekIngredients(state, payload){
      state.weekIngredients = payload
    },
    
    delMealWeek: (state, payload) => delete state.dataWeek[payload],
    setFavorite(state, payload){
      state.dataFavorite[payload.idMeal] = payload
    },
    delFavorite: (state, payload) => delete state.dataFavorite[payload.idMeal],
    setUser: (state, payload) => (state.user = payload),
    setAuthIsReady: (state, payload) => (state.authIsReady = payload),
  },
  actions: {
    // funciones asíncronas que puede llamar una o más mutaciones
    async signup(context, { email, password }) {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("Could not complete signup");
      }
    },

    async login(context, { email, password }) {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("Could not complete login");
      }
    },

    async logout(context) {
      await signOut(auth);
      context.commit("setUser", null);
    },

    async categories({ commit, state }) {
      try {
        const resCategories = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        state.dataCategories = await resCategories.json();
        commit(
          "setCategories",
          state.dataCategories.categories.sort((a, b) =>
            a.strCategory !== b.strCategory
              ? a.strCategory < b.strCategory
                ? -1
                : 1
              : 0
          )
        );
      } catch (error) {
        console.log(error);
      }
    },

    async area({ commit, state }) {
      try {
        const resArea = await fetch(
          "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
        );
        state.dataArea = await resArea.json();
        commit(
          "setArea",
          state.dataArea.meals.sort((a, b) =>
            a.strArea !== b.strArea ? (a.strArea < b.strArea ? -1 : 1) : 0
          )
        );
      } catch (error) {
        console.log(error);
      }
    },

    async selCategory({ commit, state }, selectedCategory) {
      try {
        const resSelectedCategory = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        );
        state.dataSelectedCateArea = await resSelectedCategory.json();
        commit("setSelectedCateArea", state.dataSelectedCateArea.meals);
      } catch (error) {
        console.log(error);
      }
    },

    async selArea({ commit, state }, selectedArea) {
      try {
        const resSelectedArea = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`
        );
        state.dataSelectedCateArea = await resSelectedArea.json();
        commit("setSelectedCateArea", state.dataSelectedCateArea.meals);
      } catch (error) {
        console.log(error);
      }
    },

    async searchMeal({ commit, state }, search) {
      try {
        const resSearchMeal = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        state.dataSelectedCateArea = await resSearchMeal.json();
        commit("setSelectedCateArea", state.dataSelectedCateArea.meals);
      } catch (error) {
        console.log(error);
      }
    },

    async showRandomMeal({ commit, state }) {
      try {
        const resSearchMeal = await fetch(
          `https://www.themealdb.com/api/json/v1/1/random.php`
        );
        state.dataRandomMeal = await resSearchMeal.json();
        commit("setRandomMeal", state.dataRandomMeal.meals);
      } catch (error) {
        console.log(error);
      }
    },

    async showIdMeal({ commit, state }, id) {
      try {
        const resSearchMeal = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        state.dataIdMeal = await resSearchMeal.json();
        commit("setIdMeal", state.dataIdMeal.meals);
      } catch (error) {
        console.log(error);
      }
    },

    async showAllIngredients({ commit, state }) {
      try {
        const resSearchMeal = await fetch(
          `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
        );
        state.dataAllIngredients = await resSearchMeal.json();
        commit("setAllIngredients", state.dataAllIngredients.meals);
      } catch (error) {
        console.log(error);
      }
    },

    showWeekIngredients({ commit, state }, dataWeek){
      const arr = Object.keys(dataWeek);
      
      const newArray = arr.map(async (id) => {
        const recipe = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);   
        state.weekIngredients = await recipe.json();
        return state.weekIngredients.meals;
      });

      Promise.all(newArray).then((data) => {      
        commit("setWeekIngredients", data);
      });      
    },

    addFavorite({ commit, state }, idMeal) {
      const id = idMeal.idMeal 
      const db = getDatabase(); 
      const mealListRef = ref(db, 'favorites');    

      if(state.dataFavorite.hasOwnProperty(idMeal.idMeal)){
        commit("delFavorite", idMeal);

        onValue(mealListRef, (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            
            if(childData.idMeal === id){
              remove(childSnapshot.ref)
            }
          });
        },
        {
          onlyOnce: true
        });

      }else{
        commit("setFavorite", idMeal);
        const mealRef = push(mealListRef);
        set(mealRef, idMeal);

      }
      
      // state.dataFavorite.hasOwnProperty(idMeal.idMeal)
      //   ? commit("delFavorite", idMeal)
      //   : commit("setFavorite", idMeal);       
    },
  },
});

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  store.commit("setUser", user);
  unsub();
});

export default store;
