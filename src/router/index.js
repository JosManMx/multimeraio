import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/views/HelloWorld';
import Dashboard from '@/views/Dashboard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
  ],
});
