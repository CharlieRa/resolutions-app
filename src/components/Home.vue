<template>
    <v-content>
      <Quote/>
      <CreateResolution v-on:create-resolution="addResolution" />
      <ResolutionList
        v-on:remove-resolution="deleteResolution"
        v-bind:resolutions="resolutions" v-bind:auth="isAuthenticated"/>
    </v-content>
</template>

<script>
import Firebase from 'firebase';
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
  beforeCreate: () => {
    console.log(this.user);
  },
  computed: {
    appTitle() {
      return this.$store.getters.appTitle;
    },
    isAuthenticated() {
      console.log(this.$store.getters.getUser);
      return this.$store.getters.getUser !== null && this.$store.getters.getUser !== undefined;
    },
    resolutions() {
      console.log(this.$store.getters.getResolutions);
      return this.$store.getters.getResolutions;
    },
  },
  methods: {
    addResolution(newResolution) {
      // resolutionsRef.push(
      //   newResolution,
      // );
      console.log(newResolution);
    },
    deleteResolution(resolution) {
      console.log(resolution);
      // resolutionsRef.child(resolution['.key']).remove();
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
  components: {
    Quote,
    CreateResolution,
    ResolutionList,
  },
};
</script>
