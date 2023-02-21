<template>
  <div class="container card">
    <div class="card-body" v-for="meal of dataIdMeal" :key="meal.idMeal">
      <h4 class="card-title text-center text-uppercase">{{ meal.strMeal }}</h4>
      <p class="text-center"><span class="fw-bold">Category: </span>{{ meal.strCategory }} | 
      <span class="fw-bold">Area: </span>{{ meal.strArea }}</p>
      <hr />
      <div class="card-text row mb-3 text-center">
        <div class="col-md-4 themed-grid-col">
          <img :src="meal.strMealThumb" class="img-thumbnail" />
          <div class="row">
            <div class="col-12 themed-grid-col">
              <hr />
              <p class="fw-bold text-start">Ingredients:</p>
              <ul class="text-start">
                <li v-if="meal.strIngredient1">
                  {{ meal.strIngredient1 }} {{ meal.strMeasure1 }}
                </li>
                <li v-if="meal.strIngredient2">
                  {{ meal.strIngredient2 }} {{ meal.strMeasure2 }}
                </li>
                <li v-if="meal.strIngredient3">
                  {{ meal.strIngredient3 }} {{ meal.strMeasure3 }}
                </li>
                <li v-if="meal.strIngredient4">
                  {{ meal.strIngredient4 }} {{ meal.strMeasure4 }}
                </li>
                <li v-if="meal.strIngredient5">
                  {{ meal.strIngredient5 }} {{ meal.strMeasure5 }}
                </li>
                <li v-if="meal.strIngredient6">
                  {{ meal.strIngredient6 }} {{ meal.strMeasure6 }}
                </li>
                <li v-if="meal.strIngredient7">
                  {{ meal.strIngredient7 }} {{ meal.strMeasure7 }}
                </li>
                <li v-if="meal.strIngredient8">
                  {{ meal.strIngredient8 }} {{ meal.strMeasure8 }}
                </li>
                <li v-if="meal.strIngredient9">
                  {{ meal.strIngredient9 }} {{ meal.strMeasure9 }}
                </li>
                <li v-if="meal.strIngredient10">
                  {{ meal.strIngredient10 }} {{ meal.strMeasure10 }}
                </li>
                <li v-if="meal.strIngredient11">
                  {{ meal.strIngredient11 }} {{ meal.strMeasure11 }}
                </li>
                <li v-if="meal.strIngredient12">
                  {{ meal.strIngredient12 }} {{ meal.strMeasure12 }}
                </li>
                <li v-if="meal.strIngredient13">
                  {{ meal.strIngredient13 }} {{ meal.strMeasure13 }}
                </li>
                <li v-if="meal.strIngredient14">
                  {{ meal.strIngredient14 }} {{ meal.strMeasure14 }}
                </li>
                <li v-if="meal.strIngredient15">
                  {{ meal.strIngredient15 }} {{ meal.strMeasure15 }}
                </li>
                <li v-if="meal.strIngredient16">
                  {{ meal.strIngredient16 }} {{ meal.strMeasure16 }}
                </li>
                <li v-if="meal.strIngredient17">
                  {{ meal.strIngredient17 }} {{ meal.strMeasure17 }}
                </li>
                <li v-if="meal.strIngredient18">
                  {{ meal.strIngredient18 }} {{ meal.strMeasure18 }}
                </li>
                <li v-if="meal.strIngredient19">
                  {{ meal.strIngredient19 }} {{ meal.strMeasure19 }}
                </li>
                <li v-if="meal.strIngredient20">
                  {{ meal.strIngredient20 }} {{ meal.strMeasure20 }}
                </li>
              </ul>
              <hr>
            </div>
          </div>
        </div>
        <div class="col-md-8 themed-grid-col">
          <div class="pb-3 text-start">
            <h4>Instructions</h4>
            <p
              v-html="meal.strInstructions.replace(/(?:\r\n|\r|\n)/g, '<br />')"
            ></p>
            <!-- <YouTube :src="meal.strYoutube" width="100%" @ready="onReady" ref="youtube" /> -->
            <h5 class="text-center"><a :href="meal.strYoutube" target="blank">Watch the recipe on youtube</a></h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore, mapActions } from "vuex";
import { computed } from "vue";
// import YouTube from "vue3-youtube";

export default {
  name: "Recipe",
  // components: { YouTube },
  data() {
    return {
      idMeal: this.$route.params.id,
    };
  },
  setup() {
    const store = useStore();
    const dataIdMeal = computed(() => store.state.dataIdMeal.meals);
    return { dataIdMeal };
  },
  created() {
    this.showIdMeal(this.idMeal);
  },
  methods: {
    ...mapActions(["showIdMeal"]),
    onReady() {
      if (this.$refs.youtube.playVideo) this.$refs.youtube.playVideo();
    },
  },
};
</script>

<style scoped>
.mini {
  width: 50px;
}
</style>