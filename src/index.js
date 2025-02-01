import AccessibleModal from './components/AccessibleModal.vue';
import AccessibleCard from './components/AccessibleCard.vue';
import AccessibleDialog from './components/AccessibleDialog.vue';
import AccessibleList from './components/AccessibleList.vue';
import AccessibleAlert from './components/AccessibleAlert.vue';
import AccessibleTooltip from './components/AccessibleTooltip.vue';
import AccessibleForm from './components/AccessibleForm.vue';
import AnnouncedButton from './components/AnnouncedButton.vue';
import SkipToButton from './components/SkipToButton.vue';

// Lista de componentes para facilitar o registro global
const components = {
  AccessibleModal,
  AccessibleCard,
  AccessibleDialog,
  AccessibleList,
  AccessibleAlert,
  AccessibleTooltip,
  AccessibleForm,
  AnnouncedButton,
  SkipToButton,
};

// Plugin para registrar todos os componentes globalmente
const ThunderaLib = {
  install(app) {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key]);
    });
  },
};

// Exporta o plugin e os componentes individualmente
export default ThunderaLib;
export {
  AccessibleModal,
  AccessibleCard,
  AccessibleDialog,
  AccessibleList,
  AccessibleAlert,
  AccessibleTooltip,
  AccessibleForm,
  AnnouncedButton,
  SkipToButton,
};
