<template>
    <!-- if still loading the data spin -->
    <p v-if="isLoading"> 
        <base-spinner></base-spinner>
    </p>
  <ul class="card-content" v-else-if="!isLoading && hasResponsibilities">
    <table-item
        v-for="responsibilitiesItem in loadResponsibilities"
        :key="responsibilitiesItem.id"
        :itemEntry="responsibilitiesItem.responsibility"
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
        

        // Fetch the responsibilities from Firebase
        methods: {
            async loadAllResponsibilities() {
                this.isLoading = true;
                try {
                await this.$store.dispatch('responsibilities/loadResponsibilities');
                } catch (error) {
                    this.error = error.message || 'something went wrong!';
                }
                this.isLoading = false; 
            },
        },

        // Load the skill at creation 
        created() {
            this.loadAllResponsibilities();
        },

        // get the responsibilities from state store
        computed: {
            loadResponsibilities() {
                return this.$store.getters['responsibilities/getResponsibilities'];             
            },
            hasResponsibilities() {
                return !this.isLoading && this.$store.getters['responsibilities/hasResponsibilities'];
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