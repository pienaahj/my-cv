<template>
  <MDBTabs v-model="activeTabId4">
    <!-- Tabs navs -->
    <MDBTabNav pills justify style="background-color: whitesmoke" tabsClasses="mb-3 text-center opacity-100 bg-gradient rounded-6 ">
      
      <MDBTabItem :wrap="false" tabId="ex4-1" href="ex4-1"  class="selector_style fw-bold border shadow-6-strong rounded-6">
      <!-- <i class="fas fa-chart-pie fa-fw me-2"></i> -->
        <img src='@/assets/icons/competency-icon.svg' alt="..." class="img-thumbnail scale-icon"/>
        Core Competencies
      </MDBTabItem>
        
      <MDBTabItem :wrap="false" tabId="ex4-2" href="ex4-2" class="fw-bold border shadow-6-strong rounded-6">
        <img src='@/assets/icons/skills-icon.svg' alt="..." class="img-thumbnail scale-icon-m"/>
        Skills & Knowledge
      </MDBTabItem>
      <MDBTabItem :wrap="false" tabId="ex4-3" href="ex4-3" class="fw-bold border shadow-6-strong rounded-6">
        <img src='@/assets/icons/technical-icon.svg' alt="..." class="img-thumbnail scale-icon-l"/>
        Technical Knowledge
      </MDBTabItem>

    </MDBTabNav>
    <!-- Tabs navs -->
    <!-- Tabs content -->
    <MDBTabContent>
      <MDBTabPane 
        tabId="ex4-1"
        >
          <MDBCol col="5">
            <core-competencies></core-competencies>
          </MDBCol>
          
        </MDBTabPane>
      <MDBTabPane 
        tabId="ex4-2"
        >
          <skills-knowledge></skills-knowledge>
      </MDBTabPane>
      <MDBTabPane
       tabId="ex4-3"
      >
        <div class="d-flex">
          <div class="p-2 flex-grow-1"></div>
          <div class="p-3 fw-40 justify-content-end card-content align-items-end">
            <technical-knowledge></technical-knowledge>
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
    MDBCol,

  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';

  import CoreCompetencies from '../tables/CoreCompetencies.vue';
  import SkillsKnowledge from '../tables/SkillsKnowledge.vue';
  import TechnicalKnowledge from '../tables/TechnicalKnowledge.vue';
  
  export default {
    components: {
      MDBTabs,
      MDBTabNav,
      MDBTabContent,
      MDBTabItem,
      MDBTabPane,
      MDBCol,

      CoreCompetencies,
      SkillsKnowledge,
      TechnicalKnowledge,
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
.no-background {
  background-color: aliceblue;
}
.card-content{
        background-color: $silver-pink;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        margin: 0.5rem auto;
        max-width: 32rem;
    }
</style>
