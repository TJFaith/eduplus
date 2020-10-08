<template>
  <div>
    <app-header/>
      <div>
        <div class="container-fluid mt-16" style="border:2px solid red">
          <div class="row toprow">
            <div class="headerTXT col-md-4">
              <h6>JOIN A</h6>
              <h1><b>CAREER COMMUNITY</b></h1>
              <div class="search">
            
                 
                        <v-text-field color="white" label="Search Community" v-model="searchTXT" @keyup="searchCommunity" @keyup.enter="searchCommunity" prepend-icon="fa fa-search"></v-text-field>
                  
              </div>
            </div>
            <div class="col-md-6">
             
             <div class="search_result">
                <v-list-item :to="{ name: 'generalSingleCommunity', params: { community_id: community.community_id }}" link class="bg-white mb-3 p-2" v-for="(community, index) in allComunities" :key="index">
               
                   <v-list-item-avatar  class="rounded-circle userIcon" size="40" tile >
                    <v-img  src="@/assets/images/about.jpg"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                <span class="mx-2">{{community.community_name}}</span>
                <div>
                <small ><v-icon class="mx-2" small>fa fa-users</v-icon>2,000</small>
                </div>
                </v-list-item-content>
                
       </v-list-item>
       <div style="text-align:center"  v-if="showLoading">
         <v-progress-circular color="white"  :size="100"  indeterminate></v-progress-circular>
       </div>
       <v-card class="p-4 text-center" color="red--text" v-if="allComunities.length == 0">
         NO RESULT FOUND FOR "<b>{{searchTXT.toUpperCase()}}</b>"
       </v-card>
       
        
             </div>
            </div>
              <router-link to="/career_Communities/home">
             
                <div  class="pointer">

               
              <span class="white--text font-weight-medium">VIEW COMMUNITY</span>
              <v-icon class="animated pulse" color="white" size=100>fa fa-angle-double-right</v-icon>
 </div>
            

            </router-link>
          </div>
        </div>
      </div>
    <app-footer/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      valid:false,
      searchTXT:'',
      joinGroup:true,
      allComunities:{},
      showLoading:false
    }
  },
  methods:{
    searchCommunity(){
      this.showLoading = true
      if(this.searchTXT != ''){
      let searchWork={'searchWord':this.searchTXT}
        this.axios.post(this.$hostname+"general_api.php?action=searchComunity", searchWork).then((response)=>{
      
        this.allComunities= response.data
      this.showLoading = false
        
               }).catch(error=>{
      this.showLoading = false

          alert(error)
         })
      }else if (this.searchTXT == ''){
        this.allComunities ={}
      this.showLoading = false

      }
    }
  }
}
</script>

<style scoped>
.c_container{
  min-height:100vh;
  background-color: lightblue;

}

.toprow{

    min-height: 100vh;
  padding-top:5vh;
  background-image:linear-gradient(to right, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
  url(~@/assets/images/career_community.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;

}
.pointer{
 position:absolute;
 right:0;
transform: translate(-2vw,41vh);

}

@media (max-width:576px) {
  .pointer{
 position:absolute;
 right:0;
 z-index: 100;
transform: translate(-8rem,-5rem);
}

}
.topImg img{
  width:50;
  height: 100vh;
  z-index: -2;
}
.headerTXT{
  margin:12% 0 0 7%;
  z-index: 100;
}

.searchComunity{
  background-color: rgba(0, 0, 0, .5);
  color: #fff;
  padding: 5%;
  border-radius: 5px;
  border:2px solid rgba(117, 19, 93, 0.73);
  margin-right: 2rem;
}
/* .headerTXT {
  color:#fff;
} */
</style>