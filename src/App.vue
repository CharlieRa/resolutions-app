<template>
  <v-app dark>
    <!-- <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
      <v-toolbar-title> {{ title }} {{ year }} </v-toolbar-title>
      <v-spacer></v-spacer>
        <p color="orange"> Welcome Back {{ user.email }} </p>
        <v-btn flat color="orange" v-show="!auth" @click.stop="dialog = true">Login</v-btn>
        <v-btn flat color="orange" v-show="auth" v-on:click="signOut()">Sign Out</v-btn>
    </v-toolbar>
    <v-content>

      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            Edit Resolution
          </v-card-title>
          <v-card-text>
            <v-btn color="primary" dark  v-on:click="loginWithProvider('google')">Login With Google</v-btn>
            <v-btn color="white" flat @click.stop="dialog=false">Close</v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>

      <Quote/>
      <CreateResolution v-on:create-resolution="addResolution" />
      <ResolutionList
        v-on:remove-resolution="deleteResolution"
        v-bind:resolutions="resolutions" v-bind:auth="auth"/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; <span v-text="year"></span> </span>
    </v-footer>
  </v-app>
</template>

<script>
import Firebase from 'firebase';
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
  },
};
</script>
