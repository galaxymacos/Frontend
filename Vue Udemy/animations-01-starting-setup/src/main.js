import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import allUsers from '@/pages/AllUsers';
import courseGoals from '@/pages/CourseGoals';

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: allUsers},
    {path: '/goals', component: courseGoals}
  ]
})

app.component('base-modal', BaseModal);

app.use(router)
router.isReady().then(function() {
  app.mount('#app');
})

