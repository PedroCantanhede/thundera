<template>
  <img alt="Logo Thundera Biblioteca" class="logo" src="./assets/logo.png" />
  <VueAnnouncer class="sr-only" />
  <!-- Renderiza o componente da rota atual -->
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 15rem;
  padding-bottom: 4rem;
}
</style>
