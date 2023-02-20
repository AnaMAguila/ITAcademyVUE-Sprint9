<template>
  <div class="categories">
    <select class="form-select" v-model="selectedValue">
      <option value="" disabled selected>Categories</option>
      <option
        v-for="category of categories"
        :key="category.idCategory"
        :value="category.strCategory"
      >
        {{ category.strCategory }}
      </option>
    </select>
  </div>
</template>

<script>
import { useStore, mapActions } from "vuex";
import { computed, onMounted } from "vue";

export default {
  name: "Categories",
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
  }
};
</script>