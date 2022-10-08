<template>
  <!-- if still loading the data spin -->
  <p v-if="isLoading">
      <base-spinner></base-spinner>
  </p>
  <div v-else-if="!isLoading && hasEmployment">

    <MDBAccordion 
      v-model="activeItem"
      >

      <MDBAccordionItem
        headerTitle="August 2012 to September 2014"
        collapseId="collapseOne"
        
        > 
          <div class="card-content">
            <p class="lead">
              <strong> {{filteredHistory[0].jobTitle}}</strong>
            </p>
          <p> <em>Location: {{filteredHistory[0].place}}</em> </p>
          <p class="job-description-header h4">Job decription</p>
          <div class="job-description-text text-start">
            {{filteredHistory[0].jobDescription1}}
          </div>
          </div>
          
        </MDBAccordionItem>

        <MDBAccordionItem
          headerTitle="September 2011 to July 2012"
          collapseId="collapseTwo"
        >
          <div class="card-content">
              <p class="lead">
                <strong> {{filteredHistory[1].jobTitle}}</strong>
              </p>
            <p> <em>Location: {{filteredHistory[1].place}}</em> </p>
            <p class="job-description-header h4">Job decription</p>
            <div class="job-description-text">
              {{filteredHistory[1].jobDescription1}}
            </div>
            <p class="job-description-header h4">Job functions</p>
            <ul class="history-ul">
              <li>{{filteredHistory[1].jobResponsibilities1[0]}}</li>
              <li>{{filteredHistory[1].jobResponsibilities1[1]}}</li>
              <li>{{filteredHistory[1].jobResponsibilities1[2]}}</li>
              <li>{{filteredHistory[1].jobResponsibilities1[3]}}</li>
              <li>{{filteredHistory[1].jobResponsibilities1[4]}}</li>
              <li>{{filteredHistory[1].jobResponsibilities1[5]}}</li>
              <li>{{filteredHistory[1].jobResponsibilities1[6]}}</li>
            </ul>
          </div>
          
        </MDBAccordionItem> 
        <MDBAccordionItem
          headerTitle="July 2005 to August 2011"
          collapseId="collapseThree"
        >
        <div class="card-content">
              <p class="lead">
                <strong> {{filteredHistory[2].jobTitle}}</strong>
              </p>
            <p> <em>Location: {{filteredHistory[2].place}}</em> </p>
            <p class="job-description-header h4">Job decription</p>
            <div class="job-description-text text-start">
              {{filteredHistory[2].jobDescription1}}
            </div>
            <p class="job-description-header h4">Job functions</p>
            <ul class="history-ul">
              <li>{{filteredHistory[2].jobResponsibilities1[0]}}</li>
              <li>{{filteredHistory[2].jobResponsibilities1[1]}}</li>
            </ul>
            <img 
              :src="require ('../../assets/symbols/page-divider-design-png-6.png')" 
              class="img-fluid" 
              alt="..."
            />
            <p class="job-description-header h4">Job decription</p>
            <div class="job-description-text text-start">
              {{filteredHistory[2].jobDescription2}}
            </div>
            <p class="job-description-header h4">Job functions</p>
            <ul class="history-ul">
              <li>{{filteredHistory[2].jobResponsibilities2[0]}}</li>
              <li>{{filteredHistory[2].jobResponsibilities2[1]}}</li>
              <li>{{filteredHistory[2].jobResponsibilities2[2]}}</li>
              <li>{{filteredHistory[2].jobResponsibilities2[3]}}</li>
            </ul>
            <img 
              :src="require ('../../assets/symbols/page-divider-design-png-6.png')" 
              class="img-fluid" 
              alt="..."
            />
            <p class="job-description-header h4">Job decription</p>
            
            <div class="job-description-text">
              {{filteredHistory[2].jobDescription3}}
            </div>
            <p class="job-description-header h4">Job functions</p>
            <ul class="history-ul">
              <li>{{filteredHistory[2].jobResponsibilities3[0]}}</li>
              <li>{{filteredHistory[2].jobResponsibilities3[1]}}</li>
              <li>{{filteredHistory[2].jobResponsibilities3[2]}}</li>
              <li>{{filteredHistory[2].jobResponsibilities3[3]}}</li>
              <li>{{filteredHistory[2].jobResponsibilities3[4]}}</li>
            </ul>
          </div>

        </MDBAccordionItem>
        <MDBAccordionItem
          headerTitle="July 2000 to June 2005"
          collapseId="collapseFour"
        >
        <div class="card-content">
            <p class="lead">
              <strong> {{filteredHistory[3].jobTitle}}</strong>
            </p>
          <p> <em>Location: {{filteredHistory[3].place}}</em> </p>
          <p class="job-description-header h4">Job decription</p>
          <div class="job-description-text text-start">
            {{filteredHistory[3].jobDescription1}}
          </div>
          </div>
        </MDBAccordionItem>

        <MDBAccordionItem
          headerTitle="April 1999 to June 2000"
          collapseId="collapseFive"
        >
        <div class="card-content">
              <p class="lead">
                <strong> {{filteredHistory[4].jobTitle}}</strong>
              </p>
            <p> <em>Location: {{filteredHistory[4].place}}</em> </p>
            <p class="job-description-header h4">Job decription</p>
            <div class="job-description-text">
              {{filteredHistory[4].jobDescription1}}
            </div>
            <p class="job-description-header h4">Job functions</p>
            <ul class="history-ul">
              <li>{{filteredHistory[4].jobResponsibilities1[0]}}</li>
              <li>{{filteredHistory[4].jobResponsibilities1[1]}}</li>
              <li>{{filteredHistory[4].jobResponsibilities1[2]}}</li>
            </ul>
          </div>

        </MDBAccordionItem>
        <MDBAccordionItem
          headerTitle="August 1992 to March 1999"
          collapseId="collapseSix"
        >
        <div class="card-content">
            <p class="lead">
              <strong> {{filteredHistory[5].jobTitle}}</strong>
            </p>
          <p> <em>Location: {{filteredHistory[5].place}}</em> </p>
          <p class="job-description-header h4">Job decription</p>
          <div class="job-description-text text-start">
            {{filteredHistory[5].jobDescription1}}
          </div>
        </div>
        </MDBAccordionItem>

        <MDBAccordionItem
          headerTitle="July 1992"
          collapseId="collapseSeven"
        >
          <div class="card-content">
            <p class="lead">
              <strong> {{filteredHistory[6].jobTitle}}</strong>
            </p>
          <p> <em>Location: {{filteredHistory[6].place}}</em> </p>
          <p class="job-description-header h4">Job decription -  Title change</p>
          </div>

        </MDBAccordionItem>

        <MDBAccordionItem
          headerTitle="January 1989 to July 1992"
          collapseId="collapseEight"
        >
        <div class="card-content">
            <p class="lead">
              <strong> {{filteredHistory[7].jobTitle}}</strong>
            </p>
          <p> <em>Location: {{filteredHistory[7].place}}</em> </p>
          <p class="job-description-header h4">Job decription</p>
          <div class="job-description-text text-start">
            {{filteredHistory[7].jobDescription1}}
          </div>
        </div>    
        </MDBAccordionItem>
    </MDBAccordion>
  </div>
