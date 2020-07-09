import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Games from '../views/Games.vue';
import Registration from '../views/Registration/index.vue';
import LoginDetails from '../views/Registration/LoginDetails.vue';
import GenderDetails from '../views/Registration/GenderDetails.vue';
import PersonalDetails from '../views/Registration/PersonalDetails.vue';
import AddressDetails from '../views/Registration/AddressDetails.vue';
import PhoneDetails from '../views/Registration/PhoneDetails.vue';
import BankDetails from '../views/Registration/BankDetails.vue';
import DetailsOverview from '../views/Registration/DetailsOverview.vue';
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
    component: Games
  },
  {
    path: '/help',
    name: 'Help'
  },
  {
    path: '/registration',
    name: 'Registration',
    beforeEnter: (to, from, next) => {
      if (!store.state.dialogStatus) {
        next('/');
      }
      next();
    },
    components: {
      modal: Registration
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
