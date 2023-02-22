import { createStore } from "vuex";
import { auth } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

export default createStore({
  state: {
    // poner variables y colecciones aquí
    dataCategories: [],
    dataArea: [],
    dataSelectedCateArea: [],
    dataRandomMeal: [],
    dataIdMeal: [],
    // guardamos los datos del usuario registrado
    user: null,
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
    setUser: (state, payload) => (state.user = payload),
    setAuthIsReady: (state, payload) => (state.authIsReady = payload)
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
      await signOut(auth)
      context.commit('setUser', null)
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
  },
});
