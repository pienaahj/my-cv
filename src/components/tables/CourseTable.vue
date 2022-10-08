<template>
    <!-- if still loading the data spin -->
    <p v-if="isLoading"> 
        <base-spinner></base-spinner>
    </p>
  <ul class="card-content" v-else-if="!isLoading && hasCourses">
    <table-item
        v-for="courseItem in loadCourses"
        :key="courseItem.id"
        :itemEntry="courseItem.course"
        >
    </table-item>
 </ul>

</template>>

<script>
    import TableItem from "./TableItem.vue";
    export default {
        components: {
            TableItem,
        },
        data() {
            return {
                error: null,
                isLoading: false,
            }
        },
        

        // Fetch the courses from Firebase
        methods: {
            async loadAllCourses() {
                this.isLoading = true;
                try {
                await this.$store.dispatch('courses/loadCourses');
                } catch (error) {
                    this.error = error.message || 'something went wrong!';
                }
                this.isLoading = false; 
            },
        },

        // Load the courses at creation 
        created() {
            this.loadAllCourses();
        },

        // get the courses from state store
        computed: {
            loadCourses() {
                return this.$store.getters['courses/getCourses'];             
            },
            hasCourses() {
                return !this.isLoading && this.$store.getters['courses/hasCourses'];
            },   
        },
        
    } 
</script>

<style lang="scss" scoped>
  @import '@/assets/config/_variables.scss';

    .card-content{
        background-color: $silver-pink;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        margin: 0.5rem auto;
        max-width: 32rem;
    }

</style>