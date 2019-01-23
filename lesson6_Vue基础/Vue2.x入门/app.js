var one = new Vue({
    el:'#vue-app-one',
    data: {
        title: 'Vue app One'
    },
    computed: {
        greet: function () {
            return 'Hello, From app one :)'
        }
    }
});

var two = new Vue({
    el:'#vue-app-two',
    data: {
        title: 'Vue app Two'
    },
    computed: {
        greet: function () {
            return 'Hello, From app Two :)'
        }
    },
    methods: {
        changeTitle: function () {
            one.title = 'Title Changed.'
        }
    }
})

two.title = 'Changed from outside'