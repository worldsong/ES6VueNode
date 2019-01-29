<template>
    <div id="app">
        <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
        <app-user v-bind:users="users"></app-user>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import User from './components/User.vue'
    import Footer from './components/Footer.vue'

    export default {
        name: 'app',
        components: {
            'app-header': Header,
            'app-user': User,
            'app-footer': Footer
        },
        data() {
            return {
                name: 'Song',
                message: 'Hello, Welcome to Vue.js',
                users: ['Song', 'Frank', 'Vico'],
                title: 'Vue init Pro'
            }
        },
        methods: {
            updateTitle: function (updatedTitle) {
                this.title = updatedTitle;
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: crimson;
    }
</style>
