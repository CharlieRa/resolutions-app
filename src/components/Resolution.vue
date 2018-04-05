<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm12 md6 offset-md3>
        <v-card  v-bind:class="{ 'green': resolution.done }" class="white--text">
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
            <v-btn flat color="white" @click="toggleDoneResolution()" v-show="!isEditing">{{ resolution.done ? 'UnComplete' : 'Complete' }}</v-btn>
            <v-btn flat color="white" @click="showForm()" v-show="!isEditing">Edit</v-btn>
            <v-btn flat color="success" @click="saveForm()" v-show="isEditing">Save</v-btn>
            <v-btn flat color="warning" @click="hideForm()" v-show="isEditing">Close</v-btn>
            <v-btn flat color="error" @click="deleteResolution()" v-show="isEditing">Delete</v-btn>
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
    },
    hideForm() {
      this.isEditing = false;
    },
    saveForm() {
      const res = this.resolution;
      this.isEditing = false;
      this.$emit('edit-resolution', {
        res,
        title: res.title,
        detail: res.detail,
      });
    },
    toggleDoneResolution() {
      const res = this.resolution;
      this.$emit('complete-resolution', {
        res,
        done: !res.done,
      });
    },
  },
};
</script>
<style scoped>
h1 {
  font-weight: normal;
}
</style>
