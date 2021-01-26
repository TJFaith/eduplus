<template>
<div>
      <app-header/>
      <!-- ERROR ALERT -->
      <!-- <div v-if="showSnackbarAlert"> -->
        <app-snackbar :message=errorMessage :showSnackbarAlert=showSnackbarAlert></app-snackbar>
        <!-- </div> -->
      <!-- END OF ERRO ALERT -->
    <div class="pageWrapper">
        <div class="container pushPageDown">
            <div class="row justify-content-center" v-if="signUp==false">
                <div class="col-md-8">
                    <div class="bg-white card">
                        <div class="card-header">Sign Up</div> 
                        <div class="card-body">
                          
                            <form>
                                <v-text-field v-model="name" :error-messages="nameErrors"  label="Name" required @input="$v.name.$touch()" @blur="$v.name.$touch()" ></v-text-field>
                                
                                <v-text-field @keydown.once="checkMail=''" v-model="email" :error-messages="emailErrors" label="E-mail" required @input="$v.email.$touch()"
                                @blur="$v.email.$touch()" ></v-text-field>
                                
                                 <v-text-field type="password" :counter="6" v-model="password" :error-messages="passwordErrors" label="password" required @input="$v.password.$touch()"
                                @blur="$v.password.$touch()" ></v-text-field>

                                <v-text-field type="password"  v-model="cpassword" :error-messages="cpasswordErrors" label="Confirm Password" required @input="$v.cpassword.$touch()"
                                @blur="$v.cpassword.$touch()" ></v-text-field>

                                  <vue-tel-input-vuetify required  :error-messages="phoneErrors" @input="$v.phone.$touch()" @blur="$v.phone.$touch()" v-model="phone"></vue-tel-input-vuetify>
                                
                                <v-select v-model="gender" :items="items" :error-messages="genderErrors" label="Gender" required @change="$v.gender.$touch()" @blur="$v.gender.$touch()" ></v-select>

                                <div class="d-flex align-center">
                                    <v-checkbox
                                      v-model="checkbox"
                                      :error-messages="checkboxErrors"
                                      label="Agree to our terms"
                                      required
                                      @change="$v.checkbox.$touch()"
                                      @blur="$v.checkbox.$touch()"
                                    ></v-checkbox>
                                    <v-chip @click="showTerms = !showTerms" class="ma-2" label>Temrs and Conditon</v-chip>
                                </div>
 <!-- :disabled="show_loader" -->
    <v-btn
    
      class="mr-4"
      @click="submit"
    >
       <div v-if="show_loader">
           <v-progress-circular color="primary"  :size="20"  indeterminate></v-progress-circular>
         <small class="text-primary"> Signing Up, Please Wait.....</small> </div>
                                            <div v-else>Sign Up</div>
    </v-btn>

   
                                        
    <v-btn class="btn-danger bg-danger">
      Sign Up with Google
    </v-btn>
  </form>
                        </div>
                    </div>
                </div>
            </div>

        <!-- CONFIRM EMAIL NOTIFICATION -->
        <div style="text-align:center;margin-top:20vh" class="text-white" v-if="signUp">
        <h3>THANK YOU FOR SIGNING UP WITH EDUPLUS, CHECK YOUR EMAIL TO CONFIRM YOUR REGISTRATION</h3>
       

        <br>
        <v-btn btn-lg color="green" text><a href="/login"> Login to your dashboard >></a></v-btn>
</div>


        </div>
        </div>
    <app-footer/>
     
     <!-- ADDON TO FORM -->
     <app-terms :showTerms=showTerms></app-terms>


    </div>
</template>

<script>
import { bus } from '../main';
 

 import { validationMixin } from 'vuelidate'
  import { required, email, minLength } from 'vuelidate/lib/validators'
//  maxLength,
  export default {
    mixins: [validationMixin],

    validations: {
      name: { required },
      password: { required, minLength: minLength(6) },
      cpassword: { required, minLength: minLength(6) },
      email: { required, email },
      phone: { required },
      gender: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },


    data(){
        return{
            otp:'',
            errorMessage:'',
            showSnackbarAlert:false,
            showTerms:false,
            
            signUp:false,
            show_loader:false,


            name: '',  email: '', password:'',  cpassword:'', gender: null,  checkbox: false, phone:null,
                  items: [
                      'Male',
                      'Female',
                      'Corss Gender',
                  ],
            checkMail:'',

        }
    },
    computed: {
        nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      genderErrors () {
        const errors = []
        if (!this.$v.gender.$dirty) return errors
        !this.$v.gender.required && errors.push('Item is required')
        return errors
      },
    
      phoneErrors (){
        const errors = []
        if (!this.$v.phone.$dirty) return errors
        !this.$v.phone.required && errors.push('Telephone Number is required')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        if(this.checkMail == 'Exist'){
          errors.push('Email already exist, please login instead')
        }
        return errors
      },
       passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.minLength && errors.push('password must be at most 6 characters long')
        !this.$v.password.required && errors.push('password is required')
        return errors
      },
       cpasswordErrors () {
        const errors = []
        if (!this.$v.cpassword.$dirty) return errors
        !this.$v.cpassword.required && errors.push('please confirm your password')
        if(this.$v.cpassword.$model != this.$v.password.$model){ errors.push('Password Missmatch')}
        return errors
        
      },
     
    },

    methods:{
        submit () {
        this.$v.$touch()
        if(this.$v.$error == false){
          this.submitForm();
          this.show_loader=true
        }
          
      },
      submitForm(){
        let user_data ={'name': this.name,  'email': this.email, 'password':this.password,  'gender': this.gender, 'phone':this.phone,}
          
          this.axios.post(this.$hostname+"general_api.php?action=signup", user_data).then((response)=>{
            console.log(response)
              if(response.data.respond== 'Exist'){
                this.checkMail = 'Exist'
                this.show_loader=false
              }else if(response.data.respond == 'saved'){
                this.signUp=true

                this.show_loader=false
              }else{
                this.errorMessage=response.data
                this.showSnackbarAlert=true
                this.show_loader=false
              }
        }).catch(error=>{
            this.show_loader=false
            this.errorMessage=error
            this.showSnackbarAlert=true

        })
      
      },
     
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.gender = null
        this.checkbox = false
      },

    },
    
      mounted(){
         if(this.$session.has('user_login')){
            this.$router.push({path:'/dashboard'}).catch(()=>{});
         }
    },
    created(){
       bus.$on('showTerms', (data) => {
      this.showTerms = data;
    })
    }
}
</script>

<style scoped>
    .loginBox{
        margin-top: 8rem;
    }

    .pageWrapper{
      padding-top: 1rem;
      background: 
    /* top, transparent red */ 
    linear-gradient(
      rgba(61, 142, 196, 0.788), 
      rgba(255, 255, 255, 0.966)
    ),
    /* bottom, image */
    url('~@/assets/images/signUpBG.jpg');
    }
   
</style>