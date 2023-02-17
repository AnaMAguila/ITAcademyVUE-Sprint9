<template>
  <div class="home">
    <h1>MEALVELOUS</h1>
    <Categories />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Categories from '@/components/Categories.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Categories
  }
}
</script>
