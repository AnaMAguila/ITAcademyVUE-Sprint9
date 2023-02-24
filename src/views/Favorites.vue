<template>
  <div class="container">
    <h3>Favorites</h3>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-3" v-for="meal of favorites" :key="meal.idMeal">
      <MealCard
        :idMeal="meal"
      />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import MealCard from "@/components/MealCard.vue";

export default {
    name: 'Favorites',
    components: {
        MealCard
    },
    setup() {
        const store = useStore()
        const favorites = computed(() => store.state.dataFavorite)

        return { favorites }
    }
}
</script>

<style>

</style>