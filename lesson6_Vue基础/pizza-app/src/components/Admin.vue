<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!--New pizza-->
      <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 产品类型展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
        <tr>
          <th>品种</th>
          <th>删除</th>
        </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
        <tr>
          <td>{{item.name}}</td>
          <td>
            <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import NewPizza from './NewPizza.vue'
  export default {
    data(){
      return {
        name: 'Song',
//        getMenuItems:[]
      }
    },
    components: {
      'app-new-pizza': NewPizza
    },
    methods: {
      deleteData(item){
        console.log(item);
        fetch("http://localhost:3000/menu.json/" + item.name, {
          method: "DELETE",
          headers: {
            'Content-type': 'application/json'
          }
        })
          .then(res => this.$store.commit('removeMenuItems', item))
          .catch(err => console.log(err))
      }
    },
    computed: {
      getMenuItems: {
        // 在Vuex中获取数据
        get(){
          return this.$store.getters.getMenuItems;
        },
        set(){

        }
      }
    },
    created(){
      fetch("http://localhost:3000/menu.json")
        .then(res => {
          return res.json();
        })
        .then(data => {
          let menuArray = [];
          for(let key in data){
            data[key].id = key;
            menuArray.push(data[key])
          }
          this.$store.commit('setMenuItems', menuArray)
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
