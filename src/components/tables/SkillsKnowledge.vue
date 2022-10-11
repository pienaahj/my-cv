<template>
    <!-- if still loading the data spin -->
    <p v-if="isLoading"> 
        <base-spinner></base-spinner>
    </p>
  <ul class="card-content" v-else-if="!isLoading && hasSkills">
    <table-item
        v-for="skillItem in loadSkills"
        :key="skillItem.id"
        :itemEntry="skillItem.skill"
        class="media-font-size"
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
        // Fetch the skills from Firebase
        methods: {
            async loadAllSkills() {
                this.isLoading = true;
                try {
                await this.$store.dispatch('skills/loadSkills');
                } catch (error) {
                    this.error = error.message || 'something went wrong!';
                }
                this.isLoading = false; 
            },
        },
        // Load the skill at creation 
        created() {
            this.loadAllSkills();
        },
        // get the skills from state store
        computed: {
            loadSkills() {
                return this.$store.getters['skills/getSkills'];             
            },
            hasSkills() {
                return !this.isLoading && this.$store.getters['skills/hasSkills'];
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