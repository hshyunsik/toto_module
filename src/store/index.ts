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
    dialogStatus: false,
    registrationStep: 1,
    registrant: {
      loginDetails: {
        emailAddress: '',
        password: ''
      },
      personalDetails: {
        gender: '',
        name: '',
        addition: '',
        surname: '',
        birthDate: '',
        phone: '',
        promotionalMail: false
      },
      addressDetails: {
        postalCode: '',
        number: '',
        extra: '',
        street: '',
        place: ''
      },
      bankDetails: ''
    }
  },
  mutations: {
    SET_LOGIN_STATUS(state, payload) {
      state.loginStatus = payload;
    },
    SET_DIALOG_STATUS(state, payload) {
      state.dialogStatus = payload;
    },
    SET_REGISTRATION_STEP(state, payload) {
      state.registrationStep = payload;
    },
    SET_PROMOTIONAL_MAIL(state, payload) {
      state.registrant.personalDetails.promotionalMail = payload;
    },
    SET_EMAILADRESS(state, payload) {
      state.registrant.loginDetails.emailAddress = payload;
    },
    SET_PASSWORD(state, payload) {
      state.registrant.loginDetails.password = payload;
    },
    SET_GENDER(state, payload) {
      state.registrant.personalDetails.gender = payload;
    }
  },
  actions: {
    setLoginStatus({ commit }, payload) {
      commit('SET_LOGIN_STATUS', payload);
    },
    setDialogStatus({ commit }, payload) {
      commit('SET_DIALOG_STATUS', payload);
    },
    setRegistrationStep({ commit }, payload) {
      commit('SET_REGISTRATION_STEP', payload);
    },
    setPromotionalMail({ commit }, payload) {
      commit('SET_PROMOTIONAL_MAIL', payload);
    },
    setEmail({ commit }, payload) {
      commit('SET_EMAILADRESS', payload);
    },
    setPassword({ commit }, payload) {
      commit('SET_PASSWORD', payload);
    },
    setGender({ commit }, payload) {
      commit('SET_GENDER', payload);
    }
  },
  modules: {}
});
