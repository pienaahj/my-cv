<template>
  <the-header></the-header>
  <the-layout></the-layout>
  
</template>


<script>
  import TheHeader from './components/layout/TheHeader.vue';
  import TheLayout from './components/layout/TheLayout.vue';

  export default {
    components: {
      TheHeader,
      TheLayout,
    }
  }
</script>
<style>

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
