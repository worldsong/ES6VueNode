<template>
  <div>
    <h1>Home</h1>
    <button class="btn btn-success" @click="goToMenu">Let's Go!</button>
  </div>
</template>
<script>
  export default {
    methods: {
      goToMenu(){
        // 跳转到上一次浏览的页面
//        this.$router.go(-1);

        // 指定跳转的地址
//        this.$router.replace('/menu')

        // 通过路由的name属性来跳转
//        this.$router.replace({name: 'menuLink'})

        // 通过push进行跳转
//        this.$router.push('/menu')
        this.$router.push({name: 'menuLink'})
      }
    }
  }
</script>
