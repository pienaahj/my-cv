<template>
    <!-- if still loading the data spin -->
    <p v-if="isLoading">
      <base-spinner></base-spinner>
    </p>
    <div v-else-if="!isLoading && hasCourses" >
      <MDBTable
        variant="light"
        striped 
        sm 
       >
        <thead class="table-header sticky-top">
            <tr>
              <th scope="col">Title</th>
              
              <th scope="col" id="test" v-if="!online"> 
                <label for="courseCategory">Category</label>
                <select v-on:change="filterCourseCategories" name="courseCategory" id="courseCategory" class="d-flex" >
                  <option value="all">All</option>
                  <option value="ManagementLeadership">Management/Leadership</option>
                  <option value="Computer literacy">Computer Literacy</option>
                  <option value="Project Management">Project Management</option>
                  <option value="Management and people skills">Management and People Skills</option>
                  <option value="Financial Management">Financial Management</option>
                  <option value="Saftey Management">Saftey Management</option>
                  <option value="Technical Training">Technical Training</option>
                  <option value="GIS">GIS</option>
                  <option value="ProgrammingDeveloper">Programming Developer</option>
                </select>
              </th>

              <th scope="col" id="test2" v-else> 
                <label for="onlineCourseCategory">Category</label>
                <select v-on:change="filterCourseCategories" name="onlineCourseCategory" id="courseCategory" class="d-flex" >
                  <option value="all">All</option>
                  <option value="GolangDevelopment">Golang Development</option>
                  <option value="PythonDevelopment">Python Development</option>
                  <option value="SQLDevelopment">SQL Development</option>
                  <option value="ElasticSearchDevelopment">ElasticSearch Development</option>
                  <option value="SecurityDevelopment">Security Development</option>
                  <option value="LinuxAdministrator">Linux Administrator</option>
                  <option value="ProjectManagementg">Project Management</option>
                  <option value="FrontEndFramework">FrontEnd Framework</option>
                  <option value="WebDevelopment">Web Development</option>
                  <option value="AIDevelopment">AI Development</option>
                </select>
              </th>


              <th scope="col">Institution/Period</th>

              <th scope="col" id="test3" v-if="online">
                <label for="onlineCourseCompleted">Completed</label>
                <select v-on:change="filterCoursesCompleted" name="onlineCourseCompleted" id="courseCompleted" class="d-flex" >
                  <option value="all">All</option>
                  <option value="yes">yes</option>
                  <option value="in progress">in progress</option>
                </select>
              </th>

              <th scope="col">Description</th>
            </tr>

            
            
        </thead>
        <tbody class="vertical-align:top ">
          <tr v-for="course in courses"
            :key="course.id"
            :courseTitle="course.courseTitle"
            :courseCategory="course.courseCategory"
            :datePeriod="course.datePeriod"
            :description="course.description"
            :institution="course.institution">
            
            <td >
              <div>
                <p>{{ course.courseTitle }}</p>
              </div>
            </td>
            <td>
              <p>{{ course.courseCategory }}</p>
            </td>
            <td>
              <p>{{ course.institution}}</p>
              <p>{{ course.datePeriod }}</p>
            </td>
            <td v-if="online">
              <p>{{ course.completed }}</p>
            </td>
            <td colspan="2">
              <div>
                  {{ course.description}}
              </div>
            </td>
          </tr>
          
          
        </tbody>
          
      </MDBTable>
    </div>
  </template>
  
  <script>
    import { MDBTable } from 'mdb-vue-ui-kit';



  
  export default {
    components: {
      MDBTable,
    },

    props: {
      online: {
        type: Boolean,
        default: false,
      }
    },

    data() {
      return {
        error: null,
        isLoading: false,
        el: '#test',
        courses: [], // for diplay
        firstFilteredCourses: [], // to remeber the original courses loaded
        completedCourses: [], // to remeber the completed course filtered list
        categoryCourses: [], // to remeber the category filtered courses
        completedSelector: 'all',
        categorySelector: false,
        categorySelected: 'all',
      };
    },
  
    // Fetch the skills from Firebase
    methods: {
      async loadAllCourses() {
        this.isLoading = true;
        try {
          await this.$store.dispatch('courses/loadCourses');
        } catch (error) {
          this.error = error.message || "something went wrong!";
        }
        this.courses = this.filteredCourses;
        this.firstFilteredCourses = this.courses;
        this.isLoading = false;
        this.completedCourses = this.firstFilteredCourses;
        this.categoryCourses = this.firstFilteredCourses;
      },

      filterCourseCategories(evt) {
        var val = evt.target.value;
        console.log("val: ", val);
        // test if the completed selector is present
        if (this.completedSelector != 'all') {
          if (this.categorySelected != val) { // if different category selected - reset all
            var courseList = this.firstFilteredCourses;  // reset to all courses
            this.completedSelector = 'all'  // reset completed to all
            document.querySelector("#courseCompleted").value = 'all' // reset completed selector to all
            this.filterCoursesCompleted('');
          } else {
            courseList = this.completedCourses;
          }
        } else {
          courseList = this.firstFilteredCourses;
        }
        if (val == 'all') {
          this.courses = courseList;
          this.categorySelector = false;
        } else { 
          this.courses = courseList.filter(function (e){ return e.courseCategory == val;})
          console.log("courses in filter: ", this.courses);
          this.categorySelector = true;
          this.categorySelected = val;  // remember the selected category
        }
        // remember the category courses set
        console.log("courses: ", this.courses);
        this.categoryCourses = this.courses;
        this.filterCoursesCompleted('');

      },
      
      filterCoursesCompleted(evt) {
        console.log(" courseCategory selector: ", this.categorySelector);
        if (this.categorySelector) {  // if the was a category seleted
          var newCourses = this.categoryCourses;
        } else {  // if no course category selector, remember those courses
          newCourses = this.firstFilteredCourses // select all courses
          console.log(" new courses: ", newCourses);
        }
        // test if the completed selector is present
        console.log("evt: ", evt);
        
        if (evt == '') {  // if this was a change completed call
          var val = this.completedSelector;  // set the val to what was stored
        } else {  // if new completed selected
           val = evt.target.value;
        }
        if (val == 'all' && this.completedSelector == 'all') { // in all completed courses cases
            this.courses = newCourses; // display all the courses
        } else if (val == 'all' && this.completedSelector != 'all') {  // if all was selected and was a selector before
          this.courses = newCourses;  // display all courses of a category
        } else if ( this.completedSelector != 'all' ) { // if there was a previous completed selector, filter on it
            this.courses = newCourses.filter(function (e){ return e.completed == val;})
        } else {
          this.courses = newCourses.filter(function (e){ return e.completed == val;})
        }
        this.completedSelector = val;  // store the current selector 
        this.completedCourses = this.courses;  // remember the completed courses set
      },
      
      
    },
    
    
    created() {
      this.loadAllCourses();
    },
    
    
    // get the courses from state store
    computed: {
      // filtered courses to display 
      // filter all UDEMY courses
      filteredCourses() {  
        const courses = this.$store.getters['courses/getFormal'];
        const onlineCourses = this.$store.getters['courses/getOnline'];
        if (this.online) {
          return onlineCourses;
        } else {
        return courses;
        }
      },
      
      hasCourses() {
        return (
          !this.isLoading && this.$store.getters['courses/hasCourses']
          );
        },
    },
  };
  </script>
  
  <style lang="scss" scoped>
    @import '@/assets/config/_variables.scss';
  
      .table-content tr {
          background-color:  whitesmoke;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
          padding: 1rem;
          margin: 0.5rem auto;
          max-width: 100rem;
      }

      .table-header {
          background-color:  $bd-blue;
          align-items:stretch;
          vertical-align: top;
      }
      .table-header tr {
          background-color:  $bd-blue;
          align-items:stretch;
          vertical-align: top;
      }

      .table thead th {
        background-color:  $bd-blue;
        align-items:stretch;
        vertical-align: top;
      }

      .table-data {
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        margin: 0.5rem auto;
        max-width: 100rem;
      }
  
  </style>