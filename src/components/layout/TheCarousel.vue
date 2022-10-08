<template>
  <MDBCarousel
    v-model="carousel5"
    :items="items5"
    :interval="8000"
    fade
    innerClass="rounded-5 shadow-4-strong carousel-media"
    itemsClass="d-block m-8 p-16 w-100 "
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
</script>

<style lang=scss >
    .carousel {
    height: auto; /*50vh*/
    width: 92vh; /* width: 100%; */
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    margin:auto; /* //need to fix */

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


