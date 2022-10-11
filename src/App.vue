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
  padding: 0.1rem;
  width: 25%;
}
.layout-column-right {
  padding: 0.1rem;
  flex-grow: 1;
}
@media only screen and (min-width: 375px) and (max-width: 1024px) {
  .layout-media {
      display: flex;
      flex-direction:column;
      column-fill: auto;
  }
  .card-media {
    display: flex;
    flex-direction:column;
    border-radius: 5px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.26);
    column-fill: auto;
    margin: 0.1rem !important;
    padding: 0.1rem !important;
  }
  .layout-column-left {
    padding: 0.1rem;
    width: 100%;
  }
  .layout-column-right {
    padding: 0.1rem;
    width: 100%;
  }
  .show-on-desktop { display: none !important; }
  .media-font-size { font-size: x-small !important; }
}

@media only screen and (min-width: 1025px) and (max-width: 1294px) {
  .layout-column-left {
    padding: 0.1rem;
    width: 25%;
  }
  .layout-column-right {
    padding: 0.1rem;
    flex-grow: 1;
  }
}
</style>
