<template>
  <v-layout column>
    <v-flex>
       <v-btn color="white" v-on:click="showForm()">New Resolution</v-btn>
    </v-flex>
    <v-flex v-show="isCreating">
        <v-text-field box label="Title" v-model="title"></v-text-field>
        <v-text-field box label="Detail" v-model="detail"></v-text-field>
        <v-btn ripple v-on:click="sendForm()">
          Add<v-icon right dark>add</v-icon>
        </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'CreateResolution',
  data() {
    return {
      title: '',
      detail: '',
      isCreating: false,
    };
  },
  methods: {
    showForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.title.length > 0 && this.detail.length > 0) {
        const titleText = this.title;
        const detailText = this.detail;
        this.$emit('create-resolution', {
          titleText,
          detailText,
          done: false,
        });
        // this.newTodoText = '';
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
