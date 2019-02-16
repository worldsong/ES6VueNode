<template>
    <header>
        <h1 v-on:click="changeTitle">{{title}}</h1>
    </header>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            }
        },
        data(){
            return {

            }
        },
        methods: {
            changeTitle: function () {
                console.log('你进行了改名操作。')
                this.$emit('changeTitle', 'Vue Hello')
            }
        },
//        beforeCreate: function(){
//            alert('组件实例化之前执行的函数');
//        },
//        created: function () {
//            alert('组件实例化完毕，但页面还未显示');
//        },
//        beforeMount: function () {
//            alert('组件挂载前，页面仍未显示，但是虚拟DOM已经配置ok');
//        },
//        mounted: function () {
//            alert('组件挂载后，此方法执行后，页面显示');
//        },
//        beforeUpdate: function () {
//            alert('组件更新前，页面仍未更新，但是虚拟DOM已经配置好');
//        },
//        updated: function () {
//            alert('组件更新，此方法执行后，页面显示');
//        },
//        beforeDestroy: function () {
//            alert('组件销毁前');
//        },
//        destroyed: function () {
//            alert('组件销毁');
//        }
    }
</script>

<style scoped>
    header {
        background: lightgreen;
        padding: 10px;
    }
    h1 {
        color: #222;
        text-align: center;
    }
</style>