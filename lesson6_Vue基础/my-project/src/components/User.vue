<template>
  <ul>
    <li v-for="user in users">{{ user }}</li>
  </ul>
</template>

<script>
export default {
  data(){
      return {
          users: ['Song', 'Frank', 'Vico']
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
