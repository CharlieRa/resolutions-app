<template>
   <v-layout row>
    <v-flex xs12 sm12>
      <p>Completed Tasks:
        {{resolutions.filter(resolution => {return resolution.done === true}).length}}</p>
      <p>Pending Tasks:
        {{resolutions.filter(resolution => {return resolution.done === false}).length}}</p>
      <v-card xs6 sm6 md6>
        <v-list two-line subheader>
          <v-list-tile avatar v-for="resolution in resolutions" :key="resolution.id">
            <v-list-tile-action>
              <v-checkbox v-model="resolution.done"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title> {{resolution.title}} </v-list-tile-title>
              <v-list-tile-sub-title> {{resolution.detail}} </v-list-tile-sub-title>
            </v-list-tile-content>
             <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="blue lighten-1">edit</v-icon>
              </v-btn>
            </v-list-tile-action>
             <v-list-tile-action>
              <v-btn icon ripple v-on:click="deleteTodo(resolution)">
                <v-icon color="red lighten-1">delete</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ResolutionList',
  props: ['resolutions'],
  data() {
    return {
    };
  },
  methods: {
    deleteTodo(resolution) {
      const resolutionIndex = this.resolutions.indexOf(resolution);
      this.resolutions.splice(resolutionIndex, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style lang="scss-loader" scoped> -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
