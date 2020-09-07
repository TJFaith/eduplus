<template>
<div>
      <app-header/>

        <div class="container pushPageDown">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Sign Up</div> 
                        <div class="card-body">
                            <form @submit.prevent="signup()">
                                <div class="form-group row">
                                    <label for="name" class="col-md-4 col-form-label text-md-right">Name</label> 
                                    <div class="col-md-6">
                                        <input id="name" type="text" name="name" v-model="signup_data.name" required="required" autocomplete="name" class="form-control ">
                                        </div>
                                    </div> 
                                    
                                    <div class="form-group row">
                                        <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label> 
                                        
                                        <div class="col-md-6">
                                            <input id="email" type="email" name="email" v-model="signup_data.email" @keyup="confirm_email=''" required="required" autocomplete="email" class="form-control ">
                                            <span class="text-danger">{{confirm_email}}</span>
                                        </div>
                                    </div> 
                                    
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
                                    
                                    <div class="form-g9roup row mb-0"><div class="col-md-6 offset-md-4">
                                        <button type="submit" :disabled="show_loader" class="btn btn-primary w-25">
                                            <!-- <i class="fa fa-spinner fa-spin"></i> -->
                                            <div v-if="show_loader"><small>Please Wait.....</small> </div>
                                            <div v-else>Sign Up</div>
                                        </button> <a href="#" class="btn btn-danger bg-danger">Sign Up with Google</a>
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
            signup_data:{},
            show_loader:false,
            confirm_email:'',
            passwordMissmatch:''

        }
    },
    methods:{
        confirmPassword(pass1, pass2){
            if(pass2 == undefined){
                this.passwordMissmatch =''
            }else{
                 if(pass1 != pass2){
                    this.passwordMissmatch = 'password does not match'
                    }else{
                        this.passwordMissmatch =''
                }
            }
           
        },
        signup(){
            if(this.passwordMissmatch =='' && this.signup_data.c_password != undefined){
            this.show_loader =true;
                this.axios.post(this.$hostname+"general_api.php?action=signup", this.signup_data).then((response)=>{
                   let res = response.data;
                   if(res.respond == "Exist"){
                   this.confirm_email ="Account with this email exist please login"
                    this.show_loader =false;

                   }else if(res.respond =="saved"){
                     
                       this.signup_data={}
                        this.show_loader =false;
                        this.$session.start()
                        this.$session.set('user_login', res.user_id[0])
                        bus.$emit('login_status', {'login_status':true, 'user_id':res.user_id[0].id, 'user_name':res.user_id[0].name});
                      window.location = '/dashboard'; 

                        // this.$router.push({path:'/dashboard'})
                   }
                }).catch(error=>{
                    alert(error);
                    this.show_loader =false;
                })
            }else{
                    this.show_loader =false;
                this.passwordMissmatch='Please confirm password before proceding '
            } 
        }
    },
    computed:{
    
    },
      mounted(){
         if(this.$session.has('user_login')){
            this.$router.push({path:'/dashboard'}).catch(()=>{});
         }
    }
}
</script>

<style scoped>
    .loginBox{
        margin-top: 8rem;
    }
   
</style>