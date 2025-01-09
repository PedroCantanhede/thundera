<template>
  <button
    @click="scrollToTarget"
    class="skip-to-button"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "SkipToButton",
  props: {
    target: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "Pular para o conteúdo principal",
    },
  },
  methods: {
    scrollToTarget() {
      const element = document.querySelector(this.target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        element.focus(); // Focar no elemento para leitores de tela
      } else {
        console.warn(`Elemento com o seletor "${this.target}" não encontrado.`);
      }
    },
  },
};
</script>

<style scoped>
.skip-to-button {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  background-color: #5a2e99;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

.skip-to-button:focus {
  transform: translateY(0);
  outline: none;
}
</style>
