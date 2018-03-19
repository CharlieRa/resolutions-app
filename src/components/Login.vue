<template>
  <v-container fluid>
    <v-layout column align-center>
      <v-flex>
          <v-text-field label='Title' v-model="titleText"></v-text-field>
          <v-text-field label='Detail' v-model="detailText"></v-text-field>
          <v-btn ripple v-on:click="sendForm()">
            Add<v-icon right dark>add</v-icon>
          </v-btn>
          <v-btn ripple v-on:click="closeForm()">
            Close<v-icon right dark>close</v-icon>
          </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      authenticate: false,
      titleText: '',
      detailText: '',
    };
  },
  methods: {
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
