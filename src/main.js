// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueFire from 'vuefire';
import 'vuetify/dist/vuetify.min.css';
import App from './App';
import router from './router';
import store from './store';

Vue.use(Vuetify);
Vue.use(VueFire);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
