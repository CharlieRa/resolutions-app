<template>
  <div id="app">
    <h1>{{msg}} {{year}}</h1>
    <ResolutionList/>
  </div>
</template>

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
