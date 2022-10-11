<template>
   <MDBCard shadow="5" class="rounded-8 mx-1 my-4" >
    <MDBCardBody  bg="warning"  class="card-content text-start fs-5 " >
      <MDBCardTitle>Career summary</MDBCardTitle>
      <MDBCardText class="media-font-size">
        <p>My career focused on the design and management of telecommunications networks in various disciplines.  Experience varies from maintenance of electronic switches to design of rural communication networks in optic fiber and radio backbones, to radio and copper distribution networks. </p>  
        <p>Extensive hands-on experience and management of GIS systems, focused on the design of telecommunications networks across hardware and software.  Design of data sets and methods for storage of network records.</p> 
        <p>Wide-ranging experience of right-of-way practices, procurement and environmental impact studies for telecommunication networks and installations.</p> 
        <p>Management of contractors (planning and execution) within the telecommunications arena forms part of my skill sets and general management of personnel was added throughout my career.</p>  
        <p>I was responsible for the creation and maintenance of the Telkom Southern Region business continuity management plan for the Plan and Build group.</p>
        <p>Was section 19 appointee for Health and Safety management in the Plan and Build Complexes in George, East London and Port Elizabeth and was the chairperson for the George safety committee.</p>  
        <p>Computer skills have been a focus point of my career and staying abreast of technological advancement in this field is a prime driver and focus area for my personal development.</p>  
        <p>I have developed a keen interest in programming and have done various development courses and associated projects in web design, Python and Golang programming and database technologies.</p>  
        <p>I have broadened my knowledge to full stack web development, Linux administration and security.</p>
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
</template>>

<script>
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText} from "mdb-vue-ui-kit";
  export default {
    components: {
      MDBCard,
      MDBCardBody,
      MDBCardTitle,
      MDBCardText,
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/config/_variables.scss';
    .card-content{
        border-radius: 12px;
        margin: 0.5rem auto;
        max-width: 40rem;
    }
    @media only screen and (min-width: 375px) and (max-width: 1024px) {
        .media-font-size {
          font-size: x-small !important;
        }
        .card-content{
        border-radius: 12px;
        margin: 0.5rem auto;
        max-width: 45rem;
        }
    }
</style>