new Vue({
    el:'#app',
    data: {
        health: 100, // 血量初始值
        ended: false
    },
    methods: {
        punch: function () {
            console.log('打')
            this.health -= 10;
            if(this.health <=0 ){
                this.ended = true;
            }
        },
        restart: function () {
            this.health = 100;
            this.ended = false;
        }
    },
    computed: {

    }
})