<template>
  <div>
    <div class="modal fade" id="plannerModal" tabindex="-1" aria-labelledby="plannerModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div class="container">Choose day of the week to save meal to:</div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" ref="Close" id="close"></button>
          </div>
          <div class="modal-body">
            <form class="needs-validation" @submit.prevent="addToPlanner()">
              <select class="form-select" aria-label="Default select example" v-model="dayWeek">
                <option selected>Select a day of the week</option>
                <option value="1">Monday</option>
                <option value="2">Tuesday</option>
                <option value="3">Wednesday</option>
                <option value="4">Thursday</option>
                <option value="5">Friday</option>
                <option value="6">Saturday</option>
                <option value="7">Sunday</option>
              </select>
              <button class="btn btn-outline-success mt-2">Add to Planner</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore, mapActions, mapMutations } from "vuex";
import { computed } from "vue";

export default {
  name: "ModalPlanner",
  data() {
    return {
      dayWeek: "",
    }
  },
  setup() {
    const store = useStore();
    const dataIdMeal = computed(() => store.state.dataIdMeal);
    const dataWeek = computed(() => store.state.dataWeek);
    // const addToPlanner = 
    return { dataIdMeal, dataWeek };
  },
  created() {
    this.showIdMeal(this.idMeal);
  },
  methods: {
    ...mapActions(["showIdMeal"]),
    ...mapMutations(["setWeekPlanner"]),
    addToPlanner(){      
      const newObject = Object.assign(this.dataIdMeal.meals, this.dayWeek);
      this.setWeekPlanner(newObject);
      document.getElementById('close').click();
    }
  },
};
</script>