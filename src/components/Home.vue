<template>
    <v-content>
      <Quote/>
      <CreateResolution v-on:create-resolution="addResolution" />
      <ResolutionList v-bind:auth="isAuthenticated" v-bind:userId="userId"/>
    </v-content>
</template>

<script>
import firebase from 'firebase';
import Quote from './Quote';
import ResolutionList from './ResolutionList';
import CreateResolution from './CreateResolution';

export default {
  name: 'Home',
  data() {
    return {
      title: 'My resolutions for ',
      year: new Date().getFullYear(),
    };
  },
  computed: {
    appTitle() {
      return this.$store.getters.appTitle;
    },
    isAuthenticated() {
      console.log(this.$store.getters.getUser);
      return this.$store.getters.getUser !== null && this.$store.getters.getUser !== undefined;
    },
    userId() {
      console.log(this.$store.getters.getUserId);
      return this.$store.getters.getUserId;
    },
  },
  methods: {
    addResolution(newResolution) {
      // resolutionsReference.push(
      //   newResolution,
      // );
      console.log(newResolution);
    },
    signOut() {
      firebase.auth().signOut()
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
    CreateResolution,
    ResolutionList,
  },
};
</script>
