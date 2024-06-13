import { createStore } from 'vuex';

const store = createStore({
    state: {
        user: null
      },
      mutations: {
        setUser(state, user) {
          state.user = user;
        },
        logout(state) {
          state.user = null;
        }
      },
      actions: {},
      getters: {
        isAuthenticated: state => !!state.user
      }
});




export default store;
