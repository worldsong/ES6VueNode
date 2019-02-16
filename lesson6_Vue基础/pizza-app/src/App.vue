<template>
  <div id="app">
    <div class="container">
      <app-header/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    appHeader: Header
  }
}
</script>

<style>

</style>
