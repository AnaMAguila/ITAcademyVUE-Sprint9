import { createStore } from 'vuex'

export default createStore({
  state: { // poner variables y colecciones aquí
    dataCategories: [],
    dataSelectedCategory: []
  },
  getters: {
  },
  mutations: { // funciones síncronas para cambiar el estado e.j. put, edit, delete
    setCategories: (state, payload) => (state.dataCategories.categories = payload),
    setSelectedCategory: (state, payload) => (state.dataSelectedCategory.meals = payload)
  },
  actions: { // funciones asíncronas que puede llamar una o más mutaciones
    async categories({commit, state}) {
      try{
        const resCategories = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        state.dataCategories = await resCategories.json()
        commit('setCategories', state.dataCategories.categories.sort((a, b) => a.strCategory !== b.strCategory ? a.strCategory < b.strCategory ? -1 : 1 : 0))
      }catch(error){
        console.log(error)
      }
    },
    async selCategory({commit, state}, selectedCategory) {
      try{
        const resSelectedCategory = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        state.dataSelectedCategory = await resSelectedCategory.json()
        console.log(state.dataSelectedCategory.meals)
        commit('setSelectedCategory', state.dataSelectedCategory.meals)
      }catch(error){
        console.log(error)
      }
    }
  },
  modules: {
  }
})
