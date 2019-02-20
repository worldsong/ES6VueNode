<template>
  <div>
    Admin
  </div>
</template>
<script>
  export default {
    data(){
      return {
        name: 'Song'
      }
    },
    beforeRouteEnter: (to, from, next) => {
//      alert("hello " + this.name);
//      next();
      next(vm => {
        alert("Hello " + vm.name);
      })
    },
    beforeRouteLeave(to, from, next){
      if(confirm("确定离开吗？") == true){
        next();
      }else {
        next(false);
      }
    }
  }
</script>
