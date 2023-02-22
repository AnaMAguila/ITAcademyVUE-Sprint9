<template>
<Header />
  <nav class="navbar navbar-expand-md bg-body-tertiary">
    <div class="container-fluid banner">
      <img src="@/assets/img/Logo.png" class="logo" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item" v-if="loggedUser">
            <router-link to="/mealplanner" class="nav-link">Meal planner</router-link>
          </li>
          <li class="nav-item" v-if="loggedUser">
            <router-link to="/mealbyingredients" class="nav-link">Meal by ingredients</router-link>
          </li>
        </ul>
      </div>
      <img src="@/assets/img/organic.png" class="logo d-none d-md-block" />
    </div>
  </nav>
  <router-view />
  <Login />
  <SignUp />
</template>

<script>
import Header from "@/components/Header.vue";
import Login from "@/views/Login.vue";
import SignUp from "@/views/SignUp.vue";

import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Login,
    SignUp,
  },
  setup() {
    const store = useStore();
    const loggedUser = computed(() => store.state.user);

    return { loggedUser};
  }
};
</script>

<style>
.logo {
  width: 150px;
  margin: 10px;
}
.banner {
  background-image: url("@/assets/img/banner.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

@media (max-width: 776px) {
  .banner {
    background-image: none;
  }
}
</style>