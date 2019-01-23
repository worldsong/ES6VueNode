<template>
  <div id="app">
    <h1>{{name}}</h1>
    <user></user>
    <p>{{message}}</p>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
      return {
          name: 'Song',
          message: 'Hello, Welcome to Vue.js'
      }
  }
}
</script>

<style scoped>
h1 {
  color: crimson;
}
</style>
