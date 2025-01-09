<template>
    <div class="examples-page">
      <h1>Exemplos de Componentes</h1>
  
      <!-- Modal -->
      <h2>Accessible Modal</h2>
      <button @click="showModal = true">Abrir Modal</button>
      <AccessibleModal
        v-model:isVisible="showModal"
        title="Exemplo de Modal Acessível"
        description="Este é um modal acessível com foco confinado e mensagens para leitores de tela."
      >
        <p>Este é o conteúdo principal do modal.</p>
      </AccessibleModal>
  
      <!-- Card -->
      <h2>Accessible Card</h2>
      <div class="cards-container">
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
      </div>
  
      <!-- Dialog -->
      <h2>Accessible Dialog</h2>
      <button @click="showDialog = true">Abrir Diálogo</button>
      <AccessibleDialog
        v-model:isVisible="showDialog"
        title="Exemplo de Diálogo Acessível"
        openMessage="Diálogo de exemplo foi aberto."
        closeMessage="Diálogo de exemplo foi fechado."
      >
        <p>Este é o conteúdo principal do diálogo.</p>
      </AccessibleDialog>
  
      <!-- Lista -->
      <h2>Accessible List</h2>
      <AccessibleList
        :items="['Item 1', 'Item 2', 'Item 3']"
        initialIndex="0"
        @item-selected="handleItemSelected"
      >
        <template #item="{ item }">
          <span>{{ item }}</span>
        </template>
      </AccessibleList>
  
      <!-- Alert -->
      <h2>Accessible Alert</h2>
      <button @click="showAlert = true">Mostrar Alerta</button>
      <AccessibleAlert
        v-model:visible="showAlert"
        title="Alerta de Sucesso"
        description="Sua operação foi concluída com êxito!"
        :autoDismiss="false"
        :dismissTimeout="5000"
      />
  
      <!-- Tooltip -->
      <h2>Accessible Tooltip</h2>
      <AccessibleTooltip content="Este é um tooltip acessível!">
        <template #icon>
          <i class="fas fa-question-circle"></i>
        </template>
      </AccessibleTooltip>
  
      <!-- Form -->
      <h2>Accessible Form</h2>
      <AccessibleForm
        title="Cadastro"
        buttonText="Cadastrar"
        @submit="handleFormSubmit"
      />
  
      <!-- Button -->
      <h2>Announced Button</h2>
      <AnnouncedButton
        label="Salvar"
        aria-label="Botão para salvar os dados"
        announcement="Os dados foram salvos com sucesso!"
        @click="handleSave"
      />
  
      <!-- SkipToButton -->
      <h2>Skip To Button</h2>
      <SkipToButton target="#main-content" label="Ir para o conteúdo principal" />
    </div>
  </template>
  
  <script>
  import AccessibleModal from "./AccessibleModal.vue";
  import AccessibleCard from "./AccessibleCard.vue";
  import AccessibleDialog from "./AccessibleDialog.vue";
  import AccessibleList from "./AccessibleList.vue";
  import AccessibleAlert from "./AccessibleAlert.vue";
  import AccessibleTooltip from "./AccessibleTooltip.vue";
  import AccessibleForm from "./AccessibleForm.vue";
  import AnnouncedButton from "./AnnouncedButton.vue";
  import SkipToButton from "./SkipToButton.vue";
  
  export default {
    name: "ExamplesPage",
    components: {
      AccessibleModal,
      AccessibleCard,
      AccessibleDialog,
      AccessibleList,
      AccessibleAlert,
      AccessibleTooltip,
      AccessibleForm,
      AnnouncedButton,
      SkipToButton,
    },
    data() {
      return {
        showModal: false,
        showDialog: false,
        showAlert: false,
      };
    },
    methods: {
      handleItemSelected(item) {
        console.log(`Você selecionou: ${item}`);
      },
      handleFormSubmit(formData) {
        console.log("Dados do formulário:", formData);
      },
      handleSave() {
        console.log("Dados salvos com sucesso!");
      },
    },
  };
  </script>
  
  <style scoped>
  .examples-page {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  .cards-container {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
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
  