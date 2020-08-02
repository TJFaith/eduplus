
<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-light shadow-sm fixed-top custom-navbar">
        <div class="container">
          <a href="/" class="navbar-brand">
                <img class="siteLogo" src="@/assets/images/logo.png">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto otherMenu">
                    <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/career_Communitie">Career communities</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/resource_center">Resource Center</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/certification">Certification</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" href="/contact">Contact</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/about">About Us</router-link></li>
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                 <li class="nav-item"><router-link class="nav-link" to="/login">Login</router-link> </li>
                 <li class="nav-item btn  p-0 ml-3 w-100 custom-btn rounded-pill">
                     <router-link to="/signup" style="color:#fff; text-decoration:none" class="nav-link">Sign Up</router-link>
                       
                 </li>

                        <!-- <li class="nav-item dropdown">
                            <router-link id="navbarDropdown" class="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                               User Name <span class="caret"></span>
                            </router-link>



                         <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <router-link class="dropdown-item" to="/dashboard">Dashboard</router-link>
                                <router-link class="dropdown-item" to="/logout">Logout</router-link>

                               
                            </div> 
                        </li> -->
               
                </ul>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>


export default {
  data(){
      return{

      }
  },
  methods:{
   
  },
  mounted(){


  },
  created(){

  }
}
</script>
