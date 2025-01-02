<template>
  <FocusLock :disabled="!focusLock">
    <div
      class="accessible-card"
      tabindex="0"
      @click="handleInteraction"
      @keyup.enter="handleInteraction"
      @focus="handleFocus"
    >
      <div class="card-image">
        <slot name="image">
          <img
            src="https://via.placeholder.com/300"
            alt="Imagem padrão do cartão"
          />
        </slot>
      </div>
      <div class="card-content">
        <h3 class="card-title">
          <slot name="title">Título do Cartão</slot>
        </h3>
        <p class="card-description">
          <slot name="description"
            >Descrição padrão do conteúdo do cartão.</slot
          >
        </p>
        <div class="card-actions">
          <slot name="actions">
            <button class="card-button">Saiba Mais</button>
          </slot>
        </div>
      </div>
    </div>
  </FocusLock>
</template>

<script>
import { useAnnouncer } from "@vue-a11y/announcer";
/* eslint-disable no-unused-vars */
import FocusLock from "vue-focus-lock";
/* eslint-enable no-unused-vars */

export default {
  name: "AccessibleCard",
  components: {
    FocusLock, // Registro explícito
  },
  props: {
    focusLock: {
      type: Boolean,
      default: false,
    },
    announceMessage: {
      type: String,
      default: "Você interagiu com o cartão.",
    },
  },
  methods: {
    handleInteraction() {
      this.announce(this.announceMessage);
      this.$emit("card-interacted");
    },
    handleFocus() {
      this.announce("Você focou no cartão.");
    },
  },
  setup() {
    const { announce } = useAnnouncer();
    return { announce };
  },
};
</script>

<style scoped>
.accessible-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  outline: none;
  width: 100%;
  max-width: 300px;
  margin: 16px;
}

.accessible-card:focus {
  border-color: #7638c7;
  box-shadow: 0 4px 8px rgba(118, 56, 199, 0.2);
  transform: scale(1.02);
}

.card-image img {
  width: 100%;
  border-radius: 8px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
}

.card-description {
  font-size: 14px;
  color: #555;
  margin-bottom: 16px;
}

.card-actions .card-button {
  background-color: #7638c7;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.card-actions .card-button:hover {
  background-color: #5a2e99;
}

/* Para alinhar múltiplos cartões lado a lado */
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
</style>
