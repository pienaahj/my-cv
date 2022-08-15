<template>
  <div class="d-flex" >
    <div class="p-2 w-25">
        <base-card>
            <base-greeting></base-greeting>
        </base-card>
    </div>
    <div class="p-2 flex-grow-1">
       <home-page></home-page>
        <the-table>
            <table-selector></table-selector>
            
        </the-table>
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
