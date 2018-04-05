<template>
  <v-container fluid grid-list-lg>
    <v-layout row align-center>
      <v-flex xs6 sm3 offset-sm3>
        <p>Accomplished Resolutions:
          {{resolutions.filter(resolution => {return resolution.done === true}).length}}</p>
        </v-flex>
        <v-flex>
          <p>Pending Resolutions:
            {{resolutions.filter(resolution => {return resolution.done === false}).length}}
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
const resolutionsReference = db.ref('resolutions');

export default {
  name: 'ResolutionList',
  data() {
    return {
      editDialog: false,
      isEditing: false,
    };
  },
  methods: {
    addResolution(newResolution) {
      resolutionsReference.push(
        newResolution,
      );
      console.log(newResolution);
    },
    completeResolution(resolution) {
      resolutionsReference.child(resolution.res['.key']).update({
        done: resolution.done,
      });
    },
    editResolution(resolution) {
      console.log(resolutionsReference.child(resolution.res['.key']).update({
        title: resolution.title,
        detail: resolution.detail,
      }));
    },
    deleteResolution(resolution) {
      console.log(resolution);
      resolutionsReference.child(resolution['.key']).remove();
    },
  },
  components: {
    Resolution,
  },
  firebase: {
    resolutions: resolutionsReference,
  },
};
</script>
<style scoped>
h1 {
  font-weight: normal;
}
</style>
