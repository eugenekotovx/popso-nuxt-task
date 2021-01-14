export const state = () => ({
  user: {
    password: "",
    login: "",
    lastName: "",
    firstName: ""
  },
  auth: false
});
export const actions = {
  registerUser({ commit }, info) {
    localStorage.setItem('user', JSON.stringify(info))
    localStorage.setItem('wasAuth', 'true')
    commit("REGISTER_USER", info);
  },
  login({commit}, user) {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if ((userInfo.login == user.login ) && (userInfo.password == user.password)) {
      commit("LOGIN", userInfo)
    }
    console.log(userInfo)
  }
};

export const mutations = {
  REGISTER_USER(state, info) {
    state.user.password = info.password;
    state.user.login = info.login;
    state.auth = true;
  },
  UPDATE_USER_INFO(state, user) {
    state.user = user;
    localStorage.setItem('user', JSON.stringify(user))
  },
  LOGIN(state, user) {
    state.user = user
    state.auth = true
  },
  LOGOUT(state) {
    state.user = {}
    state.auth = false
  }
};

export const getters = {
  user: s => s.user
};
