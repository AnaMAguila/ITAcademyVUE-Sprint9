<template>
  <div class="container" v-if="!loggedUser">To see this content you need to be registered</div>
  <div class="home container" v-if="loggedUser">
    <div class="row mt-3">
      <div class="col-12 col-sm-6 mb-4">
        <h3>Week Planner</h3>
        <table class="w-100">
          <tr>
            <td class="cabecera">MONDAY</td>
            <td>
              <div v-for="meal of dataWeek" :key="meal.idMeal">
                <div v-if="meal[0]==1">   
                  <img :src="meal.strMealThumb" class="mini-img"/>
                  {{ meal.strMeal }}
                  <a :href="`/recipe/${meal.idMeal}`" class="btn btn-outline-light btn-sm" target="blank"><i class="bi bi-eye"></i></a>
                  <button class="btn btn-outline-light btn-sm" @click="elimina(meal.idMeal)">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="cabecera">TUESDAY</td>
            <td>
              <div v-for="meal of dataWeek" :key="meal.idMeal">
                <div v-if="meal[0]==2">
                  <img :src="meal.strMealThumb" class="mini-img"/>
                  {{ meal.strMeal }}
                  <a :href="`/recipe/${meal.idMeal}`" class="btn btn-outline-light btn-sm" target="blank"><i class="bi bi-eye"></i></a>
                  <button class="btn btn-outline-light btn-sm" @click="elimina(meal.idMeal)">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="cabecera">WEDNESDAY</td>
            <td>
              <div v-for="meal of dataWeek" :key="meal.idMeal">
                <div v-if="meal[0]==3">
                  <img :src="meal.strMealThumb" class="mini-img"/>
                  {{ meal.strMeal }}
                  <a :href="`/recipe/${meal.idMeal}`" class="btn btn-outline-light btn-sm" target="blank"><i class="bi bi-eye"></i></a>
                  <button class="btn btn-outline-light btn-sm" @click="elimina(meal.idMeal)">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="cabecera">THURSDAY</td>
            <td>
              <div v-for="meal of dataWeek" :key="meal.idMeal">
                <div v-if="meal[0]==4">
                  <img :src="meal.strMealThumb" class="mini-img"/>
                  {{ meal.strMeal }}
                  <a :href="`/recipe/${meal.idMeal}`" class="btn btn-outline-light btn-sm" target="blank"><i class="bi bi-eye"></i></a>
                  <button class="btn btn-outline-light btn-sm" @click="elimina(meal.idMeal)">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="cabecera">FRIDAY</td>
            <td>
              <div v-for="meal of dataWeek" :key="meal.idMeal">
                <div v-if="meal[0]==5">
                  <img :src="meal.strMealThumb" class="mini-img"/>
                  {{ meal.strMeal }}
                  <a :href="`/recipe/${meal.idMeal}`" class="btn btn-outline-light btn-sm" target="blank"><i class="bi bi-eye"></i></a>
                  <button class="btn btn-outline-light btn-sm" @click="elimina(meal.idMeal)">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="cabecera">SATURDAY</td>
            <td>
              <div v-for="meal of dataWeek" :key="meal.idMeal">
                <div v-if="meal[0]==6">
                  <img :src="meal.strMealThumb" class="mini-img"/>
                  {{ meal.strMeal }}
                  <a :href="`/recipe/${meal.idMeal}`" class="btn btn-outline-light btn-sm" target="blank"><i class="bi bi-eye"></i></a>
                  <button class="btn btn-outline-light btn-sm" @click="elimina(meal.idMeal)">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="cabecera">SUNDAY</td>
            <td>
              <div v-for="meal of dataWeek" :key="meal.idMeal">
                <div v-if="meal[0]==7">
                  <img :src="meal.strMealThumb" class="mini-img"/>
                  {{ meal.strMeal }}
                  <a :href="`/recipe/${meal.idMeal}`" class="btn btn-outline-light btn-sm" target="blank"><i class="bi bi-eye"></i></a>
                  <button class="btn btn-outline-light btn-sm" @click="elimina(meal.idMeal)">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="col-12 col-sm-6">
        <ShoppingList />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from 'vuex';

import ShoppingList from './ShoppingList.vue';

export default {
  name: "MealPlanner",
  components: {
    ShoppingList
  },
  setup() {
    const store = useStore();
    const dataWeek = computed(() => store.state.dataWeek);
    const loggedUser = computed(() => store.state.user);

    const elimina = idMeal => {
      store.commit('delMealWeek', idMeal);
    }

    return { dataWeek, elimina, loggedUser }
  }
}
</script>

<style scoped>
tr {
  border: 2px solid #fff;
}
td {
  background-color: #3c6a00a1;
  color: #fff; 
  padding: 10px;
}
.cabecera {
  background-color: #3c6a00;
  color: #fff;
  padding: 10px;
  text-align: center;
}

.mini-img {
  width: 40px;
  margin: 2px;
}
</style>