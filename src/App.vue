<template>
    <div id="app">
        <img src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>

        <v-alert></v-alert>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        created() {
            /* eslint-disable no-console */
            console.log(this.$vAlertTimeout = 100000);
            this.$vAlertService.error("Default", {error: 'Hello World'});
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
