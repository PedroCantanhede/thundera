<template>
    <div>
      <button @click="openModal">Abrir Modal</button>
  
      <!-- Modal com FocusLock -->
      <FocusLock v-if="isModalOpen" @click.self="closeModal">
        <div class="modal">
          <h2>Conteúdo do Modal</h2>
          <p>Este é um modal que utiliza o FocusLock para gerenciar o foco.</p>
          <button @click="closeModal">Fechar Modal</button>
        </div>
      </FocusLock>
    </div>
  </template>
  
  <script>
  import FocusLock from 'vue-focus-lock';
  
  export default {
    name: 'FocusLock',
    components: {
      FocusLock,
    },
    data() {
      return {
        isModalOpen: false, // Controla a exibição do modal
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },
    },
  };
  </script>
  
  <style scoped>
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
  </style>
  