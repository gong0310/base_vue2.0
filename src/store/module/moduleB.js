const state = {
  userB: '龚B', // 需要管理的状态数据
};

const mutations = {
  setUserB(state, val) {
    state.userB = val;
  },
};
const getters = {};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
