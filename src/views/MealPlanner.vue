<template>
  <div class="home container-fluid">
    <div class="row mt-3">
      <div class="col-12 col-sm-4 col-md-3 col-lg-2">
        <SearchMeal />
        <p></p>
        <Categories />
        <p></p>
        <Area />
      </div>
      <div class="col-12 col-sm-8 col-md-9 col-lg-10">
        <div class="col-6"></div>
        <div class="col-6"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Categories from "@/components/Categories.vue";
import Area from "@/components/Area.vue";
import SearchMeal from "@/components/SearchMeal.vue";

export default {
  name: "MealPlanner",
  components: {
    Categories,
    Area,
    SearchMeal
  },
}
</script>

<style>

</style>