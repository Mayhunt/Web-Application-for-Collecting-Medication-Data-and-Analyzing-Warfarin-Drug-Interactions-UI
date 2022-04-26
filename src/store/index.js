import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: 'may',
    password: '',
    editdrug: '',
    user: '',
    // genericname: '',
    // caution: '',
    // picdrug: '',
    // eslint-disable-next-line object-curly-newline
    searchdrugs: [{ id: '', caution: '', genericName: '', pic: '' }],
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    setPassword(state, password) {
      state.password = password;
    },
    setsearchdrugs(state, searchdrugs) {
      state.searchdrugs = searchdrugs;
    },
    setEditDrug(state, editdrug) {
      state.editdrug = editdrug;
    },
    setUser(state, user) {
      state.user = user;
    },
    // setGenericName(state, genericname) {
    //   state.genericname = genericname;
    // },
    // setCaution(state, caution) {
    //   state.caution = caution;
    // },
    // setpicdrug(state, picdrug) {
    //   state.picdrug = picdrug;
    // },
  },
  actions: {
    user(context, user) {
      context.commit('user', user);
    },
  },
  getters: {
    username: (state) => state.username,
    password: (state) => state.password,
    searchdrugs: (state) => state.searchdrugs,
    editdrug: (state) => state.editdrug,
    user: (state) => state.user,
    // genericname: (state) => state.username,
    // caution: (state) => state.caution,
    // picdrug: (state) => state.picdrug,
  },
  modules: {},
});
