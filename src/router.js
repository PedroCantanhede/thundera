import { createRouter, createWebHistory } from 'vue-router';
import DocumentationPage from '@/components/DocumentationPage.vue';
import ExamplesPage from '@/components/ExamplesPage.vue';

const routes = [
  {
    path: '/',
    name: 'Documentation',
    component: DocumentationPage,
  },
  {
    path: '/examples',
    name: 'Examples',
    component: ExamplesPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
