import { createStore } from 'vuex'

export default createStore({
  state: { // poner variables y colecciones aquí
    dataCategories: [],
  },
  getters: {
  },
  mutations: { // funciones síncronas para cambiar el estado e.j. put, edit, delete
    setCategories: (state, payload) => (state.dataCategories.categories = payload)
  },
  actions: { // funciones asíncronas que puede llamar una o más mutaciones
    async categories({commit, state}) {
      try{
        // resRecipes es la respuesta del contenido de la API, nos devuelve un objeto
        const resCategories = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        state.dataCategories = await resCategories.json()
        commit('setCategories', state.dataCategories.categories.sort((a, b) => a.strCategory !== b.strCategory ? a.strCategory < b.strCategory ? -1 : 1 : 0))
      }catch(error){
        console.log(error)
      }
    }
  },
  modules: {
  }
})
