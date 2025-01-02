<template>
    <button @click="announceMessage">{{ label }}</button>
  </template>
  
  <script>
  import { useAnnouncer } from '@vue-a11y/announcer';
  
  export default {
    name: 'AnnouncedButton',
    props: {
      label: {
        type: String,
        default: 'Clique aqui',
      },
      message: {
        type: String,
        default: 'Botão clicado',
      },
    },
    setup(props) {
      const { announce } = useAnnouncer();
  
      function announceMessage() {
        announce(props.message);
      }
  
      return { announceMessage };
    },
  };
  </script>
  