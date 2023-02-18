<template>
    <div class="container">
        <!-- <h3>{{ selectedCategoryName }}</h3> -->
        <div class="row">
            <MealCard v-for="meal of selectedCateArea" :key="meal.idMeal" :idMeal="meal" />
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue';
import MealCard from './MealCard.vue';

export default {
    name: 'MealsCategory',
    components: {
        MealCard
    },
    setup() {
        //accedemos a nuestro store
        const store = useStore();

        // mapeamos el state para mostrar el array en el v-for
        const selectedCateArea = computed(() => store.state.dataSelectedCateArea.meals);

        return { selectedCateArea }
    }
}
</script>

<style>
.miniatura {
    width: 200px;
}
</style>