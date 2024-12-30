# Documentação da Biblioteca Thundera

Bem-vindo à documentação oficial da **Thundera**! Esta biblioteca foi criada para ajudar desenvolvedores a construírem aplicações web acessíveis para pessoas cegas ou com deficiência visual, integrando diversas ferramentas úteis para garantir acessibilidade e experiência do usuário de alta qualidade.

---

## **Índice**
1. [Introdução](#introdução)
2. [Documentação das Libraries](#documentação-das-libraries)
   - [Vue Announcer](#vue-announcer)
   - [AccessibleTabs](#accessibletabs)
   - [Vue Final Modal](#vue-final-modal)
   - [Focus Lock](#focus-lock)
   - [Form Kit](#form-kit)
   - [Skip To](#skip-to)
   - [Sr Only](#sr-only)
3. [Ferramenta de Auditoria de Acessibilidade](#ferramenta-de-auditoria-de-acessibilidade)
   - [Vue Axe](#vue-axe)
4. [Contribuição e Suporte](#contribuição-e-suporte)

---

## **Introdução**
A biblioteca **Thundera** reúne as melhores práticas e ferramentas da comunidade Vue para facilitar o desenvolvimento de aplicações acessíveis. Todas as ferramentas necessárias estão integradas diretamente na sua instalação.

---

## **Documentação das Libraries**

### **Vue Announcer**
**Link da Documentação**: [Vue Announcer](https://github.com/vue-a11y/vue-announcer)

**O que faz?**
O Vue Announcer é uma ferramenta para gerenciar mensagens dinâmicas e enviá-las para leitores de tela, garantindo que o usuário receba informações importantes durante a navegação.

**Como usar?**
Use o `useAnnouncer` para enviar mensagens dinâmicas:
```javascript
import { useAnnouncer } from '@vue-a11y/announcer';

const { announce } = useAnnouncer();
announce('Mensagem anunciada para o leitor de tela');
```

---

### **AccessibleTabs**
**Link da Documentação**: [AccessibleTabs](https://www.npmjs.com/package/vue3-accessible-tabs)

**O que faz?**
O AccessibleTabs cria abas acessíveis seguindo as melhores práticas do WAI-ARIA.

**Como usar?**
Defina abas acessíveis diretamente nos componentes:
```vue
<template>
  <Tabs>
    <TabList>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Conteúdo da Tab 1</TabPanel>
      <TabPanel>Conteúdo da Tab 2</TabPanel>
    </TabPanels>
  </Tabs>
</template>

<script>
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'vue3-accessible-tabs';

export default {
  components: {
    Tabs, TabList, Tab, TabPanels, TabPanel,
  },
};
</script>
```

---

### **Vue Final Modal**
**Link da Documentação**: [Vue Final Modal](https://vue-final-modal.org/)

**O que faz?**
Cria modais acessíveis e configuráveis para aplicações Vue.

**Como usar?**
Implemente modais com suporte a leitores de tela e foco confinado:
```vue
<template>
  <VueFinalModal v-model="showModal">
    <h2>Modal Acessível</h2>
    <p>Conteúdo do modal.</p>
  </VueFinalModal>
</template>

<script>
export default {
  data() {
    return { showModal: false };
  },
};
</script>
```

---

### **Focus Lock**
**Link da Documentação**: [Focus Lock](https://github.com/theKashey/vue-focus-lock)

**O que faz?**
Mantém o foco do teclado confinado dentro de um elemento, como um modal, até que seja fechado.

**Como usar?**
Concentre o foco dentro de elementos específicos:
```vue
<FocusLock>
  <div>
    <h2>Modal com Foco</h2>
    <button>Botão 1</button>
    <button>Botão 2</button>
  </div>
</FocusLock>
```

---

### **Form Kit**
**Link da Documentação**: [Form Kit](https://formkit.com/docs)

**O que faz?**
Facilita a criação de formulários acessíveis e dinâmicos.

**Como usar?**
Adicione campos de formulário com configuração simples:
```vue
<FormKit type="text" label="Seu nome" />
```

---

### **Skip To**
**Link da Documentação**: [Skip To](https://github.com/vue-a11y/skip-to)

**O que faz?**
Permite criar links para saltar diretamente para o conteúdo principal ou outras seções importantes.

**Como usar?**
Adicione o componente no topo do layout principal:
```vue
<SkipTo />
```

---

### **Sr Only**
**Link da Documentação**: [Sr Only](https://github.com/vue-a11y/vue-sr-only)

**O que faz?**
Permite criar elementos visíveis apenas para leitores de tela.

**Como usar?**
Envolva elementos com o componente para torná-los visíveis apenas para tecnologias assistivas:
```vue
<SrOnly>Texto apenas para leitores de tela</SrOnly>
```

---

## **Ferramenta de Auditoria de Acessibilidade**

### **Vue Axe**
**Link da Documentação**: [Vue Axe](https://github.com/vue-a11y/vue-axe)

**O que faz?**
Ajuda a identificar e corrigir problemas de acessibilidade durante o desenvolvimento.

**Como usar?**
A auditoria de acessibilidade é realizada automaticamente em desenvolvimento. Os relatórios aparecem no console ou em um popup visual.

---

## **Contribuição e Suporte**
Contribuições para a biblioteca **Thundera** são muito bem-vindas! Siga as diretrizes do repositório para enviar pull requests ou relatar problemas.

Para suporte, entre em contato através do repositório oficial no GitHub.

