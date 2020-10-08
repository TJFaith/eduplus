<template>
  <div>
    <app-header/>
        <!-- START OF PAGE CODE -->
<!-- expand-on-hover -->
        <div>
            
                 <v-navigation-drawer right permanent :expand-on-hover="mini" fixed class="mt-16"  dark >
                <v-list  dense nav class="py-0">
          <v-list-item two-line >
           <div class="headerTXT">
             
              <div class="search mt-3">
                <v-text-field color="white" label="Search Community" v-model="searchTXT" @keyup="searchCommunity" @keyup.enter="searchCommunity" prepend-icon="fa fa-search"></v-text-field>
                   
              </div>
            </div>

          </v-list-item>
          <v-divider></v-divider>
      


          <v-list-item   :to="{ name: 'generalSingleCommunity', params: { community_id: community.community_id }}" link v-for="(community, index) in allComunities" :key="index" >
        
           <v-list-item-avatar>
              <img src="@/assets/images/about.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="withe--text">{{community.community_name}}</v-list-item-title>
            </v-list-item-content>
   

          </v-list-item>
            <div style="text-align:center"  v-if="showLoading">
         <v-progress-circular color="white"  :size="100"  indeterminate></v-progress-circular>
       </div>
       <v-card class="p-4 text-center" color="red--text" v-if="allComunities.length == 0">
         NO RESULT FOUND FOR "<b>{{searchTXT.toUpperCase()}}</b>"
       </v-card>
          
        </v-list>
      </v-navigation-drawer>
  </div>

  <div class="mainPage">
        <router-view style="width:70vw; margin-left:5%" ></router-view>

  </div>

        <!-- END -->
    <app-footer/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:false,
      login:true,
      allComunities:{},
      searchTXT:'',
      showLoading:false

    }
  },
  methods:{
       getComunity(){
      this.showLoading=true
             
        this.axios.get(this.$hostname+"general_api.php?action=getComunity").then((response)=>{
    
          this.allComunities=response.data
      this.showLoading=false
        
               }).catch(error=>{
      this.showLoading=false

          alert(error)
         })
    },
       searchCommunity(){
      this.showLoading=true
     
      let searchWork={'searchWord':this.searchTXT}
        this.axios.post(this.$hostname+"general_api.php?action=searchComunity", searchWork).then((response)=>{
      
        this.allComunities= response.data
      this.showLoading=false
         
               }).catch(error=>{
      this.showLoading=false

          alert(error)
         })
    
    }
  },
    computed: {
    mini() {
       return this.$vuetify.breakpoint.smAndDown;
}

},
created(){
    this.getComunity()
}
}
</script>

<style>
  .mainPage{
    margin-top: 20vh;
  }

 

 
</style>