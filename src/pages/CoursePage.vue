<template>
    <div class="page-content me-2 card-media">
        <base-card class="card-content">
        <h2>Education, Vocational Qualifications & Training</h2>
        </base-card>
        <div>
          <video-carousel class="d-flex"></video-carousel>
        </div>
        <base-card :fromHome="true">
          <base-card :fromHome="true" class="table-layout opacity-75">
            <the-table> 
                <course-table-selector></course-table-selector>
            </the-table> 
          </base-card>
        </base-card>
    </div>  
</template>


<script>
  import BaseCard from '../components/ui/BaseCard.vue';
  import VideoCarousel from '../components/layout/VideoCarousel.vue';
  import TheTable from '../components/layout/TheTable.vue';
  import CourseTableSelector from '../components/tables/CourseTableSelector.vue';

  export default {
    components: {
      BaseCard,
      VideoCarousel,
      TheTable,
      CourseTableSelector,
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
@media only screen and (min-width: 375px) and (max-width: 1024px) {
  .card-media-home {
    display: flex;
    flex-direction:column;
    width: 23rem !important;
    max-width: 23rem !important;
    column-fill: auto;
  }
}
</style>