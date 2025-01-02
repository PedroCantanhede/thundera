<template>
    <FocusLock :disabled="!isVisible">
      <div class="backdrop" v-if="isVisible">
        <div class="modal" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description">
          <button class="close-btn" @click="closeModal" aria-label="Fechar">
            &times;
          </button>
          <h2 id="modal-title">{{ title }}</h2>
          <div id="modal-description">
            <slot />
          </div>
        </div>
      </div>
    </FocusLock>
  </template>
  
  <script>
  import { useAnnouncer } from "@vue-a11y/announcer";
  import FocusLock from "vue-focus-lock";
  
  export default {
    name: "AccessibleModal",
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
      title: {
        type: String,
        default: "Título do Modal",
      },
    },
    emits: ["update:isVisible"],
    methods: {
      closeModal() {
        this.$emit("update:isVisible", false);
        this.announce("Modal fechado.");
      },
    },
    setup() {
      const { announce } = useAnnouncer();
      return { announce };
    },
    components: {
      FocusLock,
    },
  };
  </script>
  
  <style scoped>
  /* Estilo para o fundo do modal */
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  /* Estilo para o modal */
  .modal {
    background: white;
    border-radius: 10px;
    padding: 20px;
    width: 400px;
    max-width: 90%;
    position: relative;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  }
  
  /* Botão de fechar */
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  
  .close-btn:hover {
    color: #7638c7;
  }
  </style>
  