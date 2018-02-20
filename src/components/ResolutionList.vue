<template>
  <v-container fluid grid-list-lg>
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
         <v-layout row wrap>
          <v-flex xs12 v-for="resolution in resolutions" :key="resolution.id">
            <!-- <v-card color="blue-grey darken-2" class="white--text"> -->
            <v-card class="white--text">
              <v-card-title primary-title>
                <div class="headline"> {{ resolution.title }} </div>
                <div> {{ resolution.detail }} </div>
              </v-card-title>
              <v-card-actions>
                <!-- <v-btn flat dark>Complete</v-btn> -->
              </v-card-actions>
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
