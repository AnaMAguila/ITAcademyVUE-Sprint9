<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-3" v-for="meal of selectedCateArea" :key="meal.idMeal">
      <MealCard
        :idMeal="meal"
      />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import MealCard from "./MealCard.vue";

export default {
  name: "MealsCateArea",
  components: {
    MealCard,
  },
  setup() {
    //accedemos a nuestro store
    const store = useStore();

    // mapeamos el state para mostrar el array en el v-for
    const selectedCateArea = computed(
      () => store.state.dataSelectedCateArea.meals
    );

    return { selectedCateArea };
  },
};
</script>

<style>
.miniatura {
  width: 200px;
}
</style>
