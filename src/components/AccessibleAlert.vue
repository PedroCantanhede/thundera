<template>
  <div
    v-if="visible"
    class="accessible-alert"
    role="alert"
    aria-live="assertive"
  >
    <!-- Ícone Material Icon -->
    <div class="icon-container">
      <slot name="icon">
        <span class="material-icons">check_circle</span>
      </slot>
    </div>

    <!-- Título e descrição -->
    <div class="text-container">
      <h4 class="alert-title">{{ title }}</h4>
      <p class="alert-description">{{ description }}</p>
    </div>

    <!-- Botão de fechar -->
    <button class="close-btn" @click="closeAlert" aria-label="Fechar alerta">
      &times;
    </button>
  </div>
</template>

<script>
import { useAnnouncer } from "@vue-a11y/announcer";

export default {
  name: "AccessibleAlert",
  props: {
    title: {
      type: String,
      default: "Título do Alerta",
    },
    description: {
      type: String,
      default: "Operação realizada com êxito!",
    },
    visible: {
      type: Boolean,
      default: true,
    },
    autoDismiss: {
      type: Boolean,
      default: false,
    },
    dismissTimeout: {
      type: Number,
      default: 5000, // 5 segundos
    },
  },
  emits: ["update:visible"],
  setup() {
    const { announce } = useAnnouncer();

    return {
      announce,
    };
  },
  watch: {
    visible(newValue) {
      if (newValue) {
        this.announceAlert();
        if (this.autoDismiss) {
          this.setDismissTimeout();
        }
      } else {
        this.clearDismissTimeout();
      }
    },
  },
  methods: {
    closeAlert() {
      this.$emit("update:visible", false);
      this.clearDismissTimeout();
    },
    setDismissTimeout() {
      this.clearDismissTimeout();
      if (this.autoDismiss) {
        this.dismissTimer = setTimeout(() => {
          this.closeAlert();
        }, this.dismissTimeout);
      }
    },
    clearDismissTimeout() {
      if (this.dismissTimer) {
        clearTimeout(this.dismissTimer);
        this.dismissTimer = null;
      }
    },
    announceAlert() {
      this.announce(`${this.title}. ${this.description}`);
    },
  },
  mounted() {
    if (this.visible) {
      this.announceAlert();
      if (this.autoDismiss) {
        this.setDismissTimeout();
      }
    }
  },
  beforeUnmount() {
    this.clearDismissTimeout();
  },
};
</script>

<style scoped>
.accessible-alert {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  color: #7638c7;
  border-left: 6px solid #7638c7;
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: flex-start;
  gap: 15px;
  max-width: 800px;
  width: 40%;
  animation: slide-in 0.3s ease-out, fade-out 0.3s ease-in forwards;
  z-index: 1000;
}

/* Animação para aparição */
@keyframes slide-in {
  from {
    transform: translate(-50%, -50px);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0);
    opacity: 1;
  }
}

/* Ícone Material Icon */
.icon-container .icon {
  font-size: 36px;
  color: #5a2e99;
}

/* Título e descrição */
.text-container {
  flex: 1;
}

.alert-title {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: #333;
  text-align: left;
}

.alert-description {
  font-size: 14px;
  margin: 2px 0 0;
  color: #666;
  text-align: left;
}

/* Botão de fechar */
.close-btn {
  background: none;
  border: none;
  color: #7638c7;
  font-size: 26px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.close-btn:hover {
  color: #5a2e99;
}
</style>