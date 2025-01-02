<template>
    <SkipTo :skip-to-id="skipToId">{{ label }}</SkipTo>
  </template>
  
  <script>
  import SkipTo from '@vue-a11y/skip-to';
  
  export default {
    name: 'SkipToButton',
    props: {
      skipToId: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        default: 'Pular para o conteúdo',
      },
    },
    components: { SkipTo },
  };
  </script>
  