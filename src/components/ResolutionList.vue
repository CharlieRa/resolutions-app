<template>
  <v-container fluid grid-list-lg>
    <v-layout row align-center>
      <v-flex xs6 sm3 offset-sm3>
        <p>Accomplished Resolutions:
          {{ doneResolutions }}</p>
        </v-flex>
        <v-flex>
          <p>Pending Resolutions:
            {{ pendingResolutions }}
          </p>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <Resolution 
        v-on:edit-resolution="editResolution"
        v-on:complete-resolution="completeResolution"
        v-on:remove-resolution="deleteResolution"
        v-for="resolution in resolutions" 
        v-bind:resolution="resolution" 
        :key="resolution.id"></Resolution>
      </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase';
import Resolution from './Resolution';
import { config } from '../../config/firebase-config';

const app = firebase.initializeApp(config);
const db = app.database();
const resolutionsRef = db.ref('resolutions');

export default {
  name: 'ResolutionList',
  data() {
    return {
      editDialog: false,
      isEditing: false,
      resolutions: null,
      doneResolutions: 0,
      pendingResolutions: 0,
      resolutionsRef: null,
    };
  },
  mounted() {
    resolutionsRef
      .orderByChild('userId')
      .equalTo(this.userId)
      .on('value', (snapshot) => {
        this.resolutions = snapshot.val();
        console.log(snapshot);
        if (this.resolutions) {
          this.doneResolutions = snapshot
            .filter(resolution => resolution.done === true).length;
          this.pendingResolutions = snapshot
            .filter(resolution => resolution.done === false).length;
        }
      });
  },
  props: ['auth', 'userId'],
  methods: {
    addResolution(newResolution) {
      this.resolutions.push(
        newResolution,
      );
      console.log(newResolution);
    },
    completeResolution(resolution) {
      console.log(resolution);
      console.log(this.resolutionsRef);
      resolutionsRef.child(resolution.res['.key']).update({
        done: resolution.done,
      });
    },
    editResolution(resolution) {
      console.log(this.resolutions.child(resolution.res['.key']).update({
        title: resolution.title,
        detail: resolution.detail,
      }));
    },
    deleteResolution(resolution) {
      console.log(resolution);
      this.resolutions.child(resolution['.key']).remove();
    },
  },
  components: {
    Resolution,
  },
  // firebase: {
  //   resolutions: db.ref('resolutions').
  // orderByChild('userId').equalTo('4wtjre4Y2ccEndKaKRm3ULNAEWD3'),
  // },
};
</script>
<style scoped>
h1 {
  font-weight: normal;
}
</style>
