<template>
  <div>
  <div v-if="showDialog">
<new-comunity></new-comunity>

  </div>
  
  <!-- Navbar -->
  
   <nav   class="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top custom-navbar">

     <!-- <v-app-bar-nav-icon  v-if="show_side_bar" class="navbar-brand" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
        
        <div class="container p-0">
    
             <div class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
      </div>
            

                   <!-- Right Side Of Navbar -->
                <div class="navbar-nav ml-auto d-lg-none">
                    <!-- Authentication Links -->
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
    
                </div>
               
                <v-app-bar-nav-icon class="d-lg-none ml-auto" @click="toggleCollapse=false" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" >
                <span class="navbar-toggler-icon"></span>
            </v-app-bar-nav-icon>

            <div class="navbar-collapse" :class="{'collapse':toggleCollapse}" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav ml-auto otherMenu">
                    <li @click="toggleCollapse=true" class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
                    <li @click="toggleCollapse=true" class="nav-item"><router-link class="nav-link" to="/career_Communities">Career communities</router-link></li>
                    <!-- <li @click="toggleCollapse=true"  class="nav-item"><router-link class="nav-link" to="/resource_center">Resource Center</router-link></li> -->
                    <li @click="toggleCollapse=true" class="nav-item"><router-link class="nav-link" to="/certification/1/10">Certification</router-link></li>
                    <li @click="toggleCollapse = true" class="nav-item"><router-link class="nav-link" to="/contact">Contact Us</router-link></li>
                    <li @click="toggleCollapse=true" class="nav-item"><router-link class="nav-link" to="/about">About Us</router-link></li>
                </ul>

                <div class="navbar-nav ml-auto d-none d-md-block ">
                    <!-- Authentication Links -->
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
    
                </div>
            </div>
        
        </div>
      
 
    </nav>
    
      
    
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4" >
   
    <!-- Sidebar -->
    <div class="sidebar">
      
    

      <!-- Sidebar Menu -->
      
      <nav class="mt-2" style="position:fixed">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
            
          <li class="nav-item has-treeview user-panel">
            <span class="d-flex justify-space-between">
            <a href="#" class="nav-link">
              <i class="nav-icon">
           
                <img v-if="userData.user_icon" :src="userData.user_icon" class="img-circle elevation-2-small" alt="Icon">
                <img v-else src="@/assets/images/profiel.png" class="img-circle elevation-2-small" alt="User Image">
                </i>
              <span> 
                  <span class="ml-3">Hi {{userData.name.slice(0, 5)}}</span>
                <i class="ml-5 right fas fa-angle-left"></i>
              </span>
            </a>
           
              <a class="nav-link d-lg-none d-xl-none d-md-none d-sm-block" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
      </span>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Update Profile</p>
                </a>
              </li>
             
              <v-hover v-slot:default="{ hover }">
                      <li :class="{ 'error--text': hover }" style="cursor:pointer"  class="gray--text  nav-item nav-link" @click="logout()">
                          <i class="fas fa-sign-out-alt nav-icon"></i>
                          <span small depressed color="error">log out</span>
                        </li>
              </v-hover>
            </ul>
          </li>
          <div class="mt-5"></div>
         <!-- Other menus -->
          <li class="nav-item">
            
              <router-link to="/dashboard" class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Dashboard
                </p>
              </router-link>
            </li>

            <li class="nav-item has-treeview ">
                
                <a href="#" class="nav-link">
                  <i class="nav-icon fa fa-book"></i>
                  <span>
                   Assessment
                   <i class="ml-5 right fas fa-angle-left"></i>
                  </span>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                      <router-link to="/dashboard/assessment" class="nav-link">
                        <i class="fa fa-plus-circle nav-icon"></i>
                        <p>New Assessment</p>
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/dashboard/assessment_hhistory" class="nav-link">
                        <i class="fa fa-history nav-icon"></i>
                        <p>Assement History</p>
                      </router-link>
                    </li>
      
                  </ul>
              </li>

              <li class="nav-item">
              
                <router-link to="/dashboard/community/all" class="nav-link">
               
                  <i class="nav-icon fa fa-users"></i>
                  <p>Community</p>
                  <span>
                   <i class="ml-5 right fas fa-angle-left"></i>
                </span>
                </router-link>
                <ul class="nav nav-treeview">
                      <li class="nav-item">
                        <router-link to="/dashboard/community/all" class="nav-link">
                          <i class="fa fa-user nav-icon"></i>
                          <p>My Community</p>
                        </router-link>
                      </li>
                      <li class="nav-item" @click="showDialog=true">
                        <router-link to="#" class="nav-link">
                       <i class="fa fa-plus-circle nav-icon"></i>
                          <p>New Community</p>
                        </router-link>
                      </li>
                    
                    </ul>
              </li>
<!-- 
               <li class="nav-item">
                <router-link to="/dashboard/dashboard resource center" class="nav-link">
                   <i class="nav-icon fab fa-accusoft"></i>
                  <p>Resource Center</p>
                </router-link>
              
              </li> -->
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <div class="content">
      <div class="container-fluid" style="margin-top:15vh">
           
<!--             
       <home-component></home-component> --}} -->
        <router-view></router-view>
      </div>
    </div>
  </div>
  <!-- /.content-wrapper -->



  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">
      Site developed and maintain by <a href="https://www.tectainet.com">Tectainet Technologies</a>
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2019 <a href="https://eduplus.edu.com">Eduplus</a>.</strong> All rights reserved.
  </footer>
  </div>
</template>

<script>
import {bus} from '../../main';
export default {
  // str.slice(0, 5);
  data(){
    return{
      userData:{},
      showDialog:false,
      toggleCollapse:true,
    }
  },
 

  methods:{
     logout(){
       this.$session.destroy();
        this.login_status=false
          this.$router.push({path:'/'})
   },
  },
  
  created(){
    this.userData=this.$session.get('user_login')
     bus.$on('showDialog',(data)=>{
       this.showDialog = data;
      })

      bus.$on('hideDialog',(data)=>{
       this.showDialog = data;
      })
   
  }
}
</script>

<style>

</style>