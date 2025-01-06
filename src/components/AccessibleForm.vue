<template>
  <form @submit.prevent="handleSubmit" class="accessible-form">
    <h2 class="form-title">{{ title }}</h2>

    <!-- Nome -->
    <div class="form-group">
      <label for="name" class="form-label">Nome completo</label>
      <FormKit
        id="name"
        type="text"
        name="name"
        :validation="'required|length:3'"
        validation-label="Campo Nome completo"
        placeholder="Digite seu nome"
        v-model="formData.name"
        class="form-input"
      >
        <template #validation="{ message }">
          <span class="form-error">{{ message }}</span>
        </template>
      </FormKit>
    </div>

    <!-- Email -->
    <div class="form-group">
      <label for="email" class="form-label">Email</label>
      <FormKit
        id="email"
        type="email"
        name="email"
        :validation="'required|email'"
        validation-label="Campo Email"
        placeholder="Digite seu email"
        v-model="formData.email"
        class="form-input"
      >
        <template #validation="{ message }">
          <span class="form-error">{{ message }}</span>
        </template>
      </FormKit>
    </div>

    <!-- Senha -->
    <div class="form-group">
      <label for="password" class="form-label">Senha</label>
      <FormKit
        id="password"
        type="password"
        name="password"
        :validation="'required|min:6'"
        validation-label="Campo Senha"
        placeholder="Digite sua senha"
        v-model="formData.password"
        class="form-input"
      >
        <template #validation="{ message }">
          <span class="form-error">{{ message }}</span>
        </template>
      </FormKit>
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
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      alert(
        `Formulário enviado com sucesso!\n\n${JSON.stringify(
          this.formData,
          null,
          2
        )}`
      );
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
  background-color: #f9f9f9;
  color: #333;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-input:focus {
  border-color: #7638c7;
  box-shadow: 0 0 5px rgba(118, 56, 199, 0.3);
  background-color: #ffffff;
}

.form-input::placeholder {
  color: #aaa;
}

.form-group .form-error {
  display: block !important;
  margin-top: 5px !important;
  font-size: 12px !important;
  color: #d9534f !important;
  list-style-type: none !important;
  padding: 0 !important;
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
