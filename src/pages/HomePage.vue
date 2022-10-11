<template>
    <div class="page-content me-2 card-media-home"> 
      <base-card :fromHome="true" class="card-content">
      <h2>Career, Skills, Technical Knowledge, Core Competencies & Key Responsibilities</h2>
      </base-card>
      <the-carousel></the-carousel>
      <base-card :fromHome="true">
        <base-card :fromHome="true" class="table-layout opacity-75">
          <the-table> 
            <table-selector></table-selector>
          </the-table> 
        </base-card>
      </base-card>
    </div>
</template>


<script>
  import BaseCard from '../components/ui/BaseCard.vue';
  import TheCarousel from '../components/layout/TheCarousel.vue';
  import TheTable from '../components/layout/TheTable.vue';
  import TableSelector from '../components/tables/TableSelector.vue';
  // import { MDBContainer } from 'mdb-vue-ui-kit';
  export default {
    components: {
      BaseCard,
      TheCarousel,
      TheTable,
      TableSelector,
      // MDBContainer,
    },
  };
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
    .custom-class {
      display: none;
    }
    @media only screen and (min-width: 375px) and (max-width: 1024px) {
    .card-media-home {
      display: flex;
      flex-direction:column;
      width: 100%!important;
      column-fill: auto;
    }
  }
</style>

