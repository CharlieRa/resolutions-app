<template>
  <div class="hello">
    <h1>{{ msg }} {{year}}</h1>
      <md-checkbox v-model="array" value="1">Array</md-checkbox>
      <md-checkbox v-model="array" value="2">Array</md-checkbox>
      <md-checkbox v-model="boolean">Boolean</md-checkbox>
      <md-checkbox v-model="string" value="my-checkbox">String</md-checkbox>
      <md-checkbox v-model="novalue">No Value</md-checkbox>
      <md-checkbox v-model="disabled" disabled>Disabled</md-checkbox>

      <table>
        <tr>
          <th>Array</th>
          <th>Boolean</th>
          <th>String</th>
          <th>No Value</th>
        </tr>

        <tr>
          <td>{{ array }}</td>
          <td>{{ boolean }}</td>
          <td>{{ string }}</td>
          <td>{{ novalue }}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ResolutionList',
  data() {
    return {
      msg: 'My Resolutions for ',
      year: new Date().getFullYear(),
      array: [],
      boolean: false,
      string: null,
      novalue: null,
      disabled: true,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style lang="scss-loader" scoped> -->
<style scoped>
h1 {
  font-weight: normal;
}
  .md-checkbox {
    display: flex;
  }
</style>
