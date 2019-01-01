import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pluginVm: {
      list: [],
      detail: {},
      detailContent: undefined
    }
  },
  mutations: {
    'PLUGINS_SET_LIST': (state, payload) => {
      state.pluginVm.list = payload;
    },
    'PLUGINS_SET_DETAIL': (state, payload) => {
      state.pluginVm.detail = payload;
    },
    'PLUGINS_SET_DETAIL_CONTENT': (state, payload) => {
      state.pluginVm.detailContent = payload;
    }
  },
  actions: {
    // TODO: Get from local storage or service worker,
    // TODO: Unless "expired" or invalidated
    async getList({ commit }) {
      const listResult = await api.plugins.getList();
      const list = listResult.data;
      commit('PLUGINS_SET_LIST', list);
    },
    getDetail({ commit }, slug) {
      return api.plugins.getBySlug(slug)
        .then((response) => {
          const detail = response.data;
          commit('PLUGINS_SET_DETAIL', detail);
          return detail;
        });
    },
    getDetailContent({ commit }, repositoryFullName) {
      return api.plugins.getDetailContent(repositoryFullName)
        .then((response) => {
          const detailContent = response.data;
          commit('PLUGINS_SET_DETAIL_CONTENT', detailContent);
          return detailContent;
        });
    }
  }
})
