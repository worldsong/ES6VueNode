<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!--New pizza-->
      <app-new-pizza></app-new-pizza>
    </div>
  </div>
</template>
<script>
  import NewPizza from './NewPizza.vue'
  export default {
    data(){
      return {
        name: 'Song'
      }
    },
    components: {
      'app-new-pizza': NewPizza
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
