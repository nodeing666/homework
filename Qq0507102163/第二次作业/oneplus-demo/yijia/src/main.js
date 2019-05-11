import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/css/reset.css';
import './assets/fonts/style.css';
import './assets/css/common.css';
import store from './store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
