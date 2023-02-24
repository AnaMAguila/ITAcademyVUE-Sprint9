<template>
  <div class="card h-100">
    <img
      :src="idMeal.strMealThumb"
      :alt="idMeal.strMeal"
      class="card-img-top"
    />
    <div class="card-body">
      <p class="card-title text-center">{{ cardControlLength() }}</p>
    </div>
    <div class="card-footer text-center">
       <router-link :to="{ name: 'recipe', params: { id: idMeal.idMeal } }">
      <button class="btn btn-outline-light m-1"><i class="bi bi-eye"></i></button>
      </router-link>

      <button class="btn btn-outline-light" @click="agregaFavorito(idMeal)" v-if="loggedUser">
        <i class="bi bi-heart" v-if="!isFavorite"></i>
        <i class="bi bi-heart-fill" v-if="isFavorite"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "MealCard",
  props: ["idMeal"],
  methods: {
    cardControlLength() {
      if (this.idMeal.strMeal.length > 25) {
        this.idMeal.strMeal = this.idMeal.strMeal.substr(0, 25) + "...";
      }
      return this.idMeal.strMeal;
    }
  },
  computed: {
    isFavorite(){
      return this.dataFavorite[this.idMeal.idMeal]
    }
  },
  setup() {
    const store = useStore();
    const loggedUser = computed(() => store.state.user);
    const dataFavorite = computed(() => store.state.dataFavorite);

    const agregaFavorito = (idMeal) => {
      store.dispatch('addFavorite', idMeal)
    }

    return { loggedUser, dataFavorite, agregaFavorito};
  }
};
</script>

<style scoped>
.card {
  background-color: #3c6a00;
  color: #fff;
}
</style>