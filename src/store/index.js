import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: 'may',
    password: '',
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    setPassword(state, password) {
      state.password = password;
    },
  },
  actions: {},
  getters: {
    username: (state) => state.username,
    password: (state) => state.password,
  },
  modules: {},
});
