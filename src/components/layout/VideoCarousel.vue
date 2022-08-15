<template>
     <MDBCarousel
      v-model="carousel6"
    :items="items6"
    :indicators="false"
    fade
    interval=8000
  />
  

</template>

<script>


  import { ref } from "vue";
  import { MDBCarousel } from "mdb-vue-ui-kit";
  export default {
    components: {
      MDBCarousel
    },
    setup() {
      const items6 = [
        {
          video: require('../../assets/images/mixkit-small-boat-in-a-great-heavenly-place-4997.mp4'),
          alt: "...",
            label: "First slide label",
          caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
          video: require('../../assets/images/Beach - 3998.mp4'),
          alt: "...",
          label: "Second slide label",
          caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          video: require('../../assets/images/Nature boat see- 111309.mp4'),
          alt: "...",
          label: "Third slide label",
          caption:
            "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        }
      ];
      const carousel6 = ref(0);
      return {
        items6,
        carousel6
      };
    }
  };
    // Autoplay MDB Carousel
    // $('.carousel').carousel({
    //      interval: 6000,
    // });
    
</script>

<style scoped>
    /* Carousel styling */
    .carousel {
    height: 100vh;
    width: 100%;
}

    #introCarousel,
    .carousel-inner,
    .carousel-item,
    .carousel-item.active {
      height: 100vh;
    }

    .carousel-item:nth-child(1) {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }

    .carousel-item:nth-child(2) {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }

    .carousel-item:nth-child(3) {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }

    /* Height for devices larger than 576px */
    @media (min-width: 992px) {
      #introCarousel {
        margin-top: -58.59px;
      }
    }
</style>
