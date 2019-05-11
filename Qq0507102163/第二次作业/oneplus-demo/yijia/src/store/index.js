// 必须先引入vue，然后再引入vuex
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import state from './state';

// 因为Vuex也是Vue的一个插件，所以下面还需要一部操作：将其作为Vue的插件
Vue.use(Vuex);

// 创建 store
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
