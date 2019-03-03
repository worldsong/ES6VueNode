<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img src="../../src/assets/icon.png" alt="" class="mx-auto d-block">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input
                id="email"
                type="email"
                class="form-control"
                v-model="email"
              >
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input
                id="password"
                type="password"
                class="form-control"
                v-model="password"
              >
            </div>
            <button class="btn btn-block btn-success">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data(){
      return {
        email: '',
        password: ''
      }
    },
    methods:{
      onSubmit(){
        axios.get('http://localhost:3000/users.json')
          .then(res => {
//            console.log(res.data)
            const data = res.data;
            const users = [];
            for(let key in data){
              const user = data[key]
//              console.log(user)
              users.push(user);
            }
            console.log(users);
            // 实现过滤
            let result = users.filter((user) => {
              return user.email === this.email && user.password === this.password
            })
            console.log(result);
            // 判断result的长度是否大于0
            if(result !=null && result.length > 0){
              this.$router.push({name:"homeLink"})
            } else {
              alert("账号或者密码错误！")
            }
          })
      }
    }
  }
</script>
