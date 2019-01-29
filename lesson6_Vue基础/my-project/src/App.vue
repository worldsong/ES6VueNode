<template>
    <div id="app">
        <app-header></app-header>
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
                users: ['Song', 'Frank', 'Vico']
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: crimson;
    }
</style>
