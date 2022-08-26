<template>
  <div class="d-flex" >
    <!-- lefthand column -->
    <div class="p-2 w-25">
        <base-card>
            <base-greeting></base-greeting>
        </base-card>
    </div>
    <!-- righthand column -->
    <div class="p-2 flex-grow-1">
        <base-card>
            <home-page></home-page>
            <base-card class="table-layout opacity-75">
                <the-table> 
                    <table-selector></table-selector>
                </the-table> 
            </base-card>
            
        </base-card>
               
    </div>
  </div>
</template>

<script>
    import TheTable from './TheTable.vue';
    import TableSelector from '../tables/TableSelector.vue';
    import BaseCard from '../ui/BaseCard.vue';
    import HomePage from '../../pages/HomePage.vue';
    

    export default {
        components: {
            BaseCard,
            HomePage,
            TheTable,
            TableSelector,
        },
    }
</script>



<style lang="scss" scoped>
  @import '@/assets/config/_variables.scss';

    .table-layout { 
        background-color: $bd-blue;
        // background-color: $dark-sky-blue;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        margin: 0.5rem auto;
        max-width: 100rem;
    }

</style>