import Vue from 'vue';
import Buefy from 'buefy';
import feather from 'vue-icon';
import VModal from 'vue-js-modal';
import VueGoogleCharts from 'vue-google-charts';
import VueSimpleAlert from 'vue-simple-alert';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'buefy/dist/buefy.css';
import 'vue-js-modal/dist/styles.css';
import '../axios';

Vue.use(VueSimpleAlert);
Vue.use(Buefy);
Vue.use(VModal);
Vue.use(feather, 'v-icon');
Vue.use(VueGoogleCharts);
Vue.config.productionTip = false;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
