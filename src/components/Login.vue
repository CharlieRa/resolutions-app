<template>
  <v-container fluid>
    <v-layout column align-center>
      <v-flex>
        <h1>Login</h1>
      </v-flex>
      <v-flex>
          <v-text-field label='email' v-model="email"></v-text-field>
          <v-text-field label='password' v-model="password"></v-text-field>
          <v-btn ripple v-on:click="sendForm()">
            Send<v-icon right dark>check</v-icon>
          </v-btn>
          <v-btn ripple v-on:click="loginWithProvider('google')">
            Login with Google
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
      email: '',
      password: '',
    };
  },
  methods: {
    sendForm() {
      console.log(this.email);
      console.log(this.password);
      if (this.email.length > 0 && this.password.length > 0) {
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
    loginWithProvider(provider) {
      console.log(provider);
      console.log(Firebase);
    },
  },
};
</script>

<style scoped>
</style>
