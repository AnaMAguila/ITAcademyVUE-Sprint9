<template>
  <div class="row mb-3 text-center">
    <div class="col-sm-6 col-md-8 col-lg-9 themed-grid-col card">
      <div class="card-body">
        <h3 class="card-title">WELCOME TO MEALVELOUS</h3>
        <p class="card-text text-uppercase">
          Find and share everyday cooking inspiration. Discover recipes, cooks,
          videos, and how-tos based on the food you love.
        </p>
        <hr />
        <span
          v-for="category of categories"
          :key="category.idCategory"
          class="category"
        >
          <button
            @click="selCategory(category.strCategory)"
            class="category-button"
          >
            <img :src="category.strCategoryThumb" class="category-thumb" />
            <p>{{ category.strCategory }}</p>
          </button>
        </span>
      </div>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3 themed-grid-col"><RandomMeal /></div>
  </div>
</template>

<script>
import { useStore, mapActions } from "vuex";
import { computed, onMounted } from "vue";

import RandomMeal from "@/components/RandomMeal.vue";

export default {
  name: "Welcome",
  components: {
    RandomMeal,
  },
  data() {
    return {
      selectedValue: "",
    };
  },
  watch: {
    selectedValue(value) {
      this.selCategory(value);
    },
  },
  setup() {
    //accedemos a nuestro store
    const store = useStore();

    // ejecuta antes de mostrar nuestro template
    onMounted(() => {
      store.dispatch("categories");
    });

    // mapeamos el state para mostrar el array en el v-for
    const categories = computed(() => store.state.dataCategories.categories);

    return { categories };
  },
  methods: {
    ...mapActions(["selCategory"]),
  },
};
</script>

<style>
.category-thumb {
  width: 150px;
}
.category-button {
  border: none;
  color: #000;
  background-color: #fff;
}

@media (max-width: 776px) {
  .category-thumb {
    width: 80px;
  }
}
</style>