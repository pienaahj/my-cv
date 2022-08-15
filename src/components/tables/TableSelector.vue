<template>
  <MDBTabs v-model="activeTabId1">
    <!-- Tabs navs -->
    <MDBTabNav pills tabsClasses="mb-3">
      <MDBTabItem tabId="ex1-1" href="ex1-1">Core Competencies</MDBTabItem>
      <MDBTabItem tabId="ex1-2" href="ex1-2">Skills & Knowledge</MDBTabItem>
      <MDBTabItem tabId="ex1-3" href="ex1-3">Technical Knowledge</MDBTabItem>
    </MDBTabNav>
    <!-- Tabs navs -->
    <!-- Tabs content -->
    <MDBTabContent>
      <MDBTabPane 
        tabId="ex1-1"
        >
          Core Competemcies
          <core-competencies></core-competencies>
        </MDBTabPane>
      <MDBTabPane 
        tabId="ex1-2"
        >
          Skills & Knowledge
          <skills-knowledge></skills-knowledge>
      </MDBTabPane>
      <MDBTabPane
       tabId="ex1-3"
      >
        Technical Knowledge
        <technical-knowledge></technical-knowledge>
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
    },
    setup() {
      const activeTabId1 = ref('ex1-1');
      return {
        activeTabId1,
      };
    },
  };
</script>