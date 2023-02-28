<template>
  <h3>Shopping List</h3>
  <div class="columns pt-3">
    <ul v-for="item of verSoloIngredientes" :key="item.idMeal">
      <li><input type="checkbox" id="cbox"> {{item}}</li>
    </ul>
  </div>  
</template>

<script>
import { computed } from "vue";
import { useStore, mapActions } from "vuex";

export default {
  name: "ShoppingList",
  setup() {
    const store = useStore();
    const dataWeek = computed(() => store.state.dataWeek);
    const weekIngredients = computed(() => store.state.weekIngredients);

    return { dataWeek , weekIngredients };
  },
  created() {
    this.showWeekIngredients(this.dataWeek);
  },
  methods: {
    ...mapActions(["showWeekIngredients"])
  },
  computed: {
    verSoloIngredientes(){
      let arrayIngredients = [];
      
      for(let clave in this.weekIngredients){
        let recipe = this.weekIngredients[clave][0];     
        
        const ingredients = Object.keys(recipe).filter(k => k.includes('strIngredient')).map(k => recipe[k]);
        arrayIngredients = arrayIngredients.concat(ingredients);
      }

      let arrayLimpio = arrayIngredients.filter((item,index)=>{
        return arrayIngredients.indexOf(item) === index}).filter(item => item != "").sort((a, b) =>
        a !== b ? (a < b ? -1 : 1) : 0)
      
      return arrayLimpio;       
    }
  }
};
</script>

<style>
.columns {
  column-count: 3;
}

ul {
  list-style: none;
}

</style>