<template>
  <button
    @click="handleClick"
    :class="['announced-button', customClass]"
    :aria-label="ariaLabel"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
import { useAnnouncer } from "@vue-a11y/announcer";

export default {
  name: "AnnouncedButton",
  props: {
    label: {
      type: String,
      default: "Clique aqui",
    },
    ariaLabel: {
      type: String,
      default: "Clique no botão",
    },
    announcement: {
      type: String,
      default: "Ação realizada com sucesso!",
    },
    customClass: {
      type: String,
      default: "",
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const { announce } = useAnnouncer();

    const handleClick = () => {
      announce(props.announcement); // Emite o anúncio para leitores de tela
      emit("click"); // Emite o evento de clique para o componente pai
    };

    return {
      handleClick,
    };
  },
};
</script>

<style scoped>
.announced-button {
  background-color: #5a2e99;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.announced-button:hover {
  background-color: #7638c7;
  box-shadow: 0 4px 8px rgba(118, 56, 199, 0.3);
}

.announced-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(90, 46, 153, 0.5);
}
</style>
