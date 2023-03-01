<template>
  <div class="container" v-if="!loggedUser">To see this content you need to be registered</div>
  <div class="container" v-if="loggedUser">
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
import { computed } from "vue";
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
        const loggedUser = computed(() => store.state.user);

        return { favorites, loggedUser }
    }
}
</script>

<style>

</style>