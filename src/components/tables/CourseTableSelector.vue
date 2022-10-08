<template>
  <MDBTabs v-model="activeTabId4">
    <!-- Tabs navs -->
    <MDBTabNav pills justify style="background-color: whitesmoke" tabsClasses="mb-3 text-center opacity-100 bg-gradient rounded-6 ">
      
      <MDBTabItem :wrap="false" tabId="ex4-1" href="ex4-1"  class="selector_style fw-bold border shadow-6-strong rounded-6">
        <img src='@/assets/icons/training_small.png' alt="..." class="img-thumbnail scale-icon-s mb-3"/>
        <!-- <i class="far fa-address-card"></i> -->
        <section>Qualifications</section>
        <section>School & tertiary</section>
      </MDBTabItem>
        
      <MDBTabItem :wrap="false" tabId="ex4-2" href="ex4-2" class="fw-bold border shadow-6-strong rounded-6">
        <img src='@/assets/icons/Computer_skills_512.png' alt="..." class="img-thumbnail scale-icon-xs mb-3"/>
        <section>Computer</section>
        <section>Literacy</section> 
      </MDBTabItem>

      <MDBTabItem :wrap="false" tabId="ex4-3" href="ex4-3" class="fw-bold border shadow-6-strong rounded-6">
        <img src='@/assets/icons/classroom_512.png' alt="..." class="img-thumbnail scale-icon-xs mb-3"/>
        <section>Formal</section>
        <section>Training</section> 
      </MDBTabItem>

      <MDBTabItem :wrap="false" tabId="ex4-4" href="ex4-4" class="fw-bold border shadow-6-strong rounded-6">
        <img src='@/assets/icons/e_learning2_512.png' alt="..." class="img-thumbnail scale-icon-s mb-2"/>
        <section>Web based</section>
        <section>Courses</section>
      </MDBTabItem>

      <!-- <MDBTabItem :wrap="false" tabId="ex4-5" href="ex4-5" class="fw-bold border shadow-6-strong rounded-6">
        <img src='@/assets/icons/technical-icon.svg' alt="..." class="img-thumbnail scale-icon-l"/>
        <section>Key</section>
        <section>Responsibilities</section> 
      </MDBTabItem> -->

    </MDBTabNav>
    <!-- Tabs navs -->
    <!-- Tabs content -->
    <MDBTabContent>
      
      <MDBTabPane
       tabId="ex4-1"
      >
        <div class="d-flex">
          <div class="p-3 fw-40 justify-content-end card-content-career-summary align-items-end">
            <qualifications-summary></qualifications-summary>
          </div>
          <div class="p-2 flex-grow-1"></div>
        </div>
      </MDBTabPane>

      <MDBTabPane 
        tabId="ex4-2"
        >
          <computer-literacy></computer-literacy>
      </MDBTabPane>

      <MDBTabPane
       tabId="ex4-3"
      >
        <div class="d-flex">
          <!-- <div class="p-2 flex-grow-1"></div> -->
          <div class="p-3 fw-40 w-100 justify-content-end card-content-technical align-items-end">
            <all-training :online="false"></all-training>
          </div>
          <!-- <div class="p-2 flex-grow-1"></div> -->
        </div>
      </MDBTabPane>
      
      <MDBTabPane 
      tabId="ex4-4"
      >
      <div class="d-flex">
        <!-- <div class="p-2 flex-grow-1"></div> -->
        <div class="p-3 fw-40 w-100 justify-content-end card-content-technical align-items-end">
          <all-training :online="true"></all-training>
        </div>
      </div>
      </MDBTabPane>

    </MDBTabContent>
    <!-- Tabs content -->
  </MDBTabs>
</template>

<script>
  import {
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,


  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';

  import AllTraining from './AllTraining.vue';

  import QualificationsSummary from '../tables/QualificationsSummary.vue';
  import ComputerLiteracy from '../tables/ComputerLiteracy.vue';
  
  export default {
    components: {
      MDBTabs,
      MDBTabNav,
      MDBTabContent,
      MDBTabItem,
      MDBTabPane,
      AllTraining,
      QualificationsSummary,
      ComputerLiteracy,
    },
    emits: {
        online: {
          type: 'boolean',
          default: false,
        }
    },
    setup() {
      const activeTabId4 = ref('ex4-1');
      return {
        activeTabId4,
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/config/_variables.scss';

.scale-icon{
  width:18%;
}
.scale-icon-m {
  width: 30%;
}
.scale-icon-l {
  width: 20%;
}
.scale-icon-s {
  width: 60%;
}
.scale-icon-xs {
  width: 80%;
}
.no-background {
  background-color: aliceblue;
}
.card-content-technical{
        background-color: $silver-pink;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        margin: 0.5rem auto;
        max-width: 100rem;
    }
  .card-content-career-summary{
      background-color: $silver-pink;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      padding: 1rem;
      margin: 0.5rem auto;
      max-width: 45rem;
  }
</style>
