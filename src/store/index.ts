import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuItems: [
      {
        path: '/',
        name: 'Home',
        icon: 'home'
      },
      {
        path: '/games',
        name: 'Games',
        icon: 'home'
      },
      {
        path: '/help',
        name: 'help',
        icon: 'home'
      }
    ],
    gameTypes: [
      'Recommended',
      'New Games',
      'Live Casino',
      'Slots',
      'Jackpots',
      'Table Games',
      'All Games'
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
