<template>
  <div class="randomMeals">
    <div v-for="meal of showRandomMeal" :key="meal.idMeal">
      <MealCard
        :idMeal="meal"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

import MealCard from "@/components/MealCard.vue"

export default {
  name: "RandomMeal",
  components: {
    MealCard
  },
  setup() {
    //accedemos a nuestro store
    const store = useStore();

    // ejecuta antes de mostrar nuestro template
    onMounted(() => {
      store.dispatch("showRandomMeal");
    });

    // mapeamos el state para mostrar el array en el v-for
    const showRandomMeal = computed(() => store.state.dataRandomMeal.meals);

    return { showRandomMeal };
  },
};
</script>