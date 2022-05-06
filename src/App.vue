<template>
  <div id="app">
    <mainContainer/>
  </div>
</template>

<script>
import mainContainer from './components/mainContainer.vue'

export default {
  name: 'App',
  components: {
    mainContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
