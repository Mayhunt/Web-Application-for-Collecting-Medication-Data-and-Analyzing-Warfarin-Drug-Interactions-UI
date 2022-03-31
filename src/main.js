import Vue from 'vue';
import Buefy from 'buefy';
import feather from 'vue-icon';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'buefy/dist/buefy.css';

Vue.use(Buefy);
Vue.use(feather, 'v-icon');
Vue.config.productionTip = false;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
