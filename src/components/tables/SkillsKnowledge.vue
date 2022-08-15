<template>
    <!-- if still loading the data spin -->
    <p v-if="isLoading"> 
        <base-spinner></base-spinner>
    </p>
  <ul class="card-content" v-else-if="!isLoading && hasSkills">
    <p>Items in skills list status: {{ displaySkills  }}</p>
    <skills-item
        v-for="skill in loadSkills"
        :key="skill.id"
        :skillEntry="skill.skill"
    >
    </skills-item>
    
 </ul>

 <button type="button" class="btn btn-light" data-mdb-ripple-color="dark" @click="Register">Register Skills</button>
</template>>

<script>
    import SkillsItem from '../SkillsItem.vue';
    export default {
        components: {
            SkillsItem,
        },
        data() {
            return {
                error: null,
                isLoading: false,
                displaySkills: "Initial...",
            }
        },
        

        // Fetch the skills from Firebase
        methods: {
            async loadAllSkills() {
                this.isLoading = true;
                try {
                await this.$store.dispatch['skills/loadSkills'];
                } catch (error) {
                    this.error = error.message || 'something went wrong!';
                }
                this.displaySkills = "loading skills from Firebase...";
                this.isLoading = false;   
            },
            async Register() {
                this.isLoading = true;
                this.displaySkills = "Registering skills in Firebase...";
                try {
                    await this.$store.dispatch['skills/firebaseLoad'];
                } catch (error) {
                    this.error = error.message || 'something went wrong!';
                }
                this.displaySkills = "Done - Registering skills in Firebase...";
                this.isLoading = false; 
            }

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
                return !this.isLoading && this.$store.getters['skills/getSkills'];
            },   
        },
        
    } 
</script>

<style scoped>
   .card-content {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 1rem auto;
  max-width: 40rem;
}
</style>