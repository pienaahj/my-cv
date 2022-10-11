<template>
  <MDBTabs v-model="activeTabId4">
    <!-- Tabs navs -->
    <MDBTabNav pills justify style="background-color: whitesmoke" tabsClasses="mb-3 text-center opacity-100 bg-gradient rounded-6 tabnav-media">
      
      <MDBTabItem :wrap="false" tabId="ex4-1" href="ex4-1"  class="selector_style fw-bold border shadow-6-strong rounded-6">
      <!-- <i class="fas fa-chart-pie fa-fw me-2"></i> -->
        <img src='@/assets/icons/career_summary_512.png' alt="..." class="img-thumbnail scale-icon-s mb-4 show-on-desktop"/>
        <!-- <i class="far fa-address-card"></i> -->
        <section>Career</section>
        <section>Summay</section>
      </MDBTabItem>
        
      <MDBTabItem :wrap="false" tabId="ex4-2" href="ex4-2" class="fw-bold border shadow-6-strong rounded-6">
        <img src='@/assets/icons/skills_512.png' alt="..." class="img-thumbnail scale-icon-xs icon-margin-bottom show-on-desktop"/>
        <section>Skills & </section>
        <section>Knowledge</section> 
      </MDBTabItem>

      <MDBTabItem :wrap="false" tabId="ex4-3" href="ex4-3" class="fw-bold border shadow-6-strong rounded-6">
        <img src='@/assets/icons/technical.png' alt="..." class="img-thumbnail scale-icon-s mb-1 show-on-desktop"/>
        <section>Technical</section>
        <section>Knowledge</section> 
      </MDBTabItem>

      <MDBTabItem :wrap="false" tabId="ex4-4" href="ex4-4" class="fw-bold border shadow-6-strong rounded-6">
        <img src='@/assets/icons/competency.png' alt="..." class="img-thumbnail scale-icon-s mb-1 show-on-desktop"/>
        <section>Core</section>
        <section>Competencies</section>
      </MDBTabItem>

      <MDBTabItem :wrap="false" tabId="ex4-5" href="ex4-5" class="fw-bold border shadow-6-strong rounded-6">
        <img src='@/assets/icons/responsibility_512.png' alt="..." class="img-thumbnail scale-icon-s mb-2 show-on-desktop"/>
        <section>Key</section>
        <section>Responsibilities</section> 
      </MDBTabItem>

    </MDBTabNav>
    <!-- Tabs navs -->
    <!-- Tabs content -->
    <MDBTabContent>
      
      <MDBTabPane
       tabId="ex4-1">
        <div class="d-flex">
          <div class="p-3 fw-40 justify-content-end card-content-career-summary align-items-end ">
            <career-summary></career-summary>
          </div>
        </div>
      </MDBTabPane>

      <MDBTabPane 
      tabId="ex4-2">
        <div class="d-flex">
          <!-- <div class="p-3 fw-40 justify-content-end card-content-career-summary align-items-end"></div> -->
            <skills-knowledge></skills-knowledge>
        </div> 

      </MDBTabPane>

      <MDBTabPane
       tabId="ex4-3">
        <div class="d-flex">
          <div class="p-2 flex-grow-1"></div>
          <div class="p-3 fw-40 w-70 justify-content-end card-content-technical align-items-end">
            <technical-knowledge></technical-knowledge>
          </div>
        </div>
      </MDBTabPane>

      <MDBTabPane 
        tabId="ex4-4">
          <div class="d-flex">
            <div class="p-2 flex-grow-1"></div>
            <div class="p-2 fw-40 justify-content-end align-items-end">
              <core-competencies></core-competencies>
            </div>
          </div>
      </MDBTabPane>

      <MDBTabPane
       tabId="ex4-5">
        <div class="d-flex">
          <div class="p-2 flex-grow-1"></div>
          <div class="p-3 fw-40 justify-content-end  align-items-end">
            <key-responsibilities></key-responsibilities>
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

  import CoreCompetencies from '../tables/CoreCompetencies.vue';
  import SkillsKnowledge from '../tables/SkillsKnowledge.vue';
  import TechnicalKnowledge from '../tables/TechnicalKnowledge.vue';
  import CareerSummary from '../tables/CareerSummary.vue';
  import KeyResponsibilities from '../tables/KeyResponsibilities.vue';
  
  export default {
    components: {
      MDBTabs,
      MDBTabNav,
      MDBTabContent,
      MDBTabItem,
      MDBTabPane,


      CoreCompetencies,
      SkillsKnowledge,
      TechnicalKnowledge,
      CareerSummary,
      KeyResponsibilities,
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
  width: 80%;
}
.scale-icon-xs {
  width: 100%;
}
.icon-margin-bottom {
  margin-bottom: 23.5%;
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
        max-width: 35rem;
    }
.card-content-career-summary{
    background-color: $silver-pink;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 0.5rem auto;
    max-width: 45rem;
}
@media only screen and (min-width: 375px) and (max-width: 1024px) {
        .icon-media {
        display: flex;
        flex-direction:column;
        width: 23rem !important;
        max-width: 23rem !important;
        /* flex-wrap: wrap; */
        column-fill: auto;
        }
        .media-font-size {
          font-size: xx-small !important;
        }
        .card-content-career-summary{
          background-color: $silver-pink;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
          padding: 0.5rem !important;
          margin: 0.5rem auto;
          max-width: 50rem;
        }
        .nav-pills {
          margin-left: 0rem; 
        }
      }
</style>
<style lang="scss">
  @import '@/assets/config/_variables.scss';
  .change-link-color {
    color: $charcoal !important;
    :active {
      color: $desert-sand !important;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 1024px) {
    .tabnav-media{
      background-color: $silver-pink;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      margin: 0.5rem auto;
      max-width: 50rem;
    }   
  }
</style>