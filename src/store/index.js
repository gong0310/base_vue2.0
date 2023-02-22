import Vue from "vue";
import Vuex from "vuex";
import moduleA from './module/moduleA'
import moduleB from './module/moduleB'

Vue.use(Vuex);
const MockAxios = (data) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, 1000);
  });
};
export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    multiplyCount(state) {
      return state.count * 100;
    },
  },
  mutations: {
    async undaptCountAdd(state, payload) {
      console.log("Vuex undaptCount", state, payload);
      state.count += payload;
    },
    undaptCountMin(state, payload) {
      console.log("Vuex undaptCountMin", state, payload);
      state.count -= payload;
    },
  },
  actions: {
    async undaptCountMinAction({ commit, state }, payload) {
      const count = await MockAxios(payload);
      commit("undaptCountMin", count);
    },
  },
  modules: {
    namespaced: true, // 为了解决不同模块命名冲突的问题
    moduleA,
    moduleB,
  },
});
