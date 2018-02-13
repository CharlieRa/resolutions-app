<template>
  <v-app dark>
    <!-- <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
      <v-toolbar-title> {{ title }} {{ year }} </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <HelloWorld/>
      <CreateResolution v-on:create-resolution="addResolution" />
      <ResolutionList
        v-on:remove-resolution="deleteResolution"
        v-bind:resolutions="resolutions"/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; <span v-text="year"></span> </span>
    </v-footer>
  </v-app>
</template>

<script>
import Firebase from 'firebase';
import Quote from './components/Quote';
import ResolutionList from './components/ResolutionList';
import CreateResolution from './components/CreateResolution';
import { config } from '../config/firebase-config';

const app = Firebase.initializeApp(config);
const db = app.database();
const resolutionsRef = db.ref('resolutions');

export default {
  data() {
    return {
      title: 'My resolutions for ',
      year: new Date().getFullYear(),
      clipped: false,
      drawer: false,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire',
      }],
      miniVariant: false,
      right: false,
      rightDrawer: false,
    };
  },
  name: 'App',
  methods: {
    addResolution(newResolution) {
      resolutionsRef.push(
        newResolution,
      );
    },
    deleteResolution(resolution) {
      resolutionsRef.child(resolution['.key']).remove();
    },
  },
  firebase: {
    resolutions: resolutionsRef,
  },
  components: {
    Quote,
    CreateResolution,
    ResolutionList,
  },
};
</script>
