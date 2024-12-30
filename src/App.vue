<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <VueAnnouncer />
  <DocumentationPage msg="Bem-vindo à Biblioteca Thundera!"/>
</template>

<script>
import DocumentationPage from './components/DocumentationPage.vue';
import VueAnnouncer from './components/VueAnnouncer.vue';

export default {
  name: 'App',
  components: {
    DocumentationPage,
    VueAnnouncer
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
</style>
