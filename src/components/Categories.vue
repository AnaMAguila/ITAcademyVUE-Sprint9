<template>
  <div class="categories">
    <h3>Categories</h3>
    <div v-for="category of categories" :key="category.idCategory">
      {{ category.strCategory }}
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

</style>