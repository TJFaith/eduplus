<template>
   <v-row>
  
        <div  class="d-flex flex-wrap"  >
          
              <v-card color="red" dark class="bg m-3"  v-for="(allCom, index) in allComunities" :key="index">
            
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="headline" >{{allCom[0][0].community_name}}</v-card-title>
                    <v-card-subtitle>{{allCom[0][0].community_description}}</v-card-subtitle>
                  </div>

                  <v-avatar  class="ma-3 rounded-circle" size="50" tile >
                    <v-img  src="@/assets/images/about.jpg"></v-img>
                  </v-avatar>
                </div>
              <hr>
                <v-card-actions>
                
                  <v-btn class="mx-4" color="red">
                     <router-link :to="{ name: 'singleCommunity', params: { community_id: allCom[0][0].community_id }}">
                       <i class="nav-icon fas fa-edit mr-2"></i> Edit
                      </router-link> 
                  </v-btn>
                
                      <v-btn class="mx-4" color="red">
                            <i class="nav-icon fa fa-users mr-2"></i>2k
                      </v-btn>
              
                </v-card-actions>
              </v-card>
            </div> 
          
       
    </v-row>
</template>

<script>
import {bus} from '../../main';

export default {
  
  data(){
    return{
      allComunities:[]
    }
  },
  // methods
  methods:{
    // get all community created by this user
      getComunity(){
              let user_id  = {'user_id':this.$session.get('user_login').id}
        
        this.axios.post(this.$hostname+"general_api.php?action=getComunity", user_id).then((response)=>{
        console.log(response.data) 
          this.allComunities=response.data
         
               }).catch(error=>{
          alert(error)
         })
    }
  },
  created(){
      bus.$on('getComunity',()=>{
           this.getComunity()

      })
    this.getComunity()
  }
}
</script>

<style>

</style>