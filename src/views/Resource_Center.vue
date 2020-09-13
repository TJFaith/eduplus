<template>
  <div>
    <app-header/>
    <div>
      <div class="rHeader">
          <div class="pt-16  d-flex  align-middle" >
            <v-container>
              <v-row>
                <v-col cols="12" md="6" class="mt-5">
                  <v-text-field color="white" label="Search Resources" prepend-icon="fa fa-search"></v-text-field>
                        <v-select label="Select Resources Category" color="white" dense ></v-select>
                </v-col>
                <v-col cols="12" md="6" class="mt-5">
            <h3 class="white--text">Welcome to our</h3>
            <h1 class="white--text">RESOURCE LIBRARY</h1>
               <p style="width:20rem" class="white--text">We have over 20,000 educational resources in our platform in video, audio and text format, you can as well download in pdf format for free</p>
          </v-col> 
              </v-row>
            </v-container>

      </div>
      
      </div>

      <div class="rBody">
        <v-container>
          <v-row>
            <v-col cols="6" md="3">
            <div class="player-container"><vue-core-video-player src="https://www.youtube.com/watch?v=5AG971ZzFTs"></vue-core-video-player></div>

            </v-col>
            <v-col cols="6" md="9">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, dicta explicabo. Eligendi, perspiciatis aliquam consequatur, ducimus tempora quo voluptatibus deleniti excepturi id eveniet expedita ex ipsum voluptate iste. Perferendis, voluptates!
        <v-divider></v-divider>
            
              <v-row class="d-flex justify-content-between">
                <v-btn @click="viewResourceDetails">View</v-btn>
                <div>
                <span class="pt-6"><i class="fas fa-eye"></i> 15k</span>
              
                </div>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <app-footer/>
    
  <!-- individual dialoge -->

<resource-dialog v-if="showdialog2" :showdialog=true></resource-dialog>

  </div>
</template>

<script>
import { bus } from '../main';

export default {
  data(){
    return{
      showdialog2:false
    }
  },
  methods:{
    viewResourceDetails(){
      
      this.showdialog2 = true;
      
    }
  },
   created(){
    bus.$on('hideResourceDialog',(data)=>{
       this.showdialog2 = data;
  
      })
  }
}
</script>

<style>
  .rHeader{
    min-height: 50vh;
    background-image:radial-gradient( rgba(255, 255, 255, 0.73), rgba(2, 2, 2, 0.73)),
  url(~@/assets/images/resource.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  }
</style>