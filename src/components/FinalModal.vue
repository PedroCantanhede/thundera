<template>
    <div>
      <button @click="showModal = true">Abrir Modal</button>
      <VueFinalModal
        v-model="showModal"
        focus-trap
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        @closed="handleClose"
      >
        <div>
          <h2 id="modal-title">Este é um modal acessível</h2>
          <p id="modal-description">Conteúdo do modal aqui.</p>
          <button @click="showModal = false">Fechar Modal</button>
        </div>
      </VueFinalModal>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FinalModal',
    data() {
      return {
        showModal: false,
      };
    },
    methods: {
      handleClose() {
        console.log('Modal fechado');
      },
    },
  };
  </script>
  