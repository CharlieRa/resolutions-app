<template>
   <v-layout row>
    <v-flex xs12 sm12>
      <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
      <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
      <v-card xs6 sm6 md6>
        <v-list two-line subheader>
          <v-list-tile avatar v-for="todo in todos" :key="todo.id">
            <v-list-tile-action>
              <v-checkbox v-model="todo.done"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title> {{todo.title}} </v-list-tile-title>
              <v-list-tile-sub-title> {{todo.detail}} </v-list-tile-sub-title>
            </v-list-tile-content>
             <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="blue lighten-1">edit</v-icon>
              </v-btn>
            </v-list-tile-action>
             <v-list-tile-action>
              <v-btn icon ripple v-on:click="deleteTodo(todo)">
                <v-icon color="red lighten-1">delete</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ResolutionList',
  data() {
    return {
      todos:
      [{
        id: 0,
        title: 'Todo A',
        detail: 'detail A',
        done: false,
      }, {
        id: 1,
        title: 'Todo B',
        detail: 'detail B',
        done: true,
      }],
    };
  },
  methods: {
    deleteTodo: function (todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
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
