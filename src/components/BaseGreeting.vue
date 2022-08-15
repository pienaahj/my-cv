<template>
    <MDBCard>
          <a v-mdb-ripple="{ color: 'dark' }">
            <MDBCardImg 
              :src="require('../assets/images/hendrik-grey-background.webp')" 
              top 
              alt="..." 
            />
          </a>
          <MDBCardBody>
            <MDBCardTitle>  
              <h1 class="text-start">Hendrik Pienaar</h1>
            </MDBCardTitle>
            <MDBCardTitle class="text-start">
              <h4>
                Technical manager  
                <small class="text-muted"> & developer</small>
              </h4> 
            </MDBCardTitle>
            <MDBCardTitle>
               <img 
               :src="require ('../assets/symbols/kindpng_3790542 down.png')" 
               class="img-fluid" 
               alt="..."
               />
               <p></p>
              <h5 class="text-center fst-italic">Professional Profile</h5>
            </MDBCardTitle>
            <MDBCardText 
              collapseId="collapseOne"
              class="text-wrap text-start" 
            >
                  <p>Graduated electronic engineer specialized in telecommunications planning of access network technologies and Geographical Information Systems.</p>
                  <p>Twenty five years of technical management experience and coordination of large planning and GIS projects, aided by more than a fair share of innovative ability, a can-do attitude and seasoned by respect for others, produces the package that is largely – me.</p>
                  <p>Personal motivation is derived from the belief that there are few problems without solutions and a deep routed personal passion for solving these.</p>   
                  <p></p>
                  <p>I like a challenge.</p>  
                  <p>I like to enable others to achieve.</p>
                  <p>I am ever curious.</p>
            </MDBCardText>
            <MDBCardTitle>
              <img 
               :src="require ('../assets/symbols/kindpng_3790542.png')" 
               class="img-fluid" 
               alt="..."
               />
            </MDBCardTitle>
          </MDBCardBody>
     </MDBCard>
</template>

<script>
  import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, mdbRipple } from "mdb-vue-ui-kit";
  export default {
    components: {
      MDBCard,
      MDBCardBody,
      MDBCardTitle,
      MDBCardText,
      MDBCardImg,
    },
    directives: {
      mdbRipple
    },
  };
</script>

<style scoped>
.header {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 15rem;
}
</style>

