<template>
<v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col cols="12" sm="4" >
       <v-chip class="ma-2"  color="primary" outlined  @click="showDialogMtd()" >
        <v-icon left>mdi-plus</v-icon>NEW COMMUNITY
      </v-chip>

       </v-col>

    </v-row>
<hr>
      <router-view></router-view>
   
  </v-container>

</template>

<script>
import {bus} from '../../main';
export default {
  data(){
    return{
      showDialog:false
    }
  },
  
  methods:{
    showDialogMtd(){
      this.showDialog = true
      bus.$emit('showDialog',this.showDialog);
    }
  },
  created(){
    bus.$on('hideDialog',(data)=>{
       this.showDialog = data;
      })
  }
}
</script>

<style>
  .bg{
    background: linear-gradient( to bottom,  rgb(0, 0, 0), rgba(179, 23, 23, 0.39)),
    url(~@/assets/images/ContactUs.webp);
    background-size: cover;
    background-position: center;
  }
</style>