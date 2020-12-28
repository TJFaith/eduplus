<template>
    <div>
    <app-header/>
    <div class="container pushPageDown">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"><i class="fa fa-user"></i>Login</div> 
                    <div class="card-body">
                        <form @submit.prevent="login()">

                            <div class="from-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right"></label> 

                                <div class="col-md-6">
                                <label for="response" v-html="login_response"></label>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label> 
                                <div class="col-md-6">
                                    <input v-model="login_data.email" id="email" type="email" name="email"  required="required"  class="form-control">
                                    
                                    </div>
                                </div> 
                                
                                <div class="form-group row">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">Password</label> 
                                    <div class="col-md-6">
                                        <input v-model="login_data.password" id="password" type="password" name="password" required="required" class="form-control ">
                                       
                                    </div>
                                </div> 
                                
                                <div class="form-group row">
                                    <div class="col-md-6 offset-md-4">
                                        <div class="form-check">
                                            <input type="checkbox" name="remember" id="remember" class="form-check-input"> 
                                            <label for="remember" class="form-check-label">
                                            Remember Me</label>
                                        </div>
                                    </div>
                                </div> 
                                
                                <div class="form-group row mb-0">
                                    <div class="col-md-8 offset-md-4">
                                        <button type="submit" :disabled="showLoading" class="btn btn-primary">
                                        <span v-if="!showLoading">
                                        Login
                                        </span>
                                         <v-progress-circular color="white"  :size="20" v-if="showLoading"  indeterminate></v-progress-circular>
                                    </button> 
                                    <a href="/forgot_password" class="btn bg-light text-muted ml-3">Forgot Your Password?</a> 
                                    <hr> 
                                     <button :disabled="showLoading" type="button" class="google-signin-button btn bg-danger text-white" v-google-signin-button="clientId" > Continue with Google</button>
                                    <!-- <div><a href="" class="btn bg-danger text-white" style="width: 100%;">
                                        <i class="fab fa-google"></i> Login with Google</a>
                                    </div> -->
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
import { bus } from '../main';

export default {
    data(){
        return{
            showLoading:false,
            login_data:{},
            login_response:'',
             clientId: '444741050365-iv78pe1mmrkbll31t888vpvundu44phg.apps.googleusercontent.com'

        }
    },
    methods:{
        
         OnGoogleAuthSuccess (idToken) {
            this.showLoading = true;
       
        this.axios.get('https://oauth2.googleapis.com/tokeninfo?id_token='+idToken).then((response)=>{
            let userData = response.data
            // post Data
            this.axios.post(this.$hostname+"general_api.php?action=google_login", userData).then((response)=>{
               
                if(response.data.respond !='success'){
                    this.login_response = response.data.respond
                    }else{
                    this.login_response = ''
                    this.$session.start()
                    this.$session.set('user_login', response.data.user_data[0])
                    bus.$emit('login_status', {'login_status':true, 'user_id':response.data.user_data[0].id, 'user_name':response.data.user_data[0].name});
                     if(this.$session.has('postPage')){
                  window.location = this.$session.get('postPage')
                  this.$session.remove('postPage')
              }else{
              window.location = '/dashboard'; 

              }
            this.showLoading = false;

                    // this.$router.push({path:'/dashboard'})
                }

            }).catch(error=>{
            this.showLoading = false;

                alert(error)
            })

        }).catch(error=>{
            this.showLoading = false;

            alert(error)
            

        })

        
      // Receive the idToken and make your magic with the backend
        },
        OnGoogleAuthFail (error) {
            this.showLoading = false;

        alert(error)
        },
        login(){
            this.showLoading = true;
            this.axios.post(this.$hostname+"general_api.php?action=login", this.login_data).then((response)=>{
       
                if(response.data.respond !='success'){
                    this.showLoading = false;
                this.login_response = response.data.respond
                }else{
                this.login_response = ''
                 this.$session.start()
                 this.$session.set('user_login', response.data.user_data[0])
                 bus.$emit('login_status', {'login_status':true, 'user_id':response.data.user_data[0].id, 'user_name':response.data.user_data[0].name});
              if(this.$session.has('postPage')){
                  window.location = this.$session.get('postPage')
                  this.$session.remove('postPage')
              }else{
              window.location = '/dashboard'; 

              }
            this.showLoading = false;

                // this.$router.push({path:'/dashboard'})
                }
            }).catch(error=>{
            this.showLoading = false;
                alert(error)
            })

        }
    },
    mounted(){
         if(this.$session.has('user_login')){
              window.location = '/dashboard'; 

    //  this.$router.push({path:'/dashboard'}).catch(()=>{});
        
         }
    }
}
</script>

<style scoped>
    .loginBox{
        margin-top: 8rem;
    }

</style>