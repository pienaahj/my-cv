<template>
    <div class="page-content me-2">
        <base-card class="card-content">
        <h2>Employment History</h2>
        </base-card>
        <div class="bg-image hover-overlay">
          <img src='../assets/images/telkom-scaled.webp' class="img-fluid" />
          <a href="#!">
            <div class="mask overlay" style="background-color: rgba(57, 192, 237, 0.2)"></div>
          </a>
        </div>
        <base-card class="table-layout opacity-75">
          <employment-table-selector></employment-table-selector>
        </base-card>
    </div>
    
</template>


<script>
  import BaseCard from '../components/ui/BaseCard.vue';
  import EmploymentTableSelector from '../components/tables/EmploymentTableSelector.vue';
  export default {
    components: {
      BaseCard,
      EmploymentTableSelector,
    },
  };
</script>


<style lang="scss" scoped>
  @import '@/assets/config/_variables.scss';
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
  max-width: 100rem;
}
.table-layout { 
    background-color: $bd-blue;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 0.5rem auto;
    max-width: 100rem;
}
</style>