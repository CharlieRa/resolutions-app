<template>
  <v-app id="app">
   <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center column>
          <h1>{{msg}} {{year}}</h1>
          <CreateResolution v-on:add-todo="addTodo" />
          <ResolutionList/>
         </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<!-- 
<template>
  <div id="app">
    <h1>{{msg}} {{year}}</h1>
    <CreateResolution v-on:add-todo="addTodo" />
    <ResolutionList/>
  </div>
</template>
-->

<script>
import ResolutionList from './components/ResolutionList';
import CreateResolution from './components/CreateResolution';

export default {
  name: 'App',
  components: {
    ResolutionList,
    CreateResolution,
  },
  data() {
    return {
      msg: 'My Resolutions for ',
      year: new Date().getFullYear(),
    };
  },
  methods: {
    addTodo(title) {
      this.todos.push({
        title,
        done: false,
      });
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
