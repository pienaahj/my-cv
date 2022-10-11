<template>
  <div class="d-flex layout-media">
    <!-- lefthand column -->
    <div class="layout-column-left layout-media">
        <base-card>
            <base-greeting></base-greeting>
        </base-card>
    </div>
    <!-- righthand column -->
    <div class="layout-column-right card-media">
        <router-view></router-view>
    </div>
</div>
</template>

<script> 
    import BaseCard from '../ui/BaseCard.vue';

    export default {
        components: {
            BaseCard,
        },
    }
</script>

  
