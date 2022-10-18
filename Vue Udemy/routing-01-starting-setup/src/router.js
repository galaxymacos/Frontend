import { createRouter, createWebHistory } from 'vue-router';

import teamsList from '@/pages/TeamsList';
import usersList from '@/pages/UsersList';
import teamMembers from '@/components/teams/TeamMembers';
import teamFooter from '@/pages/TeamFooter';
import usersFooter from '@/pages/UsersFooter';
import NotFound from '@/pages/NotFound';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    { name: 'teams', path: '/teams',
      meta: { needsAuth: true },
      components: {default: teamsList, footer: teamFooter},
      children: [
        { name: 'team-members',path: ':teamId', component: teamMembers, props: true,query: { order: 'order' }  },
      ],
    },  // our-domain.com/teams
    { path: '/users', components: {default: usersList, footer: usersFooter},
      beforeRouteEnter(to, from, next){
        console.log('users beforehand')
        console.log(to, from)
        next()
      }}, // our-domain.com/users?name=Max
    { path: '/:notFound(.*)', component: NotFound },  // redirect all unknown routes to /teams
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior(_, _2, savedPosition) {
    if(savedPosition) {
      return savedPosition;
    }
    else return { left: 0, top: 0 };
  },
});


router.beforeEach(function(to, from, next) {
  // redirect to team 2
  if(to.meta['needsAuth'] === true) {
    console.log('Needs auth!');
    next();
  }
  console.log(to, from)
  next()
//  if(to.name === 'team-members') {  // if we are already on team-members, we don't want to redirect
//    next()
//  }
//  else{ // we redirect to teams/t2
//    next({name: 'team-members', params: { teamId: 't2' } });
//  }
})

router.afterEach(function(to, from){
  // sending analytics data
  console.log("Global after each")
  console.log(to, from)
})

export default router;  // no need to use data() {} in javascript export
