<template>
  <div class="card-content" :class="{ cardMedia: fromHome}" >
    <slot></slot>
  </div>
</template>

<script>

  export default {
    props: {
      fromHome: String,
    }
}
</script>


<style scoped>
.card-content {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0.5rem;
  max-width: 90rem;
  background-color:aliceblue;
}

@media only screen and (min-width: 375px) and (max-width: 1024px) {
    .cardMedia {
      display: flex;
      flex-direction:column;
      width: 60% !important;
      max-width: 60%;
      /* flex-wrap: wrap; */
      column-fill: auto;
    }
    
  }
</style>