<template>
  <div class="area">
    <select class="form-select" v-model="selectedValue">
      <option value="" disabled selected>Meals by Area</option>
      <option v-for="area of area" :key="area.strArea" :value="area.strArea">
        {{ area.strArea }}
      </option>
    </select>

    <!-- <h5>AREA</h5> 
    <div v-for="area of area" :key="area.strArea" class="area">
      <button @click="selArea(area.strArea)" class="area-button">
        {{ area.strArea }}
      </button>
    </div> -->
  </div>
</template>

<script>
import { useStore, mapActions } from "vuex";
import { computed, onMounted } from "vue";

export default {
  name: "Area",
  data() {
    return {
      selectedValue: "",
    };
  },
  watch: {
    selectedValue(value) {
      this.selArea(value);
    },
  },
  setup() {
    //accedemos a nuestro store
    const store = useStore();

    // ejecuta antes de mostrar nuestro template
    onMounted(() => {
      store.dispatch("area");
    });

    // mapeamos el state para mostrar el array en el v-for
    const area = computed(() => store.state.dataArea.area);

    return { area };
  },
  methods: {
    ...mapActions(["selArea"]),
  },
};
</script>

<style>
option {
  background-color: #fff;
}
/* .area {
  color: #fff;
  text-transform: uppercase;
}
.area-thumb {
  width: 50px;
}
.area-button {
  border: none;
  color: #fff;
} */
</style>