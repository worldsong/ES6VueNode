var app = new Vue({
    el: '#app',
    data: {
        bookNameForTemplate: 'Getting to Know Vue.js',
        bookNameForMethod: 'Getting to Know Vue.js',
        bookNameForComputed: 'Getting to Know Vue.js',
        publisher: 'Apress'
    },
    methods: {
        getTitleBlurb: function () {
            console.log('Called: getTitleBlurb');
            return `${this.bookNameForMethod} by ${this.publisher}`
        }
    },
    computed: {
        TitleBlurb: function () {
            console.log('Called: titleBlurb');
            return `${this.bookNameForComputed} by ${this.publisher}`
        }
    },
    template: `
        <div>
            <h3>Template based:</h3>
            <h4>{{bookNameForTemplate}} by {{publisher}}</h4>
            
            <h3>Method based:</h3>
            <h4>{{getTitleBlurb()}}</h4>
            
            <h3>Computed Property based:</h3>
            <h4>{{TitleBlurb}}</h4>
        </div>      
    `
})