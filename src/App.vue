<template>
  <img alt="Logo Thundera Biblioteca" class="logo" src="./assets/logo.png">
  <VueAnnouncer class="sr-only" />
  <DocumentationPage msg="Bem-vindo à Biblioteca Thundera!" />
</template>

<script>
import DocumentationPage from './components/DocumentationPage.vue';

export default {
  name: 'App',
  components: {
    DocumentationPage
  }
}
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
