<template>
    <div class="col-12 col-sm-6 col-md-3 mb-3">
            <div class="card h-100">
                <img :src="idMeal.strMealThumb" :alt="idMeal.strMeal" class="card-img-top" />
                <div class="card-body bg-light">
                    <p class="card-title bg-light text-center">{{ cardControlLength() }}</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-dark">View recipe</button>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'MealCard',
    props: ['idMeal'],
    methods: {
        cardControlLength() {
            if (this.idMeal.strMeal.length > 25) {
                this.idMeal.strMeal = this.idMeal.strMeal.substr(0, 25) + '...';
            };
            return this.idMeal.strMeal
        }
    }
}
</script>