// src/store/index.js
import { createStore } from 'vuex';
import {axios} from 'axios'

const store = createStore({
  state: {
    isAuthenticated: false,
    token: null,
    memberId: null,
    userName: null, //사용자 이름
    password: null, // 비밀번호
    nickname: null, // 사용자 별칭
    departmentName: null, //학과 이름
    compeleteTerm: null, // 사용자 학기
  },
  mutations: {
    setAuthentication(state, payload) {
      state.isAuthenticated = payload.isAuthenticated;
      state.token = payload.token;
    },
    setuserName(state, userName) {
      state.userName = userName;
    },
    setmemberId(state, memberId) { //memberid를 설정해주는 
      state.memberId = memberId
    },
    setpassword(state, password) {
      state.password = password;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.memberId = null;
      state.password = null;
    }
  },
  actions: {
    login({ commit }, { token, memberId, password }) {
      commit('setAuthentication', { isAuthenticated: true, token });
      commit('setmemberId', memberId);
      commit('setpassword', password);
      localStorage.setItem("authorization", token);
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("isAuthenticated", true);
    },
    logout({ commit }) {
      commit('logout');
      localStorage.removeItem("memberId")
      localStorage.removeItem("authorization");
      localStorage.removeItem("isAuthenticated");
    },
    refreshToken({ commit }) { //토큰 재발급
      return new Promise((resolve, reject) => {
        try {
          axios.post('/reissue').then((rs)=>{
            if (rs) {
              commit('needLogin', false);
              resolve(true);
            } else {
              console.error(rs.data.msg);
              commit('needLogin', true);
              resolve(false);
            }
          })
        
        } catch (err) {
          console.error(err);
          reject(err);
        }
      })
    }
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    token: state => state.token,
    userName: state => state.userName,
    memberId: state => state.memberId,
    password: state => state.password
  }
});

export default store;
