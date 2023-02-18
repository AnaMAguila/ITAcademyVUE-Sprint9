<template>
  <div >

  </div>


  <nav>
    <img src="@/assets/img/Logo.png" class="logo">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
* {
  background-color: #005f73;
}

.logo {
  width: 150px;
  margin: 10px;
}
</style>