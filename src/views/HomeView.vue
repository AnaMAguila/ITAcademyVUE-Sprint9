<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-2">
        <Categories />
        <p></p>
        <Area />
      </div>
      <div class="col-10">
        <MealsCategory />        
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Categories from '@/components/Categories.vue'
import MealsCategory from '@/components/MealsCateArea.vue';
import Area from '@/components/Area.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Categories,
    MealsCategory,
    Area
  }
}
</script>
