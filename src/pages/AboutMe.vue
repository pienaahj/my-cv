<template>
    <router-view>
         <video-carousel></video-carousel>
    </router-view>
   
</template>

<script>
  import VideoCarousel from '../components/layout/VideoCarousel.vue';

  export default {
    components: {
      VideoCarousel,
    }
  }
</script>