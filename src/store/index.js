import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: 'may',
    password: '',
    genericname: '',
    caution: '',
    picdrug: '',
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    setPassword(state, password) {
      state.password = password;
    },
    setGenericName(state, genericname) {
      state.genericname = genericname;
    },
    setCaution(state, caution) {
      state.caution = caution;
    },
    setpicdrug(state, picdrug) {
      state.picdrug = picdrug;
    },
  },
  actions: {},
  getters: {
    username: (state) => state.username,
    password: (state) => state.password,
    genericname: (state) => state.username,
    caution: (state) => state.caution,
    picdrug: (state) => state.picdrug,
  },
  modules: {},
});
