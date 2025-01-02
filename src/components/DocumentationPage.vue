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

    <!-- Modal -->
    <h1>{{ msg }}</h1>
    <button @click="showModal = true">Abrir Modal</button>

    <AccessibleModal
      v-model:isVisible="showModal"
      title="Exemplo de Modal Acessível"
      description="Este é um modal acessível com foco confinado e mensagens para leitores de tela."
    >
      <p>Este é o conteúdo principal do modal.</p>
    </AccessibleModal>

    <!-- Card -->
    <div class="cards-container">
      <!-- Card 1 -->
      <AccessibleCard
        :focusLock="false"
        announceMessage="Você clicou no cartão Produto 1."
      >
        <template #image>
          <img
            src="https://via.placeholder.com/300?text=Produto+1"
            alt="Imagem do Produto 1"
          />
        </template>
        <template #title>Produto 1</template>
        <template #description>
          Este é um produto incrível com recursos inovadores.
        </template>
        <template #actions>
          <button class="card-button">Comprar</button>
        </template>
      </AccessibleCard>

      <!-- Card 2 -->
      <AccessibleCard
        :focusLock="false"
        announceMessage="Você clicou no cartão Produto 2."
      >
        <template #image>
          <img
            src="https://via.placeholder.com/300?text=Produto+2"
            alt="Imagem do Produto 2"
          />
        </template>
        <template #title>Produto 2</template>
        <template #description>
          Este produto é perfeito para suas necessidades diárias.
        </template>
        <template #actions>
          <button class="card-button">Saiba Mais</button>
        </template>
      </AccessibleCard>
    </div>

    <!-- Dialog -->
    <div class="container-dialog">
      <button @click="showDialog = true">Abrir Diálogo</button>
      <AccessibleDialog
        v-model:isVisible="showDialog"
        title="Exemplo de Diálogo Acessível"
        openMessage="Diálogo de exemplo foi aberto."
        closeMessage="Diálogo de exemplo foi fechado."
      >
        <p>Este é o conteúdo principal do diálogo.</p>
        <template #footer>
          <button @click="showDialog = false" class="close-btn">Fechar</button>
        </template>
      </AccessibleDialog>
    </div>

    <!-- Lista -->
    <div class="container-list">
      <h2>Exemplo de Lista Acessível</h2>
      <AccessibleList
        :items="['Item 1', 'Item 2', 'Item 3']"
        initialIndex="0"
        @item-selected="handleItemSelected"
      >
        <template #item="{ item }">
          <span>{{ item }}</span>
        </template>
      </AccessibleList>
    </div>

    <!-- Alert -->
    <button @click="showAlert = true">Mostrar Alerta</button>

    <AccessibleAlert
      v-model:visible="showAlert"
      title="Alerta de Sucesso"
      description="Sua operação foi concluída com êxito!"
      :autoDismiss="false"
      :dismissTimeout="5000"
    />

  </div>
</template>

<script>
import { useAnnouncer } from "@vue-a11y/announcer";
import AccessibleModal from "./AccessibleModal.vue";
import AccessibleCard from "./AccessibleCard.vue";
import AccessibleDialog from "./AccessibleDialog.vue";
import AccessibleList from "./AccessibleList.vue";
import AccessibleAlert from "./AccessibleAlert.vue";

export default {
  name: "DocumentationPage",
  components: {
    AccessibleModal,
    AccessibleCard,
    AccessibleDialog,
    AccessibleList,
    AccessibleAlert
  },
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
    };
  },
  methods: {
    handleCardInteraction() {
      console.log("Interação com o cartão registrada!");
    },
    handleCardAction() {
      console.log("Ação no cartão realizada!");
    },
    handleItemSelected(item) {
      console.log(`Você selecionou: ${item}`);
    },
  },
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
button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #7638c7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #5a2e99;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
