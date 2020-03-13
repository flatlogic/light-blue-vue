import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import AnalyticsPage from '@/pages/Dashboard/Dashboard';
import AnotherPage from '@/pages/Another/Another';
import Login from '@/pages/Login/Login';
import Register from '@/pages/Register/Register';
import ErrorPage from '@/pages/Error/Error';

import { isAuthenticated } from './mixins/auth';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', redirect: '/app/dashboard'},
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      beforeEnter: (to, from, next) => {
        let token = localStorage.getItem('token');
        isAuthenticated(token) ? next() : next({path: '/login'});
      },
      children: [
        {
          path: 'dashboard',
          name: 'AnalyticsPage',
          component: AnalyticsPage,
        },
        {
          path: 'another',
          name: 'AnotherPage',
          component: AnotherPage,
        },
      ],
    },
    {
      path: '*',
      name: 'Error',
      component: ErrorPage,
    }
  ],
});
