<template>
    <div>
    <app-header/>
    <div class="container pushPageDown" style="mini-height:100vh">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card mt-5">
                    <div class="card-header"><i class="fa fa-key"></i> Forgotten password</div> 
                    <div class="card-body">
                        <form @submit.prevent="sendOTP()" v-if="emailInput">

                            <div class="from-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right"></label> 

                                <div class="col-md-6">
                                <!-- <label for="response" v-html="login_response"></label> -->
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="email" class="col-md-4 mt-3 col-form-label text-md-right">E-Mail Address</label> 
                                <div class="col-md-6">
                                    <input v-model="userEmail" id="email" type="email" name="email"  required="required"  class="form-control">
                                    
                                    </div>
                                </div> 
                                
                                
                               
                                
                                <div class="form-group row mb-0">
                                    <div class="col-md-8 offset-md-4">
                                        <button type="submit" :disabled="showLoading" class="btn btn-primary">
                                        <span v-if="!showLoading">
                                        Send Code
                                        </span>
                                         <v-progress-circular color="white"  :size="20" v-if="showLoading"  indeterminate></v-progress-circular>
                                    </button> 
                                    <a href="/login" class="btn bg-light text-muted ml-3">Login</a> 
                                   
                                  
                                    <!-- <div><a href="" class="btn bg-danger text-white" style="width: 100%;">
                                        <i class="fab fa-google"></i> Login with Google</a>
                                    </div> -->
                                </div>
                            </div>
                        </form>

                        <!-- Confirm OTP -->
                        <form @submit.prevent="confirmOTP()" v-if="otpInput">

                            <div class="from-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right"></label> 

                            </div>
                            <div class="form-group row">
                                <label for="text" class="col-md-4 mt-3 col-form-label text-md-right">Input Otp</label> 
                                <div class="col-md-6">
                                    <input  v-model="otp" id="otp" type="text" name="otp"  required="required" maxlength="6" class="form-control">
                                    
                                    </div>
                                </div> 
                                
                                
                               
                                
                                <div class="form-group row mb-0">
                                    <div class="col-md-8 offset-md-4">
                                        <button type="submit" :disabled="showLoading" class="btn btn-primary">
                                        <span v-if="!showLoading">
                                        Verify
                                        </span>
                                         <v-progress-circular color="white"  :size="20" v-if="showLoading"  indeterminate></v-progress-circular>
                                    </button> 
                                    <span @click="resendOTP()" class="mr-3 btn btn-light" text>Resend Otp</span>
                                    <a href="/login" class="btn bg-light text-muted ml-3">Login</a> 
                                   
                                </div>
                            </div>
                        </form>

                        <!-- CREATE NEW PASSWORD -->
                          <form @submit.prevent="updatePassword()" v-if="newPassword">
                              <h6>CREATE NEW PASSWORD</h6><hr>
                             <div class="form-group row">
                                        <label for="password" class="col-md-4 col-form-label text-md-right">Password </label> 
                                        <div class="col-md-6">
                                          <i><small class="text-danger">Length should be six characters or more</small></i>
                                            <input @keyup="confirmPassword(signup_data.password, signup_data.c_password)" id="password" v-model="signup_data.password"  type="password" name="password" required="required" autocomplete="new-password" class="form-control" minlength="6">
                                        </div>
                                    </div> 
                                    
                                    <div class="form-group row">
                                        <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label> 
                                        <div class="col-md-6">
                                            <input @keyup="confirmPassword(signup_data.password, signup_data.c_password)" id="password-confirm" v-model="signup_data.c_password"  type="password" name="password_confirmation" required="required" autocomplete="new-password" class="form-control">
                                            <span class="text-danger">{{passwordMissmatch}}</span>
                                        </div>
                                    </div> 
                                
                                
                               
                                
                                <div class="form-group row mb-0">
                                    <div class="col-md-8 offset-md-4">
                                        <button type="submit" :disabled="showLoading" class="btn btn-primary">
                                        <span v-if="!showLoading">
                                        Update
                                        </span>
                                         <v-progress-circular color="white"  :size="20" v-if="showLoading"  indeterminate></v-progress-circular>
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

