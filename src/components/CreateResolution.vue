<template>
   <v-layout row>
    <v-flex xs12 sm12>
        <v-text-field box label="Title" v-model="title"></v-text-field>
        <v-text-field box label="Detail" v-model="detail"></v-text-field>
        <v-btn icon ripple v-on:click="sendForm()">
            <v-icon color="red lighten-1">Add Resolution</v-icon>
        </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ResolutionList',
  data() {
    return {
      titleText: '',
      projectText: '',
      isCreating: false,
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.titleText.length > 0 && this.projectText.length > 0) {
        const title = this.titleText;
        const project = this.projectText;
        this.$emit('create-todo', {
          title,
          project,
          done: false,
        });
        this.newTodoText = '';
      }
      this.isCreating = false;
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
