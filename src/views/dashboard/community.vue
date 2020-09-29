<template>
<v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col  class="d-flex justify-space-between align-items-center w-100">
        <div class="d-flex">
       <v-chip class="ma-2"  color="secondary"  @click="$router.go(-1)" >
        <v-icon left>mdi-arrow-back</v-icon>Back
      </v-chip>

       <v-chip class="ma-2"  color="primary" outlined  @click="showDialogMtd()" >
        <v-icon left>mdi-plus</v-icon>NEW COMMUNITY
      </v-chip>
      </div>

      <div>
          <v-menu offset-y v-if="showSettings">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          outlined
          dark
          v-bind="attrs"
          v-on="on"
        >
        <v-icon  class="mr-2">fas fa-cog</v-icon>
         settings
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="editDialog()" style="color:green; cursor:pointer">Edit</v-list-item>
        <v-list-item @click="confirmDelete()" style="color:red; cursor:pointer">Delete</v-list-item>
      </v-list>
    </v-menu>
      </div>
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
      showDialog:false,
      showSettings:false,
      communityDATA:{}
    }
  },
  
  methods:{
    showDialogMtd(){
      this.showDialog = true
      bus.$emit('showDialog',this.showDialog);
    },

    editDialog(){
     
      this.showDialogMtd()
    },

  confirmDelete(){

 
    this.$swal.queue([{
      title: 'Are you sure you want to delete this community',
      text:'',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Delete',
      showLoaderOnConfirm: true,
      allowOutsideClick:false,
      preConfirm: () => {
          
                let communityID={'c_id':this.$route.params.community_id}
                this.axios.post(this.$hostname+"general_api.php?action=deleteCommunity", communityID).then((response)=>{
                    this.$swal.fire('Community Deleted','','success')
                    this.$router.push('/dashboard/community/all/')
                    response
                    }).catch(error=>{
                      alert(error)
                    })
              
      }
    }])
    },

  },
  computed:{
    // communityDetails(){
    //   return this.communityDATA = this.communityDetails;
    // }
  },
  created(){
    bus.$on('hideDialog',(data)=>{
       this.showDialog = data;
      })
    
      bus.$on('showSettings',(data)=>{
       this.showSettings = data;
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