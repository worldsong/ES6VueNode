<template>
    <div>
        <h1>Hello Users</h1>
        <ul>
            <li v-for="user in users">{{ user }}</li>
        </ul>
        <button v-on:click="deleteUser">删除</button>
    </div>
</template>

<script>
export default {
//    props: ["users"],
    // 更严谨的写法
    props: {
      users: {
          type: Array,
          required: true
      }
    },
    methods: {
        deleteUser: function () {
            this.users.pop();
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1{
        color: aqua;
    }
</style>
