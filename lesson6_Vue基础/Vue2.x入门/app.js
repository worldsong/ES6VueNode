var vm = new Vue({
    el: '#app',
    data(){
        return {
            items: ['a', 'b', 'c']
        }
    },
    template: `
        <div>
            <template v-for="item in items">
                <h1>{{item}}</h1>
            </template>
        </div> 
    `
})