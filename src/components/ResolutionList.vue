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
           <!-- <v-flex xs12 sm12 md6 offset-md3 v-for="resolution in resolutions" :key="resolution.id"> -->
             <Resolution v-for="resolution in resolutions" v-bind:resolution="resolution" :key="resolution.id"></Resolution>
        </v-layout>
  </v-container>
</template>

<script>
import Resolution from './Resolution';

export default {
  name: 'ResolutionList',
  props: ['resolutions'],
  data() {
    return {
      editDialog: false,
      isEditing: false,
    };
  },
  methods: {
  },
  components: {
    Resolution,
  },
};
</script>
<style scoped>
h1 {
  font-weight: normal;
}
</style>
