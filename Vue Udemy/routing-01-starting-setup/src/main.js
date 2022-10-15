import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import teamsList from '@/components/teams/TeamsList';
import usersList from '@/components/users/UsersList';
import teamMembers from '@/components/teams/TeamMembers';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    { path: '/teams', component: teamsList },  // our-domain.com/teams
    { path: '/users', component: usersList },
    { path: '/teams/:teamId', component: teamMembers, props: true },  // pass route params as props
    { path: '/:notFound(.*)', redirect: '/teams' },  // redirect all unknown routes to /teams
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
});

const app = createApp(App)

app.use(router)

app.mount('#app')
