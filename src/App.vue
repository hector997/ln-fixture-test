<template>
  <div id="app">
    <mainContainer />
  </div>
</template>

<script>
import mainContainer from "./components/mainContainer.vue";

export default {
  name: "App",
  components: {
    mainContainer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  --primary: #ed706a;
  --primaryLight: #ef8b88;
  --primaryDark: #e05149;
  --secondaryLight: #e6e5e5;
  --secondary: #908f90;
  --secondaryDark: #404140;
}
</style>
