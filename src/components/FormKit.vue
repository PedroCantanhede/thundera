<template>
    <div>
      <h2>Formulário de Contato</h2>
      <form @submit.prevent="handleSubmit">
        <!-- Nome -->
        <FormKit
          type="text"
          name="name"
          label="Nome completo"
          placeholder="Digite seu nome"
          validation="required"
        />
  
        <!-- Email -->
        <FormKit
          type="email"
          name="email"
          label="Email"
          placeholder="Digite seu email"
          validation="required|email"
        />
  
        <!-- Mensagem -->
        <FormKit
          type="textarea"
          name="message"
          label="Mensagem"
          placeholder="Digite sua mensagem"
          validation="required"
        />
  
        <!-- Botão de envio -->
        <button type="submit">Enviar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormKitForm',
    methods: {
      handleSubmit() {
        alert('Formulário enviado com sucesso!');
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  button {
    padding: 10px 20px;
    background-color: #7638c7;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #5a2e99;
  }
  </style>
  