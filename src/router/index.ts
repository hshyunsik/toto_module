import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Register from '../views/Register/index.vue';
import Email from '../views/Register/Email.vue';
import Phone from '../views/Register/Phone.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/games',
    name: 'Games',
    component: About
  },
  {
    path: '/help',
    name: 'Help'
  },
  {
    path: '/register',
    name: 'Register',
    beforeEnter: (to, from, next) => {
      if (!store.state.dialogStatus) {
        next('/');
      } else if (from.path === '/register/phone') {
        next('/games');
      }
      next();
    },
    components: {
      modal: Register
    },
    children: [
      {
        path: '',
        component: Email
      },
      {
        path: 'phone',
        component: Phone
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
