<template>
  <!-- if still loading the data spin -->
  <p v-if="isLoading">
    <base-spinner></base-spinner>
  </p>
  <ul class="card-content" v-else-if="!isLoading && hasCoreComps">
    <table-item
      v-for="competency in loadCoreCompencies"
      :key="competency.id"
      :itemEntry="competency.coreComp"
    >
    </table-item>
  </ul>

</template>

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
    };
  },

  // Fetch the skills from Firebase
  methods: {
    async loadAllCompetencies() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('competencies/loadCompetencies');
      } catch (error) {
        this.error = error.message || "something went wrong!";
      }
      this.isLoading = false;
    },
    async loadCompetencies() {
      await this.$store.dispatch('competencies/loaded');
    },
  },

  // Load the skill at creation
  created() {
    this.loadAllCompetencies();
  },

  // get the skills from state store
  computed: {
    loadCoreCompencies() {
      return this.$store.getters['competencies/getCompetencies'];
    },
    hasCoreComps() {
      return (
        !this.isLoading && this.$store.getters['competencies/hasCompetencies']
      );
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/config/_variables.scss';

    .card-content{
        background-color: $silver-pink;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        margin: 0.5rem auto;
        max-width: 23rem;
    }

</style>