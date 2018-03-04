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
          <v-flex xs12 sm12 md6 offset-md3 v-for="resolution in resolutions" :key="resolution.id">
            <v-card class="white--text">
              <v-card-title primary-title>
                <div>
                  <h3 class="headline"> {{ resolution.title }} </h3>
                  <p> {{ resolution.detail }} </p>
                   <v-form v-show="auth">
                    <v-text-field
                      label="Title"
                      v-model="resolution.title"
                      :counter="50"
                      required
                    ></v-text-field>
                    <v-text-field
                      label="Detail"
                      v-model="resolution.detail"
                      required
                    ></v-text-field>
                  </v-form>
                </div>
              </v-card-title>
               <v-card-actions>
                <v-btn flat color="white" v-show="auth">Complete</v-btn>
                <v-btn flat color="white" v-show="auth">Edit</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ResolutionList',
  props: ['resolutions', 'auth'],
  data() {
    return {
      editDialog: false,
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
