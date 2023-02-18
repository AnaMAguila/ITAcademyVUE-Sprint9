<template>
  <div class="categories">
    <h3>CATEGORIES</h3>
    <div v-for="category of categories" :key="category.idCategory" class="category">
      <router-link :to="{ name: 'mealscategory', params: { id: category.strCategory } }">
        {{ category.strCategory }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue';

export default {
  name: 'Categories',
  components: {

  },
  setup() {
    //accedemos a nuestro store
    const store = useStore();

    // ejecuta antes de mostrar nuestro template
    onMounted(() => {
      store.dispatch('categories');
    });

    // mapeamos el state para mostrar el array en el v-for
    const categories = computed(() => store.state.dataCategories.categories);

    return { categories }
  }
}
</script>

<style>
.category {
  color: #fff;
  text-transform: uppercase;
}
</style>