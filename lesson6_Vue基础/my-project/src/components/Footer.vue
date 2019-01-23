<template>
    <header>
        <p>{{copyright}}</p>
    </header>
</template>

<script>
    export default {
        data(){
            return {
                copyright:'Copyright 2019 Vue Song'
            }
        }
    }
</script>

<style scoped>
    footer {
        background: #222;
        padding: 6px;
    }
    p {
        color: lightgreen;
        text-align: center;
    }
</style>