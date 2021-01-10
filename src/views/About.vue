<template>
  <div class="text-primary about_bg">
    <app-header/>

    <div class="col-5 col-sm-1 col-md-1 pt-5 d-none d-lg-block" style="position: absolute;padding: 0;margin: 0;width: auto">
        <div class="line-id"></div>
            <label class="text-light border-danger shadow-lg swing animated" style="font-size: 400%;;margin-left: 10%; font-family: Roboto, sans-serif;position: fixed;top: 50%;">
                ABOUT US
            </label>
        </div>
    <div class="col-sm-8 col-md-7 col-lg-6 col-xl-5 offset-sm-4 offset-md-5 offset-lg-6 offset-xl-7 text-light d-inline-flex d-lg-flex flex-row flex-shrink-1 align-items-center flex-wrap align-items-xl-start"
        style="height:auto;background-color: rgba(20,19,19,0.97);width: 100vw;padding: 33px; margin-top:50px;background-size: cover;">
        
        <div style="width: 100%;min-width: 100%;max-width: 100%;height: auto;" class="pt-5">
             <div class="row" style="width: 100%;">
                <div class="col">
            <h2 class="mb-3 text-center d-lg-none">ABOUT US</h2>
                </div>
             </div>
            <div class="row" style="width: 100%;">
              
                    <label class="col-form-label w-100 text-center bg-dark shadow d-lg-flex justify-content-lg-center  bounce animated">ABOUT US<br></label>
                  
            </div>
            <br/><br/>
            <div class="row" style="width: 100%;">
                <div class="col">
                    <div>
                        <p>At Preglosam – Oly-Florish limited, we are passionate about evolving human capital development architecture that will aid students to identify their areas of strength as well as horning their skills to bring out the best in them. Our online Eduplus system application is a one stop software that that will help our users in:</p>
                        <ul
                            style="font-size: 15px;">
                            <li>Career assessment<br></li>
                            <li>Career guardians and counselling<br></li>
                            <li>Educational support and management<br></li>
                            <li>Supply of educational materials<br></li>
                            <li>Supply of stationeries<br></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 100%;min-width: 100%;max-width: 100%;height: auto;">
            <div class="row" style="width: 100%;">
                <div class="col"><p class="col-form-label text-center bg-dark shadow d-lg-flex justify-content-lg-center align-items-lg-center bounce animated" style="width: 100%;">VISION STATEMENT</p></div>
            </div>
            <div class="row" style="width: 100%;">
                <div class="col">
                    <p style="margin-top: 5%;font-size: 15px;">To be one of the best students career guardian and academic institutions developer in Nigeria. <br></p>
                </div>
            </div>
        </div>
        <div style="width: 100%;min-width: 100%;max-width: 100%;height: auto;">
            <div class="row" style="width: 100%;">
                <div class="col"><p class="col-form-label text-center bg-dark shadow d-lg-flex justify-content-lg-center align-items-lg-center bounce animated" style="width: 100%;">MISSION STATEMENT</p></div>
            </div>
            <div class="row" style="width: 100%;">
                <div class="col">
                    <p style="margin-top: 5%;font-size: 15px;">To assist students in choosing field of studies through career software and guidance of qualified/experienced professional. Also to enhance educational institutions through provision of new age educational tools and equipment.<br><br></p>
                </div>
            </div>
        </div>
    </div>
    <!--<script src="assets/js/jquery.min.js"></script>-->
    <!--<script src="assets/bootstrap/js/bootstrap.min.js"></script>-->






    <app-footer/>


  </div>
</template>

<script>
export default {

}
</script>

<style  scoped>


.line-id {
  border-bottom: 4px solid rgb(24,105,180);
  width: 10%;
  top: 50%;
  position: fixed;
  margin-left: 10%;
}

.about_bg{
background-repeat: no-repeat;
background-position: left;
background-attachment:fixed;
background-size: cover;
background-image: url('~@/assets/images/about.jpg');
}

</style>