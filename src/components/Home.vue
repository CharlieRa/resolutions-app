<template>
    <v-content>
      <Quote/>
      <CreateResolution v-on:create-resolution="addResolution" />
      <ResolutionList
        v-on:remove-resolution="deleteResolution"
        v-bind:resolutions="resolutions" v-bind:auth="auth"/>
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
      auth: false,
      title: 'My resolutions for ',
      year: new Date().getFullYear(),
      dialog: false,
      user: {},
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
      // resolutionsRef.push(
      //   newResolution,
      // );
      console.log(newResolution);
    },
    deleteResolution(resolution) {
      console.log(resolution);
      // resolutionsRef.child(resolution['.key']).remove();
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
  components: {
    Quote,
    CreateResolution,
    ResolutionList,
  },
};
</script>
