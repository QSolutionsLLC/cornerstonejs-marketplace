import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pluginVm: {
      list: [],
      detail: {}
    }
  },
  mutations: {
    'PLUGINS_SET_LIST': (state, payload) => {
      state.pluginVm.list = payload;
    },
    'PLUGINS_SET_DETAIL': (state, payload) => {
      state.pluginVm.detail = payload;
    }
  },
  actions: {
    // TODO: Get from local storage or service worker,
    // TODO: Unless "expired" or invalidated
    async getList({ commit }){
      const listResult = await api.plugins.getList();
      const list = listResult.data;
      commit('PLUGINS_SET_LIST', list);
    },
    async getDetail({ commit }, slug){
      const detailResult = await api.plugins.getBySlug(slug);
      const detail = detailResult.data;
      commit('PLUGINS_SET_DETAIL', detail);
    }
  }
})
