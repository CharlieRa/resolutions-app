<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title> {{ title }} {{ year }} </v-toolbar-title>
      <v-spacer></v-spacer>
        <p color="orange" v-show="auth"> Welcome Back {{ user.email }} </p>
        <v-btn flat color="orange" v-show="auth" v-on:click="signOut()">Sign Out</v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer :fixed="true" app>
      <span>&copy; <span v-text="year"></span> </span>
    </v-footer>
  </v-app>
</template>

<script>
import Firebase from 'firebase';
import Login from './components/Login';
import Quote from './components/Quote';

export default {
  name: 'App',
  data() {
    return {
      auth: false,
      title: 'My resolutions for ',
      year: new Date().getFullYear(),
      user: {},
    };
  },
  methods: {
    signOut() {
      Firebase.auth().signOut()
        .then(() => {
          this.auth = false;
          this.user = {};
          this.token = '';
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: {
    Quote,
    Login,
  },
};
</script>