</template>

<script>
  import {
    MDBAccordion,
    MDBAccordionItem
  } from 'mdb-vue-ui-kit';

  import { ref } from 'vue';

  // import { HistoryCard } from '../HistoryCard.vue';
  
  export default {
    components: {
      MDBAccordion,
      MDBAccordionItem,
      // HistoryCard,

    },
    setup() {
      const activeItem = ref('collapseOne');
      return {
        activeItem,
      };
    },

    data() {
      return {
        error: null,
        isLoading: false,
      };
    },
  
    // Fetch the history from Firebase
    methods: {
      async loadAllHistory() {
        this.isLoading = true;
        try {
          await this.$store.dispatch('employment/loadEmployment');
        } catch (error) {
          this.error = error.message || "something went wrong!";
        }
        this.isLoading = false;
      },
    },
    
    
    created() {
      this.loadAllHistory();
    },
    
    
    // get the employment from state store
    computed: {
      // filtered employment to display 
      filteredHistory() {  
        const employment = this.$store.getters['employment/getFormal'];
        return employment;
        },
      
      hasEmployment() {
        return (
          !this.isLoading && this.$store.getters['employment/hasEmployment']
          );
        },
    },

  };
</script>

<style lang="scss" scoped>
  @import '@/assets/config/_variables.scss';

  .scale-icon {
    width: 18%;
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

  .card-content {
    background-color: $silver-pink;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 0.5rem auto;
    max-width: 80rem;
  }

  .history-ul {
    // background-color: aliceblue;
    // border-radius: 12px;
    // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding-bottom: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
    margin: 0.5rem auto;
    max-width: 40rem;
    list-style: none;
  }

  li {
        background-color: whitesmoke;
        list-style: none;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 0.5rem;
        margin: 0.5rem auto;
    }

  .job-description-header {
    color: $true-blue;
    padding-top: 1rem;
    margin: 0.5rem auto;

  }

  .job-description-text {
    background-color: whitesmoke;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 0.5rem auto;
    max-width: 70rem;
  }
</style>
