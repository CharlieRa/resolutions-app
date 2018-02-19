<template>
  <v-container fluid>
    <v-layout row align-center>
      <v-flex xs6 sm6>
        <p>Accomplished Resolutions:
          {{resolutions.filter(resolution => {return resolution.done === true}).length}}</p>
        </v-flex>
        <v-flex xs6 sm6>
          <p>Pending Resolutions:
            {{resolutions.filter(resolution => {return resolution.done === false}).length}}</p>
        </v-flex>
      </v-layout>
      <v-layout column>
        <v-card xs12 sm12 md6 >
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
                <v-btn icon ripple v-show="authenticate">
                  <v-icon color="blue lighten-1">edit</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-btn icon ripple v-show="authenticate" v-on:click="deleteTodo(resolution)">
                  <v-icon color="red lighten-1">delete</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ResolutionList',
  props: ['resolutions'],
  data() {
    return {
      authenticate: false,
    };
  },
  methods: {
    deleteTodo(resolution) {
      this.$emit('remove-resolution', resolution);
    },
  },
};
</script>
<style scoped>
h1 {
  font-weight: normal;
}
</style>
