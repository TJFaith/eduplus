<template>
  <v-app>
    <app-header/>

    <div id="slider1-5" class="carousel slide index-carousel" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#slider1-5" data-slide-to="0" class="active"></li>
          <li data-target="#slider1-5" data-slide-to="1"></li>
          <li data-target="#slider1-5" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          
          <div class="carousel-item active">
              <div class="overlayBackground"></div>
            <img class="w-100 slide_Img" src="@/assets/images/bg1.jpg" alt="First slide">
            <div class="carousel-caption caption-text">
              <h2 class="" data-animation="animated bounceInUp">Join over 75 million local experts</h2> 
              <p class="">in various profession</p>
            </div>
          </div>

          <div class="carousel-item">
              <div class="overlayBackground"></div>
            <img class="w-100 slide_Img" src="@/assets/images/bg2.jpg" alt="Second slide">
            <div class="carousel-caption caption-text">
              <h2>GET WHAT YOU WANT</h2>
            </div>
          </div>
          <div class="carousel-item">
              <div class="overlayBackground"></div>
            <img class="w-100 slide_Img" src="@/assets/images/bg3.jpg" alt="Third slide">
            <div class="carousel-caption caption-text">
              <h2>BE PART OF THE BEST LEGACY</h2>
              <p>Be focus and make good use of the resources around you to build your educational career </p>
            </div>
          </div>
        </div>

        <a class="carousel-control-prev" href="#slider1-5" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#slider1-5" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
       <section class="first-row">
         
              <h2><b>Welcome to Eduplus Portal</b></h2>
            <hr style="background-color:#fff; width:5em;">
                
              <p style="font-size:22px">When choosing your career path, it's important that you have the mindset of becoming the best at what you do. The only way you will be able to create leverage. Eduplus system will assess your ability and guide you to your right career in life...</p>
         
        </section>
<br/><br/>
      <section>
          <div class="container">
              <div class="row" style="text-align:justify">
                
                <!-- <div class="col-md-4">
                         <h4 style="text-align:center">PARENTS EXPECTATION</h4> 
                         <hr style="background-color:#fff; width:5em;">

                         - Parents often have very high academic and career expectations for their children, which some children cannot live up to. Unfortunately, in some societies, concern about disappointing one's parents is a tragedy the student cannot deal with, so he kills himself.
                </div> -->

                <div class="col-md-8">
                          <h4 style="text-align:center">PARENTS’ EXPECTATION 	VS	 CHILDREN’S INNER STRENGHT</h4>
                          <hr style="background-color:#fff; width:5em;">
                             <v-card
   flat
    class="mx-auto"
    max-width="90%"
  >
  

    <v-img
      src="@/assets/images/expectation.png"
    ></v-img>

    <!-- <v-card-title>EDUPLUS SYSTEM INTERVENTION</v-card-title> -->

    <v-card-text class="px-0 ">
  
      

      <div class="text-justify">
       In most societies, particularly the 3rd world countries, at the time of choosing 		the career path(s), the children are vulnerable and the parents/guardians lord career paths on them. Oblivious of the fact that they played a minor role in defining their tomorrow, the parents still place high hope and expectations on these wards/children in the “forced” career paths. Researches had shown that the trepidation of not matching up with the parental expectations by some children had birthed tragic cases. <br><br>
It is pertinent to know that  the polemic between the children’s inner strength and the parents’ career imposition most often have negative effect on the human capital development of the concerned children.
      </div>
    </v-card-text>

  </v-card>
                      
                </div>

                <div class="col-md-4">
                    <h3 class="text-center">EDUPLUS SYSTEM INTERVENTION</h3>

                      <div class="col-md-3 text-center">
                  <img class="img-responsive" src="@/assets/images/int.jpg" alt="">
                  </div>
                <div class="col-md-9">
                  <div class="text-justify">
                    <p class="ml-5">
        In a bid to help the parents/guardians bring out the best in the career development of their children, as well as propelling the children’s inner strength to actualize their dreams, EDUPLUS SYSTEM intervention is required. Eduplus system is an online educative software that not only guide the young minds, but also set some basic tools for them to effectively determine their areas of core competence.
     </p>
      </div>
                </div>
                </div>
     
              </div>
          </div>
      </section>
      <br/><br/>
        <section style="background:black; color:#fff;margin-bottom:-2px;padding:2%; text-align:center">
            <h2><b>EDUPLUS SYSTEM FOCUS</b></h2>
        </section>
          <section class="second-row">
              <hr style="background-color:#fff; width:5em; margin-top:-40px">
              <br/>
            <div class="row">
           <div class="col-md-4">
             <i class="fa fa-users"></i><br/><br/>
             <h5>CAREER COMMUNITY</h5>
             <p>Get started with your educational career by joining a community from a wide variety of community list on our system, by so doing you can meet up with your colleague  and share educational materials to help build and enhance your educational career. <br/>
              You can as well create a community for your school or ward, just to bring your pair sets together and for educational purposes</p>
           </div>
           <div class="col-md-4">
              <i class="fas fa-book-reader"></i><br/><br/>
             <h5>EXAMINATION ASSESSMENT</h5>
             <p>You can practice entrance examination on our platform, so as to test your ability and knowledge on various subjects, also this helps to determine which class or department you should belong to in your academic pursuit. <br/>
              You can also take live entrance exams on our platform.
            </p>
           </div>
           <div class="col-md-4">
              <i class="fa fa-book"></i><br><br>
             <h5>EDUCATIONAL MATERIALS</h5>
             <p>There are loads of books, videos, write-up on your career path on our system feel free to go through them, you can also download and request for educational materials, in order to improve on your educational field of study</p>
           </div>
            </div>
          </section>

          

          <!-- <section>
            <div class="container-fluid p-5">
            <div class="row">
                <div class="col-md-3 text-center">
                  <img class="img-responsive" src="@/assets/images/int.jpg" alt="">
                  </div>
                <div class="col-md-9">
                  <div class="text-justify">
                    <h3 class="text-center">EDUPLUS SYSTEM INTERVENTION</h3>
                    <p class="ml-5">
        In a bid to help the parents/guardians bring out the best in the career development of their children, as well as propelling the children’s inner strength to actualize their dreams, EDUPLUS SYSTEM intervention is required. Eduplus system is an online educative software that not only guide the young minds, but also set some basic tools for them to effectively determine their areas of core competence.
     </p>
      </div>
                </div>
           
           </div>
            </div>
          </section> -->
    <app-footer/>

  </v-app>
</template>

<script>


export default {
 data(){
   return{}
 }
}
</script>

<style scoped>
  .expectation{
    /* background:red; */
    background-image: linear-gradient(to right, rgb(0, 0, 0) 0%,rgba(0, 0, 0, 0.068) 100%), url('~@/assets/images/expectation.png');
    /* background: linear-gradient(bottom, red, green), url('~@/assets/images/expectation.png'); */
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    height:100vh;
    width:100%;
  }
  .expectation h5{
    color:#fff;
    position: relative;
    margin:0px 10%; 
    top:30vh;
    width:50%;
    font-size: 4vw;
    font-family: sans-serif;

  }
</style>