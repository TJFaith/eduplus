<template>
  <div>
  <div v-if="showDialog">
<new-comunity></new-comunity>

  </div>
  
  <!-- Navbar -->
  <nav class="main-header navbar fixed-top navbar-expand navbar-white navbar-light" >
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
      </li>
      
      <li class="nav-item d-none d-sm-inline-block">
        <a href="/" class="nav-link">Home</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="/career_Communities" class="nav-link">Career Communities</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
          <a href="#" class="nav-link">Resource Center</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
          <a href="/certification" class="nav-link">Certification</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
          <a href="/contact" class="nav-link">Contact</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
          <a href="/about" class="nav-link">About Us</a>
      </li>
    </ul>

    <!-- SEARCH FORM -->
    <!-- <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form> -->

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Messages Dropdown Menu -->
      <li class="nav-item dropdown">
          <!-- Brand Logo -->
        <router-link to="/" class="brand-link">
          <img src="@/assets/images/logo.png" alt="Eduplus Logo" class="brand-image"
              style="opacity: .8">
          <span class="brand-text font-weight-light">eduplus</span>
        </router-link>
      </li>
     
    </ul> 
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
            <a href="#" class="nav-link">
              <i class="nav-icon">
           
                <img v-if="userData.user_icon" :src="userData.user_icon" class="img-circle elevation-2-small" alt="Icon">
                <img v-else src="@/assets/images/profiel.png" class="img-circle elevation-2-small" alt="User Image">
                </i>
              <p> 
                  <span class="ml-3">Hi {{userData.name.slice(0, 5)}}</span>
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
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
                  Dashobard
                </p>
              </router-link>
            </li>

            <li class="nav-item has-treeview ">
                
                <a href="#" class="nav-link">
                  <i class="nav-icon fa fa-book"></i>
                  <p>
                   Assessment
                   <i class="right fas fa-angle-left"></i>
                  </p>
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
                   <i class="right fas fa-angle-left"></i>

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

               <li class="nav-item">
                <router-link to="/dashboard/dashboard resource center" class="nav-link">
                   <i class="nav-icon fab fa-accusoft"></i>
                  <p>Resource Center</p>
                </router-link>
              
              </li>
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
      showDialog:false
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