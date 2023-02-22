const moduleA = {
  namespace: true,
  state: {
    user: "龚",
  },
  mutations: {
    setUser(state, val) {
      state.user = val;
    },
  },
  actions: {
    Login({ commit }, userInfo) {
      console.log(userInfo);
    },
  },
};
export default moduleA;

// const state = {
//   user: '龚', // 需要管理的状态数据
// };

// const mutations = {
//   setUser(state, val) {
//     state.user = val;
//   },
// };
// const getters = {};
// const actions = {};

// export default {
//   namespaced: true,
//   state,
//   mutations,
//   getters,
//   actions,
// };
