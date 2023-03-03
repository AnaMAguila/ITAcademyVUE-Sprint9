<template>
  <div class="container" v-if="!loggedUser">To see this content you need to be registered</div>
  <div class="container" v-if="loggedUser">
    <h3>Favorites</h3>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-3" v-for="meal of favoritesArray" :key="meal.idMeal">
      <MealCard
        :idMeal="meal"
      />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from 'vuex'
import MealCard from "@/components/MealCard.vue";
import { getDatabase, ref, onValue } from "firebase/database";

export default {
    name: 'Favorites',
    components: {
        MealCard
    },
    setup() {
        const store = useStore()
        const favoritesArray = computed(() => store.state.dataFavorite)
        const loggedUser = computed(() => store.state.user);

        const db = getDatabase(); 
        const mealListRef = ref(db, 'favorites'); 
        
        onValue(mealListRef, (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            store.commit('setFavorite', childData);
          });
        },
        {
          onlyOnce: true
        });

        return { favoritesArray, loggedUser }
    }
}
</script>

<style>

</style>