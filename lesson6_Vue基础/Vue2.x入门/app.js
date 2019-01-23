var data = {
    name: 'Song'
}
Vue.component('greeting', {
    template: `
        <div>
            <p>Hello, I'm {{name}}</p>
            <button v-on:click="changeName">改名</button>
        </div>
    `,
    data() {
        return data;
    },
    methods: {
        changeName: function () {
            this.name = "WorldSong"
        }
    }

})
var one = new Vue({
    el:'#vue-app-one',
});

var two = new Vue({
    el:'#vue-app-two',
})
