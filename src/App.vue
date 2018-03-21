<template>
  <v-app dark>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-title> {{ title }} {{ year }} </v-toolbar-title>
      <v-spacer></v-spacer>
        <p color="orange" v-show="auth"> Welcome Back {{ user.email }} </p>
        <v-btn flat color="orange" v-show="auth" v-on:click="signOut()">Sign Out</v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; <span v-text="year"></span> </span>
    </v-footer>
  </v-app>
</template>

<script>
import Firebase from 'firebase';
import Login from './components/Login';
import Quote from './components/Quote';
import ResolutionList from './components/ResolutionList';
import CreateResolution from './components/CreateResolution';
import { config } from '../config/firebase-config';

const app = Firebase.initializeApp(config);
const db = app.database();
const resolutionsRef = db.ref('resolutions');

export default {
  name: 'App',
  data() {
    return {
      auth: false,
      title: 'My resolutions for ',
      year: new Date().getFullYear(),
      dialog: false,
      user: {},
      token: '',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire',
      }],
      miniVariant: false,
      right: false,
      rightDrawer: false,
    };
  },
  beforeCreate: () => {
    console.log(this.user);
  },
  methods: {
    addResolution(newResolution) {
      resolutionsRef.push(
        newResolution,
      );
    },
    deleteResolution(resolution) {
      resolutionsRef.child(resolution['.key']).remove();
    },
    loginWithProvider(provider) {
      let prvdr;
      if (provider === 'google') {
        prvdr = new Firebase.auth.GoogleAuthProvider();
        Firebase.auth().languageCode = 'es';
        Firebase.auth().signInWithPopup(prvdr)
          .then(
            (result) => {
              this.token = result.credential.accessToken;
              this.user = result.user;
              if (this.user.email === 'carlos.ramart@gmail.com') {
                this.auth = true;
              }
              console.log(this.user);
              console.log(this.token);
              this.dialog = false;
            })
          .catch(
            (error) => {
              console.log(error);
            });
      }
    },
    signOut() {
      Firebase.auth().signOut()
        .then(() => {
          this.auth = false;
          this.user = {};
          this.token = '';
        })
        .catch((error) => {
          console.log(error);
          // An error happened.
        });
    },
  },
  firebase: {
    resolutions: resolutionsRef,
  },
  components: {
    Quote,
    CreateResolution,
    ResolutionList,
    Login,
  },
};
</script>
