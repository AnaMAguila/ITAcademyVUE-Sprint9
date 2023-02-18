import { createStore } from 'vuex'

export default createStore({
  state: { // poner variables y colecciones aquí
    dataCategories: [],
    dataArea: [],
    dataSelectedCateArea: []
  },
  getters: {
  },
  mutations: { // funciones síncronas para cambiar el estado e.j. put, edit, delete
    setCategories: (state, payload) => (state.dataCategories.categories = payload),
    setArea: (state, payload) => (state.dataArea.area = payload),
    setSelectedCateArea: (state, payload) => (state.dataSelectedCateArea.meals = payload),
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
    async area({commit, state}) {
      try{
        const resArea = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        state.dataArea = await resArea.json()
        commit('setArea', state.dataArea.meals.sort((a, b) => a.strArea !== b.strArea ? a.strArea < b.strArea ? -1 : 1 : 0))
      }catch(error){
        console.log(error)
      }
    },
    async selCategory({commit, state}, selectedCategory) {
      try{
        const resSelectedCategory = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        state.dataSelectedCateArea = await resSelectedCategory.json()
        commit('setSelectedCateArea', state.dataSelectedCateArea.meals)
      }catch(error){
        console.log(error)
      }
    },
    async selArea({commit, state}, selectedArea) {
      try{
        const resSelectedArea = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`)
        state.dataSelectedCateArea = await resSelectedArea.json()
        commit('setSelectedCateArea', state.dataSelectedCateArea.meals)
      }catch(error){
        console.log(error)
      }
    }
  },
  modules: {
  }
})
