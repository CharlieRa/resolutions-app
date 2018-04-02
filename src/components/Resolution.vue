<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm12 md6 offset-md3>
        <v-card class="white--text">
          <v-card-title primary-title>
            <div>
              <h3 class="headline" v-show="!isEditing"> {{ resolution.title }} </h3>
              <p v-show="!isEditing"> {{ resolution.detail }} </p>
                <v-form v-show="isEditing">
                <v-text-field
                  label="Title"
                  v-model="resolution.title"
                  :counter="50"
                  required
                ></v-text-field>
                <v-text-field
                  label="Detail"
                  v-model="resolution.detail"
                  :counter="100"
                  required
                ></v-text-field>
              </v-form>
            </div>
          </v-card-title>
            <v-card-actions>
            <v-btn flat color="white" @click="completeResolution()" v-show="!isEditing">Complete</v-btn>
            <v-btn flat color="white" @click="showForm()" v-show="!isEditing">Edit</v-btn>
            <v-btn flat color="success" @click="saveForm()" v-show="isEditing">Save</v-btn>
            <v-btn flat color="error" @click="hideForm()" v-show="isEditing">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Resolution',
  props: ['resolution'],
  data() {
    return {
      editDialog: false,
      isEditing: false,
    };
  },
  methods: {
    deleteResolution(resolution) {
      this.$emit('remove-resolution', resolution);
    },
    showForm() {
      this.isEditing = true;
      console.log(this.resolution);
      // this.$emit('remove-resolution', resolution);
    },
    hideForm() {
      this.isEditing = false;
    },
    saveForm() {
      console.log('save');
      this.isEditing = false;
      // this.$emit('remove-resolution', resolution);
    },
    completeResolution() {
      console.log('complete');
      // this.$emit('remove-resolution', resolution);
    },
  },
};
</script>
<style scoped>
h1 {
  font-weight: normal;
}
</style>
