<template>
    <div v-if="internalVisible" class="dialog-backdrop">
      <FocusLock>
        <div
          class="accessible-dialog"
          role="dialog"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <!-- Cabeçalho do diálogo -->
          <header class="dialog-header">
            <h2 id="dialog-title">{{ title }}</h2>
          </header>
  
          <!-- Conteúdo principal -->
          <main id="dialog-description">
            <slot />
          </main>
  
          <!-- Rodapé -->
          <footer class="dialog-footer">
            <slot name="footer">
              <button class="close-btn" @click="closeDialog">Fechar</button>
            </slot>
          </footer>
        </div>
      </FocusLock>
    </div>
  </template>
  
  <script>
  import { useAnnouncer } from "@vue-a11y/announcer";
  import FocusLock from "vue-focus-lock";
  
  export default {
    name: "AccessibleDialog",
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
      title: {
        type: String,
        default: "Título do Diálogo",
      },
      openMessage: {
        type: String,
        default: "Diálogo aberto.",
      },
      closeMessage: {
        type: String,
        default: "Diálogo fechado.",
      },
    },
    emits: ["update:isVisible"],
    data() {
      return {
        internalVisible: this.isVisible,
      };
    },
    watch: {
      isVisible(newVal) {
        this.internalVisible = newVal;
      },
      internalVisible(newVal) {
        if (newVal) {
          this.announce(this.openMessage);
        }
        this.$emit("update:isVisible", newVal);
      },
    },
    methods: {
      closeDialog() {
        this.internalVisible = false;
        this.announce(this.closeMessage);
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
  /* Fundo escuro para destacar o diálogo */
  .dialog-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  /* Caixa do diálogo */
  .accessible-dialog {
    background: white;
    border-radius: 8px;
    padding: 20px;
    width: 400px;
    max-width: 90%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    position: relative;
  }
  
  /* Cabeçalho */
  .dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  
  .close-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  
  .close-btn:hover {
    color: #7638c7;
  }
  
  /* Rodapé */
  .dialog-footer {
    margin-top: 16px;
    text-align: center;
  }
  
  .dialog-footer .close-btn {
    background-color: #7638c7;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .dialog-footer .close-btn:hover {
    background-color: #5a2e99;
  }
  </style>
  