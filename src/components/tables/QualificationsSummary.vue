<template>
   <MDBCard shadow="5" class="rounded-8 mx-1 my-4" >
    <MDBCardBody  bg="warning"  class="card-content text-start media-font-size fs-5 " >
      <MDBCardTitle>School</MDBCardTitle>
      <MDBCardText>
        <p>Year obtained: 1980</p>
        <p>Institution: Strand High School</p>
        <p>Qualification: Senior Certificate, Academical, with mathematics & science and distinction.</p>  
      </MDBCardText>
      <MDBCardTitle>Tertiary</MDBCardTitle>
      <MDBCardText>
        <p>Year obtained: 1985</p>
        <p>Institution: University of Stellenbosch</p>
        <p>Qualification: Bachelor of Engineering: Electrical Engineering (Light Current, B.Ing 4 year)</p> 
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
        background-color: white-smoke;
        border-radius: 12px;
        margin: 0.5rem auto;
        max-width: 40rem;
    }
</style>