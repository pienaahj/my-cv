<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif, Qwitcher Grypen;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
  .layout-column-left {
    padding: 0.5rem;
    width: 25%;
  }
  .layout-column-right {
    padding: 0.5rem;
    flex-grow: 1;
  }
  /* @media only screen and (max-width: 414px) {
    .layout-media{
      display: flex;
      flex-direction:column;
      width: 100% !important;
      flex-wrap: wrap;
      column-fill: auto;
    }
  
  @media only screen and (max-width: 390px) {
    .layout-media{
      display: flex;
      flex-direction:column;
      width: 100% !important;
      flex-wrap: wrap;
      column-fill: auto;
    }
  }
  
  } */
  @media only screen and (min-width: 375px) and (max-width: 1024px) {
    .layout-media {
        display: flex;
        flex-direction:column;
        width: 100% !important;
        /* flex-wrap: wrap; */
        column-fill: auto;
    }
    .layout-column-left {
      padding: 0.1rem;
      width: 100%;
    }
    .layout-column-right {
      padding: 0.1rem;
      width: 100%;
    }
    
  }
</style>