<!-- alert pop up -->
    <v-snackbar
        v-model="alertNotify.showAlert"
        :timeout="alertNotify.timeout"
        centered
        :color="alertNotify.colorTheme"
    >
    {{alertNotify.text}}
    <template v-slot:action="{ attrs }">
        <v-icon v-bind="attrs" @click="alertNotify.showAlert=false">
            mdi-close
        </v-icon>
    </template>       
    </v-snackbar>



  </div>

</template>

<script>
export default{
    data(){
        return{
            showLoading:false,
            userEmail:'',
            emailInput:true,
            otpInput:false,
            signup_data:{},
            newPassword:false,
            confirm_email:'',
            passwordMissmatch:'',
            otp:'',
            alertNotify:{
                showAlert:false,
                text:"",
                timeout:3000,
                colorTheme:''
            }
            // snackbar: false,
            // text: 'My timeout is set to 2000.',
            // timeout: 2000,
        }
    },
    methods:{
        alertMethod(alertStatus, alertText, alertColor){
            this.alertNotify.showAlert = alertStatus,
            this.alertNotify.text = alertText
            this.alertNotify.colorTheme = alertColor
        },
        sendOTP(){
            this.showLoading= true
            let userEmail = {'email': this.userEmail}
          
            this.axios.post(this.$hostname+"general_api.php?action=retrivePassword", userEmail).then((response)=>{
               
                if (response.data.respond == 'Not found'){
                this.alertMethod(true,'Email not found in database','red')

                }else if (response.data.respond =='No password'){
                 this.alertMethod(true,'This account is linked with email, Login to email instead','red')

                }else if (response.data.respond == 'sent'){
                    this.emailInput = false;
                    this.otpInput = true;
                 this.alertMethod(true,'Code sent to your email','green')

                }else {
                 this.alertMethod(true, response.data.respond,'red')
                }
                this.showLoading = false
            }).catch(error=>{
                this.showLoading = false
                this.alertNotify.showAlert = true,
                this.alertNotify.text = error
                this.alertNotify.colorTheme = 'red'
            })
        },
        confirmOTP(){
            this.showLoading= true
            let otp = {'otp': this.otp}
          
            this.axios.post(this.$hostname+"general_api.php?action=confirmOTP", otp).then((response)=>{
               
                if(response.data.respond == 'Correct'){
                    this.emailInput = false
                    this.otpInput = false
                 this.newPassword = true

                }else{
                 this.alertMethod(true,response.data.respond,response.data.alertColor)

                }
              
                this.showLoading = false
            }).catch(error=>{
                this.showLoading = false
                this.alertNotify.showAlert = true,
                this.alertNotify.text = error
                this.alertNotify.colorTheme = 'red'
            })
        },
        resendOTP(){
             this.emailInput = true;
             this.otpInput = false;
        },
          confirmPassword(pass1, pass2){
            if(pass2 == undefined){
                this.passwordMissmatch =''
            }else{
                 if(pass1 != pass2){
                    this.passwordMissmatch = 'password does not match'
                    this.showLoading = true;
                    }else{
                        this.passwordMissmatch =''
                    this.showLoading = false;

                }
            }
           
        },
        updatePassword(){
                this.showLoading = true
              
                let details = {'userEmail':this.userEmail, 'newPassword': this.signup_data.password}
           this.axios.post(this.$hostname+"general_api.php?action=updatePassword", details).then((response)=>{
              
              if(response.data.response == 'success'){
                  this.alertMethod(true,'Password changed successfully!','green');
                    this.$router.push({path:'/login'})
              }
                this.showLoading = false
            }).catch(error=>{
                this.alertMethod(true, error, 'red')
            })
        }
    }
}

</script>

<style scoped>
    .loginBox{
        margin-top: 8rem;
    }

</style>