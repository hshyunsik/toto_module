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
    ],
    loginStatus: false,
    dialogStatus: false
  },
  mutations: {
    SET_LOGIN_STATUS(state, payload) {
      state.loginStatus = payload;
    },
    SET_DIALOG_STATUS(state, payload) {
      state.dialogStatus = payload;
    }
  },
  actions: {
    setLoginStatus({ commit }, payload) {
      commit('SET_LOGIN_STATUS', payload);
    },
    setDialogStatus({ commit }, payload) {
      commit('SET_DIALOG_STATUS', payload);
    }
  },
  modules: {}
});
