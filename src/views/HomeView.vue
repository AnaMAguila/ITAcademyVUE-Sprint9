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
        <Welcome v-if="emptyData === null" />
        <MealsCateArea />
      </div>
    </div>
  </div>
</template>

<script>
import Categories from "@/components/Categories.vue";
import Area from "@/components/Area.vue";
import SearchMeal from "@/components/SearchMeal.vue";
import MealsCateArea from "@/components/MealsCateArea.vue";
import Welcome from "@/components/WelcomePage.vue";

export default {
  name: "HomeView",
  components: {
    Categories,
    Area,
    SearchMeal,
    MealsCateArea,
    Welcome,
  },
  computed: {
    emptyData() {
      return this.$store.getters.emptyData;
    },
  },
};
</script>
