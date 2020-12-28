
<template>
  <div>

    <nav   class="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top custom-navbar">

     <!-- <v-app-bar-nav-icon  v-if="show_side_bar" class="navbar-brand" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
        
        <div class="container p-0">
    
          <a href="/" class="navbar-brand">
             <v-img
          alt="Eduplus Logo"
          class="shrink mr-2"
          contain
          src="@/assets/images/logo.png"
          transition="scale-transition"
          width="40"
        />
                     </a>
    
            <v-app-bar-nav-icon class="d-lg-none " @click="toggleCollapse=false" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" >
                <span class="navbar-toggler-icon"></span>
            </v-app-bar-nav-icon>

            <div class="navbar-collapse" :class="{'collapse':toggleCollapse}" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto otherMenu">
                    <li @click="toggleCollapse=true" class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
                    <li @click="toggleCollapse=true" class="nav-item"><router-link class="nav-link" to="/career_Communities">Career communities</router-link></li>
                    <!-- <li @click="toggleCollapse=true"  class="nav-item"><router-link class="nav-link" to="/resource_center">Resource Center</router-link></li> -->
                    <li @click="toggleCollapse=true" class="nav-item"><router-link class="nav-link" to="/certification/1/10">Certification</router-link></li>
                    <li @click="toggleCollapse = true" class="nav-item"><router-link class="nav-link" to="/contact">Contact Us</router-link></li>
                    <li @click="toggleCollapse=true" class="nav-item"><router-link class="nav-link" to="/about">About Us</router-link></li>
                </ul>
    
                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                 <li v-if="!login_status" class="nav-item"><router-link class="nav-link" to="/login">Login</router-link> </li>
                 <li v-if="!login_status" style="background-color: #008BC4;" class="nav-item btn  p-0 ml-3 w-100 custom-btn rounded-pill" >
                     
                     <router-link class="nav-link" style="color:#fff; text-decoration:none" to="/signup">Sign Up</router-link> </li>

                        <li v-else class="nav-item dropdown" >
                            <router-link id="navbarDropdown" class="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                             Hello! {{user_name}}<span class="caret"></span>
                            </router-link>



                         <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <router-link class="dropdown-item" to="/dashboard">Dashboard</router-link>
                                <span @click="logout()" class="dropdown-item" style="cursor:pointer" >Logout</span>

                               
                            </div> 
                        </li>
               
                </ul>
            </div>
        </div>
 
    </nav>
    
      
    


  </div>
</template>

<script>
import { bus } from '../main';

export default {
    
  data(){
      return{
          show_side_bar:false,
          drawer:false,
          toggleCollapse:true,
          login_status:false,
          user_name:'',
          sessionData:null
      }
  },
  methods:{
   logout(){
       this.$session.destroy();
        this.login_status=false
          this.$router.push({path:'/'})
   },
   
  },
  
  mounted(){
      
       if(this.$session.has('user_login')){
          this.login_status=true
          this.sessionData=this.$session.get('user_login');
          this.user_name=this.sessionData.name
      }else{
          this.login_status=false
        //   this.$router.push({path:'/'}).catch(()=>{});
      }
  },
 
  updated(){
      
  },
  created(){
        bus.$on('show_side_bar', (data)=>{
            this.show_side_bar=data;
        })
        bus.$on('login_status', (data) => {
            this.login_status = data.login_status;
            this.user_id = data.user_id;
            this.user_name = data.user_name
    })
    
  }
}
    // bus.$emit('show_side_bar', false)   

</script>
