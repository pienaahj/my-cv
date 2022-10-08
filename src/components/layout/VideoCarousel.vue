<template>
  <MDBCarousel
    v-model="carousel6"
    :items="items6"
    :indicators="false"
    fade
    :interval="8000"
    innerClass="rounded-6 carousel-media"
    :controls="false"
    itemsClass="d-block w-100"
    tag:="div"
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
          caption: "Some wisdom I have to figure out still.",

        },
        {
          video: require('../../assets/images/Beach - 3998.mp4'),
          alt: "...",
          label: "Second slide label",
          caption: "More wise stuff.",
 
        },
        {
          video: require('../../assets/images/Nature boat see- 111309.mp4'),
          alt: "...",
          label: "Third slide label",
          caption:
            "Another wisdom - todo."
        }
      ];
      const carousel6 = ref(0);
      return {
        items6,
        carousel6
      };
    }
  };

</script>

<style scoped>
    /* Carousel styling */
    .carousel {
    height: auto; /*50vh*/
    width: 100vh; /* width: 100%; */
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    margin:auto;

}

    #introCarousel,
    .carousel-inner,
    .carousel-item,
    .carousel-item.active {
      height: 50vh; /*100vh */
      display: flex;
      justify-content: center;
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

    .carousel-item-size video{
      height: 55h; /*100vh */
      object-fit: cover;
      object-position: centre;
      overflow: hidden;
    }
    /* Height for devices larger than 576px */
    @media (min-width: 992px) {
      #introCarousel {
        margin-top: -58.59px;
      }
    }
    @media only screen and (min-width: 375px) and (max-width: 1024px) {
    .carousel-media {
      display: flex;
      flex-direction:column;
      width: 60% !important;
      max-width: 60%;
      /* flex-wrap: wrap; */
      column-fill: auto;
    }
    
  }
</style>
