<template>
    <MDBCard bg="dark" text="white" class="card-content">
      <MDBCardImg
        :src="require ('../assets/images/sunset1.webp')" 
        alt="..."
        overlay
        fluid
      >
        <MDBCardTitle tag="h4">Some guidance I found valuable</MDBCardTitle>
        <MDBCardText>
          <p><img 
            :src="require ('../assets/symbols/page-divider-design-png-6.png')" 
            class="img-fluid"  
            alt=""
          ></p>
          
          <figure class="text-center">
            <blockquote class="blockquote d-flex block-content ">
                <div class="g-col-6 text-left">
                  <p>Beautiful is better than ugly.</p> 
                  <p>Explicit is better than implicit.</p> 
                  <p>Simple is better than complex.</p>
                  <p>Complex is better than complicated.</p>
                  <p>Flat is better than nested.</p>
                  <p>Sparse is better than dense.</p>
                  <p>Readability counts.</p>
                </div>
                <div class="g-col-6 text-left">
                  <p>Special cases aren't special enough to break the rules.</p>
                  <p>Although practicality beats purity,
                      errors should never pass silently, unless explicitly silenced.</p>
                  <p>In the face of ambiguity, refuse the temptation to guess.</p>
                  <p>There should be one-- and preferably only one --obvious way to do it.
                  Although that way may not be obvious at first unless you're Dutch.</p>
                  <p>Now is better than never.
                  Although never is often better than *right* now.</p>
                  <p>If the implementation is hard to explain, it's a bad idea.</p>
                  <p>If the implementation is easy to explain, it may be a good idea.</p>
                  <p>Namespaces are one honking great idea -- let's do more of those!</p>
                </div>
              </blockquote>
              <figcaption class="blockquote-footer">
                From <cite class="cite-color" title="Source Title">The zen of Python</cite>
              </figcaption>
            </figure>
          </MDBCardText>
        </MDBCardImg>
    </MDBCard>
  </template>

<script>
    import { MDBCard, MDBCardTitle, MDBCardText, MDBCardImg } from "mdb-vue-ui-kit";
    export default {
      components: {
        MDBCard,
        MDBCardTitle,
        MDBCardText,
        MDBCardImg,
      }
    };
  </script>

<style lang="scss" scoped>
    @import '@/assets/config/_variables.scss';
  .page-content {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 0.5rem auto;
    max-width: 90rem;
  }
  
  .card-content {
    background-color: aliceblue !important;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 0.5rem auto;
    max-width: 100rem;
  }

  .block-content {
    display: flex;
    justify-content: center;
    justify-content: space-between;
    gap:4rem;

  }
  .cite-color {
    color:lightgray !important;
  }

  .text-left {
    text-align: justify;
    margin-left: 3rem;
  }
  </style>