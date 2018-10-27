<template>
  <div id="app">
    <Landing/>
  </div>
</template>

<script>
import Landing from './components/Landing.vue'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  components: {
    Landing
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
