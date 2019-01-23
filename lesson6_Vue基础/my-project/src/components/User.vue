<template>
    <div>
        <h1>Hello Users</h1>
        <ul>
            <li v-for="user in users">{{ user }}</li>
        </ul>
    </div>
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
