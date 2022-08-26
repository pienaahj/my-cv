<template>
  <div class="card-content">
    <slot></slot>
  </div>
</template>



<style scoped>
.card-content {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0.5rem auto;
  max-width: 90rem;
  background-color:aliceblue;
}

</style>