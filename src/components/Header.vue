<template>
  <nav class="navbar navbar-expand bg-body-tertiary">
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-if="loggedUser">
          Logged in as <span class="text-success">{{ loggedUser.email }}</span>
          <button
            type="button"
            class="myButton"
            @click="handleClick()"
          >
            Logout
          </button>
        </li>
        <li class="nav-item" v-if="!loggedUser">
          <button
            type="button"
            class="myButton"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            Login
          </button>
        </li>
        <li class="nav-item" v-if="!loggedUser">
          <button
            type="button"
            class="myButton"
            data-bs-toggle="modal"
            data-bs-target="#signupModal"
          >
            SignUp
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue';

export default {
  name: "Header",
  setup(){
    const store = useStore()

    const loggedUser = computed(() => store.state.user);
    const authIsReady = computed(() => store.state.authIsReady);

    const handleClick = () => {
      store.dispatch('logout')
    }

    return { handleClick, loggedUser, authIsReady }
  }
};
</script>

<style>
.myButton {
  border: none;
  background-color: #fff;
  color: #848484;
}
</style>