<template>
    <div class="page-content me-2">
        <h1> Welcome </h1>
        <base-card class="card-content">
            <h2>Testing slot in base-card</h2>
            <p>Lets see how a paragraph will look</p>
        </base-card>
        <router-view></router-view>
    </div>
    
</template>


<script>
  import BaseCard from '../components/ui/BaseCard.vue';
  export default {
    components: {
      BaseCard,
    },
  };
</script>


<style scoped>
.page-content {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0.5rem auto;
  max-width: 90rem;
}

.card-content {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0.5rem auto;
  max-width: 70rem;
}
</style>