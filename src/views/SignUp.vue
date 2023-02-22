<template>
  <div>
    <div
      class="modal fade"
      id="signupModal"
      tabindex="-1"
      aria-labelledby="signupModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-10">SIGN UP</div>
              </div>
            </div>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              ref="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="needs-validation" @submit.prevent="handleSubmit">
              <div class="input-group has-validation mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email address"
                  name="email"
                  v-model="email"
                  required
                />
              </div>
              <div class="input-group has-validation mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  name="password"
                  v-model="password"
                  required
                />
              </div>
              <div v-if="error && !loggedUser">{{ error }}</div>
              <div v-if="loggedUser">User created successfully</div>
              <button v-if="!loggedUser" class="btn btn-outline-success">Sign Up</button>
              <button v-if="loggedUser" class="btn btn-outline-success" data-bs-dismiss="modal" ref="Close">Close</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "SignUp",
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const store = useStore();
    const loggedUser = computed(() => store.state.user);

    const handleSubmit = async () => {
      try {
        await store.dispatch("signup", {
          email: email.value,
          password: password.value,
        })
      } catch (err) {
        error.value = err.message.substring(10);
        // error.value = err.message;
      }
    };
    return { handleSubmit, email, password, error, loggedUser};
  }
};
</script>