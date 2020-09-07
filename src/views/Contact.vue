<template>
  <div class="text-primary contact">
    <app-header/>

    <div class="col-5 col-sm-1 col-md-1 pt-5 d-none d-lg-block" style="position: absolute;margin: 0;width: auto">
        <div class="line-id"></div>
            <label class="text-primary border-danger  shadow-lg swing animated" style="font-size: 400%;;margin-left: 10%; font-family: Roboto, sans-serif;position: fixed;top: 50%;">
                CONTACT US
            </label>
        </div>
    <div class="col-sm-8 col-md-7 col-lg-6 col-xl-5 offset-sm-4 offset-md-5 offset-lg-6 offset-xl-7 text-light d-inline-flex d-lg-flex flex-row flex-shrink-1 align-items-center flex-wrap align-items-xl-start"
        style="height:auto;background-color: rgba(20,19,19,0.97);width: 100vw;padding: 33px; margin-top:50px;background-size: cover;">
        
        <div style="width: 100%;min-width: 100%;max-width: 100%;height: auto;" class="pt-5">
             <div class="row" style="width: 100%;">
                <div class="col">
            <h2 class="mb-3 text-center d-lg-none">CONTACT US</h2>
                </div>
             </div>
            <div class="row" style="width: 100%;">
                <div class="col">
                    <label class="col-form-label text-center bg-dark shadow d-lg-flex justify-content-lg-center align-items-lg-center bounce animated" style="width: 100%;">SEND US YOUR FEEDBACK<br></label>
                    </div>
            </div>
            <br/><br/>
            <div class="row" style="width: 100%;">
                <div class="col">
                    <div>
                        <form class="w-100" style="min-width:100%" @submit.prevent="submitFormData()">
     
                        <div class="d-flex">
                        <div class="col-md-12">
                                        <span>Full Name</span><br>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fa fa-user"></i></span>
                                            </div>
                                            <input v-model="formContact.fullName" class="form-control" type="text" name="title" id="1" placeholder="Full Name" required>
                                        </div>

                                        <span>Email</span><br>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                                            </div>
                                            <input v-model="formContact.email" class="form-control" type="email" name="title" id="3" placeholder="Email Address" required>
                                        </div>

                                        <span>Subject</span><br>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fa fa-pen"></i></span>
                                            </div>
                                            <input v-model="formContact.subject" class="form-control" type="text" name="title" id="4" placeholder="Subject" required>
                                        </div>
                                    
                                        <span></span>
                                    <div class="input-group mb-3">
                                    
                                        <textarea v-model="formContact.message" class="form-control" name="description" id="10" cols="5" rows="3" placeholder="Type your message here" required></textarea>
                                        
                                        </div>
                                       
                            <button type="submit" class="btn btn-light bg-light btn-md px-3 text-primary" :disabled="showLoading" >
                               
                                <div v-if="showLoading" >
                                
                                    Sending   
                                    <img style="width:13%" src="@/assets/images/loader.gif" alt="">
                                    <!-- <i v-show="showLoading"  style="font-size:100%"  class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> -->

                                <span class="sr-only">Loading...</span>
                                </div>
                                <div v-else>
                                    Submit
                                </div>
                            </button>

                           


                            </div>

                        
                            </div>
                        
    </form>
                    </div>
                </div>
            </div>
        </div>
      
    </div>





    <app-footer/>

  </div>
</template>

<script>

export default {
    data(){
        return{
            showLoading:false,
            formContact:{
            }
        }
    },
    methods:{
       
          submitFormData(){
              this.showLoading = true;
            
            this.axios.post(this.$hostname +"general_api.php?action=sendMail", this.formContact).then((response)=>{
             
                let re= response.data;
                if(re.returnMsg){
                alert(re.returnMsg);

                }
                

            this.showLoading = false
            this.formContact={}


            }).catch(error=>{
                alert(error);
            this.showLoading = false

            });
        }
    }
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

.contact{
background-repeat: no-repeat;
background-position: left;
background-attachment:fixed;
background-size: cover;
background-image: url('~@/assets/images/giphy-12.gif');
min-height: 100vh;
}

</style>