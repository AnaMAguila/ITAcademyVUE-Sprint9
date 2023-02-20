<template>
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
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Sign Up</router-link>
          </li>
        </ul>
      </div>
      <img src="@/assets/img/organic.png" class="logo d-none d-md-block" />
    </div>
  </nav>
  <router-view />
</template>

<style>
.logo {
  width: 150px;
  margin: 10px;
}
.banner{
  background-image: url("@/assets/img/banner.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

@media (max-width: 600px) {
  .banner{
    background-image: none;
  }
}
</style>