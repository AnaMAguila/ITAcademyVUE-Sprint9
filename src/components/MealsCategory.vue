<template><!-- <div class="container-fluid">
        <h3>{{ selectedCategoryName }}</h3>
        <span v-for="meal of selectedCategory" :key="meal.idMeal">
            <div class="card" style="width: 10rem;">
                <img :src="meal.strMealThumb" class="card-img-top" alt="meal.strMeal">
                <div class="card-body">
                    <h5 class="card-title">{{ meal.strMeal }}</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </span>
    </div> -->
        <div class="container">
            <h3>{{ selectedCategoryName }}</h3>
            <hr>
            <div class="row">
                <MealCard v-for="meal of selectedCategory" :key="meal.idMeal" :idMeal="meal"/>
            </div>
        </div>
</template>

<script>
import { useStore, mapActions } from 'vuex'
import { computed } from 'vue';
import MealCard from './MealCard.vue';

export default {
    name: 'MealsCategory',
    components: {
        MealCard
    },
    data() {
        return {
            selectedCategoryName: this.$route.params.id,
        }
    },
    created() {
        this.selCategory(this.$route.params.id);
    },
    setup() {
        //accedemos a nuestro store
        const store = useStore();

        // mapeamos el state para mostrar el array en el v-for
        const selectedCategory = computed(() => store.state.dataSelectedCategory.meals);

        return { selectedCategory }
    },
    methods: {
        ...mapActions(['selCategory'])
    }
}
</script>

<style>
.miniatura {
    width: 200px;
}
</style>