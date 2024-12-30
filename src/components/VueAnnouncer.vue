<template>
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      class="sr-only"
    >
      {{ message }}
    </div>
  </template>
  
  <script>
  import { useAnnouncer } from '@vue-a11y/announcer';
  
  export default {
    name: 'VueAnnouncer',
    setup() {
      const { message } = useAnnouncer(); // Captura a mensagem do announcer
      return { message };
    },
  };
  </script>
  
  <style>
  /* Classe para ocultar o texto visualmente, mas deixá-lo acessível aos leitores de tela */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  </style>
  