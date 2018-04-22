import Vue from 'vue';
import Vuex from 'vuex';

import firebase from 'firebase';
import router from '@/router';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: 'My resolutions for ',
    year: new Date().getFullYear(),
    user: null,
    userId: null,
    credential: null,
    accessToken: null,
    error: null,
    loading: false,
  },
  getters: {
    appTitle(state) {
      return state.appTitle;
    },
    getUser(state) {
      return state.user;
    },
    getCredential(state) {
      return state.credential;
    },
    getResolutionsReference(state) {
      return state.resolutionsReference;
    },
    getError(state) {
      return state.error;
    },
    getLoading(state) {
      return state.loading;
    },
    getUserId(state) {
      return state.userId;
    },
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
    setCredential(state, payload) {
      state.credential = payload;
    },
    setUserId(state, payload) {
      state.userId = payload;
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
      firebase.auth().signInWithPopup(prvdr).then(
        (result) => {
          commit('setUser', result.user);
          commit('setUserId', result.user.uid);
          commit('setCredential', result.credential);
          commit('setLoading', false);
          router.push('/');
        }).catch(
        (error) => {
          commit('setError', error.message);
          commit('setLoading', false);
        });
    },
  },
});
