<template>
  <div class="d-flex layout-media">
    <!-- lefthand column -->
    <div class="layout-column-left layout-media">
        <base-card>
            <base-greeting></base-greeting>
        </base-card>
    </div>
    <!-- righthand column -->
    <div class="layout-column-right layout-media">
        <router-view></router-view>
    </div>
</div>
</template>

<script> 
    import BaseCard from '../ui/BaseCard.vue';

    export default {
        components: {
            BaseCard,
        },
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/config/_variables.scss';
  
      .table-layout { 
          background-color: $bd-blue;
          // background-color: $dark-sky-blue;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
          padding: 1rem;
          margin: 0.5rem auto;
          max-width: 100rem;
      }
      .page-content {
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 0.5rem;
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
  
      .custom-class {
        display: none;
      }
  
      
  </style>
  
