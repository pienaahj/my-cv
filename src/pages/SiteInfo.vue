<template>
    <div class="page-content me-2 card-media-home"> 
        <base-card :fromHome="true" class="card-content">
            <h2>Site Information</h2>
        </base-card>
        <base-card :fromHome="true" >
            <MDBCard text="center" class="card-content-inner">
                <MDBCardBody>
                    <MDBCardText>
                        <p>This site was created as in VueJS (pure and with some help from MDBVue) partly an exercise in single page apps,
                            to serve as a personal demonstrative example of an available project on the internet 
                                and as a more reactive way to visualise and extend my resume.
                        </p> 
                        <p>The app ulitizes vuex, vue-router and uses Firebase Realtime Database as a store, from where the data is loaded at runtime.</p> 
                        <p>The site is hosted on Firebase.</p>
                        <p>The data was populated on Firebase by a Golang app.</p>
                        <p>The project's code is available on my Github page with the link below</p>
                        <p>
                            <MDBBtn
                                color="link" size="sm" rounded class="fw-bold" :ripple="{ color: 'dark' }">
                                                Github Link
                            </MDBBtn>
                                <a class="stretched-link" href="https://www.github.com/pienaahj"></a> 
                        </p>
                        <p>The carousel photos is from the part of the world I stay, Somerset West area - beautiful isn't it!</p>
                        <p>The video carousel media was picked, becuase I love the sea and I find it inspiring and calming. One can easily get lost staring at it.</p>
                    </MDBCardText>
              </MDBCardBody>
            </MDBCard>
        </base-card>
    </div>
</template>

<script>
    import { MDBCard, MDBCardText, MDBCardBody, MDBBtn } from "mdb-vue-ui-kit";
    import BaseCard from '../components/ui/BaseCard.vue';
    export default {
      components: {
        MDBCard,
        MDBCardText,
        MDBCardBody,
        MDBBtn,
        BaseCard
      },
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/config/_variables.scss';
    .custom-class {
        display: none;
    }
    .page-content {
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        margin: 0.5rem auto;
        max-width: 90rem;
    } 
    .card-content {
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 0.1rem;
        margin: 0.5rem auto;
        max-width: 100rem;
    }
    .card-content-technical{
        background-color: $silver-pink;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        margin: 0.5rem auto;
        max-width: 100rem;
    }
    .table-layout { 
        background-color: $bd-blue;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        margin: 0.5rem auto;
        max-width: 100rem;
    }
    .card-content-inner {
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: unset;
        margin: 0.5rem ;
        max-width: 100rem;
      }
    @media only screen and (min-width: 375px) and (max-width: 1024px) {
        .card-media-home {
            display: flex;
            flex-direction:column;
            width: 100%!important;
            column-fill: auto;
        }
        .table-content tr {
            background-color:  whitesmoke;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
            padding: 1rem;
            margin: 0.5rem auto;
            max-width: 100rem;
        }
        .table-header {
            background-color:  $bd-blue;
            align-items:stretch;
            vertical-align: top;
        }
        .table-header tr {
            background-color:  $bd-blue;
            align-items:stretch;
            vertical-align: top;
        }

        .table thead th {
            background-color:  $bd-blue;
            align-items:stretch;
            vertical-align: top;
        }
        .table-data {
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
            padding: 1rem;
            margin: 0.5rem auto;
            max-width: 100rem;
        }
        .card-content-technical{
            background-color: $silver-pink;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
            padding: 8px !important;
            margin: auto !important;
            width: 100%!important;
            max-width: 100rem;
        }
        .wrap-media {
            flex-wrap: wrap !important;

        }
        .card-content-inner {
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
            padding: unset;
            margin: 0.5rem ;
            max-width: 100rem;
        }
    }  
  </style>