import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/components/Login';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
// function loginRequired(to, from, next) {
//   if (authService.authenticated()) {
//     next()
//   } else {
//     next('/login')
//   }
// }
