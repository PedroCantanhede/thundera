import { createApp, h, Fragment } from 'vue';
import App from './App.vue';
import './assets/styles/utils.css';

import { plugin, defaultConfig } from '@formkit/vue';
import { VueFinalModal } from 'vue-final-modal';
import VueAnnouncer from '@vue-a11y/announcer';
import SkipTo from '@vue-a11y/skip-to';
import FocusLock from 'vue-focus-lock';

let app = null;

// Configurações específicas para desenvolvimento
if (process.env.NODE_ENV === 'development') {
  const VueAxe = require('vue-axe');
  app = createApp({
    render: () => h(Fragment, [h(App), h(VueAxe.VueAxePopup)]),
  });

  // Configura o VueAxe
  app.use(VueAxe.default);

  // Configura o FormKit
  app.use(plugin, defaultConfig);

  // Configura o Vue Final Modal
  app.component('VueFinalModal', VueFinalModal);

  // Configura o VueAnnouncer
  app.use(VueAnnouncer);
} else {
  // Configurações em Ambiente de Produção
  app = createApp(App);
  app.use(VueAnnouncer);
  app.use(plugin, defaultConfig);
  app.component('VueFinalModal', VueFinalModal);
}

// Registra o SkipTo e o FocusLock como componentes globais
app.component('SkipTo', SkipTo);
app.component('FocusLock', FocusLock);

app.mount('#app');
