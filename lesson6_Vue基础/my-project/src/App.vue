<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
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
