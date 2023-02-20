<template>
  <div class="searchmeal input-group flex-nowrap">
    <span class="input-group-text" id="addon-wrapping">&#128269;</span>
    <input
      type="text"
      class="form-control"
      placeholder="Search"
      aria-describedby="addon-wrapping"
      v-model="search"
    />
  </div>
</template>

<script>
import { useStore, mapActions } from "vuex";
import { onMounted } from "vue";

export default {
  name: "SearchMeal",
  data() {
    return {
      search: "",
    };
  },
  watch: {
    search() {
      this.searchMeal(this.search);
    },
  },
  setup() {
    //accedemos a nuestro store
    const store = useStore();

    // ejecuta antes de mostrar nuestro template
    onMounted(() => {
      store.dispatch("searchMeal");
    });
  },
  methods: {
    ...mapActions(["searchMeal"]),
  }
};
</script>

<style>
</style>