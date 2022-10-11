<template>
    <MDBCard bg="dark" text="white" class="card-content card-media-home">
      <MDBCardImg
        :src="require ('../assets/images/sunset1.webp')" 
        top
        alt="..."
      />
      <MDBCardBody>
        <MDBCardTitle tag="h4">Some guidance I found valuable</MDBCardTitle>
        <MDBCardText>
          <p><img 
            :src="require ('../assets/symbols/page-divider-design-png-6.png')" 
            class="img-fluid"  
            alt=""
          ></p>
          
          <figure class=" text-left">
          <blockquote class="blockquote d-flex block-content media-font-size">
            <ul>
              <li>Beautiful is better than ugly.</li> 
              <li>Explicit is better than implicit.</li> 
              <li>Simple is better than complex.</li>
              <li>Complex is better than complicated.</li>
              <li>Flat is better than nested.</li>
              <li>Sparse is better than dense.</li>
              <li>Readability counts.</li>
              <li>Special cases aren't special enough to break the rules.</li>
              <li>Although practicality beats purity,
                  errors should never pass silently, unless explicitly silenced.</li>
              <li>In the face of ambiguity, refuse the temptation to guess.</li>
              <li>There should be one-- and preferably only one --obvious way to do it.
              Although that way may not be obvious at first unless you're Dutch.</li>
              <li>Now is better than never.
              Although never is often better than *right* now.</li>
              <li>If the implementation is hard to explain, it's a bad idea.</li>
              <li>If the implementation is easy to explain, it may be a good idea.</li>
              <li>Namespaces are one honking great idea -- let's do more of those!</li>
            </ul>
            </blockquote>
              <figcaption class="blockquote-footer media-font-size">
                From <cite class="cite-color" title="Source Title">The zen of Python</cite>
              </figcaption>
            </figure>
        </MDBCardText>

        <MDBCardText>
          <p><img 
            :src="require ('../assets/symbols/page-divider-design-png-6.png')" 
            class="img-fluid"  
            alt=""
          ></p>
        
          <figure class=" text-left">
            <blockquote class="blockquote d-flex block-content media-font-size">
              <ul>
                <li>“Your work is going to fill a large part of your life,
                  and the only way to be truly satisfied is to do what you believe is great work. 
                  And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. 
                  Don’t settle. As with all matters of the heart, you’ll know when you find it.”</li> 
                <li>“Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. 
                  You are already naked. There is no reason not to follow your heart.”</li> 
                <li>“It's really hard to design products by focus groups. A lot of times, 
                  people don't know what they want until you show it to them.”</li>
                <li>“Quality is more important than quantity. One home run is much better than two doubles.”</li>
                <li>“Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.”</li>
                <li>“Sometimes when you innovate, you make mistakes. It is best to admit them quickly and get on with improving your other innovations.”</li>
                <li>“That’s been one of my mantras—focus and simplicity. Simple can be harder than complex; 
                  you have to work hard to get your thinking clean to make it simple.”</li>
                <li>“Technology is nothing. What’s important is that you have a faith in people, that they’re basically good and smart, 
                  and if you give them tools, they’ll do wonderful things with them.”</li>
                <li>“Innovation distinguishes between a leader and a follower.”</li>
                <li>“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma—which is living with the results of other people’s thinking. 
                  Don’t let the noise of others’ opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition.”</li>
              </ul>
            </blockquote>
              <figcaption class="blockquote-footer media-font-size">
                By <cite class="cite-color" title="Source Title">Steve Jobs</cite>
              </figcaption>
          </figure>

          <p><img 
            :src="require ('../assets/symbols/page-divider-design-png-6.png')" 
            class="img-fluid"  
            alt=""
          ></p>

          <figure class=" text-left">
            <blockquote class="blockquote d-flex block-content media-font-size">
              <ul>
                <li>“No company practising continuous delivery ever goes back!”</li> 
              </ul>
            </blockquote>
            <figcaption class="blockquote-footer media-font-size">
              From <cite class="cite-color" title="Source Title">Bryan Finster on Continuous Delivery Youtube</cite>
            </figcaption>
          </figure>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </template>

<script>
    import { MDBCard, MDBCardTitle, MDBCardText, MDBCardImg, MDBCardBody } from "mdb-vue-ui-kit";
    export default {
      components: {
        MDBCard,
        MDBCardTitle,
        MDBCardText,
        MDBCardImg,
        MDBCardBody,
      }
    };
  </script>

<style lang="scss" scoped>
    @import '@/assets/config/_variables.scss';
  .card-content {
    background-color: aliceblue !important;
    color: black !important;
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
    color: black !important;
    text-align: left !important;
  }
  .cite-color {
    color:gray !important;
  }
  .text-left {
    text-align: justify;
  }
  @media only screen and (min-width: 375px) and (max-width: 1024px) {
    .card-media-home {
      display: flex;
      flex-direction:column;
      width: 100%!important;
      column-fill: auto;
    }
    .block-content {
      display: flex;
      justify-content: center;
      justify-content: space-between;
      width: fit-content!important;
      color: black !important;
    }
  }
  </style>