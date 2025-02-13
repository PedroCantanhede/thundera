<template>
  <form @submit.prevent="handleSubmit" class="accessible-form">
    <h2 class="form-title">{{ title }}</h2>

    <!-- Renderizando os campos dinamicamente -->
    <div v-for="(field, index) in fields" :key="index" class="form-group">
      <label :for="field.id" class="form-label">{{ field.label }}</label>
      <FormKit
        :id="field.id"
        :type="field.type"
        :name="field.id"
        :placeholder="field.placeholder"
        v-model="formData[field.id]"
        class="form-input"
      />
    </div>

    <!-- Botão de envio -->
    <button type="submit" class="submit-button">
      {{ buttonText }}
    </button>
  </form>
</template>

<script>
export default {
  name: "AccessibleForm",
  props: {
    title: {
      type: String,
      default: "Formulário Acessível",
    },
    buttonText: {
      type: String,
      default: "Enviar",
    },
    fields: {
      type: Array,
      default: () => [
        { id: "name", type: "text", label: "Nome", placeholder: "Digite seu nome" },
        { id: "email", type: "email", label: "E-mail", placeholder: "Digite seu e-mail" },
        { id: "message", type: "textarea", label: "Mensagem", placeholder: "Digite sua mensagem" },
      ],
    },
  },
  data() {
    return {
      formData: this.fields.reduce((acc, field) => {
        acc[field.id] = "";
        return acc;
      }, {}),
    };
  },
  methods: {
    handleSubmit() {
      alert(`Formulário enviado com sucesso!\n\n${JSON.stringify(this.formData, null, 2)}`);
      this.$emit("submit", this.formData);
    },
  },
};
</script>

<style scoped>
.accessible-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
}

.form-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
  font-weight: bold;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 10px 15px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #374151; /* 🔥 Ajustando fundo do input */
  color: #ffffff;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-input:focus {
  border-color: #7638c7;
  box-shadow: 0 0 5px rgba(99, 102, 241, 0.3);
  background-color: #1f2937;
}

.form-input::placeholder {
  color: #9ca3af;
}

.submit-button {
  width: 100%;
  padding: 12px 15px;
  background-color: #7638c7;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.submit-button:hover {
  background-color: #7638c7;
  box-shadow: 0 4px 8px rgba(118, 56, 199, 0.2);
}
</style>
