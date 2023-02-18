<template>
    <div>
        <h3>{{ selectedCategoryName }}</h3>
        <div v-for="meal of selectedCategory" :key="meal.idMeal">
            {{ meal.strMeal }}
        </div>

    </div>
</template>

<script>
import { useStore, mapActions } from 'vuex'
import { computed } from 'vue';

export default {
    name: 'MealsCategory',
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

<style></style>