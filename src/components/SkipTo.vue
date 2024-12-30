<template>
    <div>
      <SkipTo
        :elements="[
          { href: '#main-content', label: 'Pular para o conteúdo principal' },
          { href: '#resources', label: 'Pular para recursos adicionais' },
          { href: '#footer', label: 'Pular para o rodapé' }
        ]"
      />
    </div>
  </template>
  
  <script>
  import SkipTo from '@vue-a11y/skip-to';
  
  export default {
    name: 'SkipTo',
    components: {
      SkipTo,
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  