<template>
  <div class="hello">
    <!-- Adiciona ID para o conteúdo principal -->
    <div id="main-content">
      <h1>{{ msg }}</h1>
      <p>
        Esse é um guia das documentações integradas e de como utilizar essas
        bibliotecas no seu desenvolvimento.
        <a
          href="https://github.com/PedroCantanhede/thundera"
          target="_blank"
          rel="noopener"
          >Documentação Thundera</a
        >.
      </p>
      <h3>Exemplo dos Componentes Implementados</h3>
      <ul>
        <li>
          <router-link to="/examples">Examples</router-link>
        </li>
      </ul>
      <h3>Documentação das Libs</h3>
      <ul>
        <li>
          <a
            href="https://github.com/vue-a11y/vue-announcer"
            target="_blank"
            rel="noopener"
            >Vue Announcer</a
          >
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/vue3-accessible-tabs"
            target="_blank"
            rel="noopener"
            >AccessibleTabs</a
          >
        </li>
        <li>
          <a href="https://vue-final-modal.org/" target="_blank" rel="noopener"
            >Vue Final Modal</a
          >
        </li>
        <li>
          <a
            href="https://github.com/theKashey/vue-focus-lock"
            target="_blank"
            rel="noopener"
            >Focus Lock</a
          >
        </li>
        <li>
          <a href="https://formkit.com/" target="_blank" rel="noopener"
            >Form Kit</a
          >
        </li>
        <li>
          <a
            href="https://github.com/vue-a11y/vue-skip-to"
            target="_blank"
            rel="noopener"
            >Skip To</a
          >
        </li>
        <li>
          <a
            href="https://bootstrap-vue.org/docs/reference/accessibility"
            target="_blank"
            rel="noopener"
            >Sr Only</a
          >
        </li>
      </ul>
    </div>

    <!-- Adiciona ID para a seção de recursos -->
    <div id="resources">
      <h3>Ferramenta de Auditoria de Acessibilidade</h3>
      <ul>
        <li>
          <a
            href="https://github.com/vue-a11y/vue-axe"
            target="_blank"
            rel="noopener"
            >Vue Axe (Vue Core)</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useAnnouncer } from "@vue-a11y/announcer";

export default {
  name: "DocumentationPage",
  components: {},
  props: {},
  setup() {
    const { announce } = useAnnouncer();

    function announceMessage() {
      announce(
        "Bem-vindo à página de documentação! Navegue pelos links para explorar os recursos."
      );
    }

    return {
      announceMessage,
    };
  },
  data() {
    return {
      msg: "Bem-vindo à Documentação",
      showModal: false,
      showDialog: false,
      showAlert: true,
      tabs: [
        {
          label: "Introdução",
          content: "Bem-vindo à introdução das nossas abas acessíveis!",
        },
        {
          label: "Recursos",
          content:
            "Nossos recursos incluem acessibilidade, rapidez e confiabilidade.",
        },
        {
          label: "Contato",
          content: "Entre em contato conosco pelo e-mail: contato@exemplo.com",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #7638c7;
}
</style>
