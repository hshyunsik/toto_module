import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Register from '../views/Register/index.vue';
import LoginDetails from '../views/Register/LoginDetails.vue';
import GenderDetails from '../views/Register/GenderDetails.vue';
import PersonalDetails from '../views/Register/PersonalDetails.vue';
import AddressDetails from '../views/Register/AddressDetails.vue';
import PhoneDetails from '../views/Register/PhoneDetails.vue';
import BankDetails from '../views/Register/BankDetails.vue';
import DetailsOverview from '../views/Register/DetailsOverview.vue';
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
      } else if (from.path === '/register/personal') {
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
        component: LoginDetails
      },
      {
        path: 'gender',
        component: GenderDetails
      },
      {
        path: 'personal',
        component: PersonalDetails
      },
      {
        path: 'address',
        component: AddressDetails
      },
      {
        path: 'phone',
        component: PhoneDetails
      },
      {
        path: 'bank',
        component: BankDetails
      },
      {
        path: 'overview',
        component: DetailsOverview
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
