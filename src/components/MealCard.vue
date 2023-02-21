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
    <div class="card-footer">
       <router-link :to="{ name: 'recipe', params: { id: idMeal.idMeal } }">
      <button class="btn btn-dark">View recipe</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MealCard",
  props: ["idMeal"],
  methods: {
    cardControlLength() {
      if (this.idMeal.strMeal.length > 25) {
        this.idMeal.strMeal = this.idMeal.strMeal.substr(0, 25) + "...";
      }
      return this.idMeal.strMeal;
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #3c6a00;
  color: #fff;
}
</style>