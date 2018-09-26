import Vue from "vue";
import Vuex from 'vuex';
import App from "./App.vue";

Vue.use(Vuex);

import store from './store/store';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
