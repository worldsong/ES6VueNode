new Vue({
    el:'#app',
    data: {
        name: '',
        age: ''
    },
    methods: {
        logName: function () {
            // console.log('you entered your name');
            this.name = this.$refs.name.value;
        },
        logAge: function () {
            // console.log('you entered your age');
            this.age = this.$refs.age.value;
        }
    }
})