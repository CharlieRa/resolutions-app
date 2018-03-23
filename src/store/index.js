import Vue from 'vue';
import Vuex from 'vuex';

import firebase from 'firebase';
import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: 'Resolutions App',
    user: null,
    accessToken: null,
    error: null,
    loading: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    userSignUp({ commit }, payload) {
      commit('setLoading', true);
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((firebaseUser) => {
          commit('setUser', { email: firebaseUser.email });
          commit('setLoading', false);
          router.push('/home');
        })
        .catch((error) => {
          commit('setError', error.message);
          commit('setLoading', false);
        });
    },
    userLoginGoogle({ commit }) {
      const prvdr = new firebase.auth.GoogleAuthProvider();
      firebase.auth().languageCode = 'es';
      firebase.auth().signInWithPopup(prvdr).then((result) => {
        console.log(result);
        // this.token = result.credential.accessToken;
        // this.user = result.user;
        // commit('setUser', { email: firebaseUser.email })
        // commit('setLoading', false)
        // router.push('/home')
      }).catch((error) => {
        console.log(error);
        commit('setError', error.message);
        commit('setLoading', false);
      });
    },
  },
});
