<template>
  <v-layout column>
    <v-flex>
       <v-btn color="white" v-on:click="showForm()">New Resolution</v-btn>
    </v-flex>
    <v-flex v-show="isCreating">
        <v-text-field box label="Title" v-model="titleText"></v-text-field>
        <v-text-field box label="Detail" v-model="detailText"></v-text-field>
        <v-btn ripple v-on:click="sendForm()">
          Add<v-icon right dark>add</v-icon>
        </v-btn>
        <v-btn ripple v-on:click="closeForm()">
          Close<v-icon right dark>close</v-icon>
        </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'CreateResolution',
  data() {
    return {
      titleText: '',
      detailText: '',
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
      if (this.titleText.length > 0 && this.detailText.length > 0) {
        const title = this.titleText;
        const detail = this.detailText;
        this.$emit('create-resolution', {
          title,
          detail,
          done: false,
        });
      }
      this.isCreating = false;
    },
  },
};
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
