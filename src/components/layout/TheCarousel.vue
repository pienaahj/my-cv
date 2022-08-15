<template>
  <MDBCarousel
    v-model="carousel5"
    :items="items5"
    interval=8000
    fade
    innerClass="rounded-5 shadow-4-strong"
  />
</template>

<script>
  import { MDBCarousel } from "mdb-vue-ui-kit";   
  import { ref } from "vue";
  export default {
    components: {
      MDBCarousel
    },


    setup() {
      const items5 = [
        {
          src: require('../../assets/images/IMG_1360.webp'),
          alt: "...",
          label: "Technical management",
          caption: "Telecommunications ."
        },
        {
          src: require('../../assets/images/IMG_0029.webp'),
          alt: "...",
          label: "GIS management",
          caption: "ESRI suite of products"
        },
        {
          src: require('../../assets/images/IMG_9516.webp'),
          alt: "...",
          label: "Planning",
          caption:
            "Telecommuncations infrastructure - wired and wireless."
        },
        {
          src: require('../../assets/images/strand-golf-course.webp'),
          alt: "...",
          label: "General management",
          caption:
            "Staff, financial and safety management."
        },
        {
          src: require('../../assets/images/helderview-landscape.webp'),
          alt: "...",
          label: "Development",
          caption:
            "Golang enthusiast."
        },
      ];
      const carousel5 = ref(0);
      return {
        items5,
        carousel5
      };
    }
  }
  // $('.carousel').carousel({ interval: 5000 })
</script>

<style scoped>
  /* Carousel styling */
  #myCarousel,
  .carousel-inner,
  .carousel-item,
  /* .carousel-item.active {
    height: 100vh;
  } */

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
    #myCarousel {
      margin-top: -58.59px;
    }
  }


</style>
