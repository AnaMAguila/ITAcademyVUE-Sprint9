<template>
  <div class="home">
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
