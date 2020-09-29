<template>
  <div>
    <app-header/>
        <!-- START OF PAGE CODE -->
<!-- expand-on-hover -->
        <div>
            
                 <v-navigation-drawer right permanent :expand-on-hover="mini" fixed class="mt-16"  dark >
                <v-list  dense nav class="py-0"
                >
          <v-list-item two-line >
           <div class="headerTXT">
             
              <div class="search">
                <v-form class="searchComunity">
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="12" >
                        <v-text-field color="white" label="Search Community" prepend-icon="fa fa-search"></v-text-field>
                        <v-select label="Select Community" color="white" dense ></v-select>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </div>
            </div>

          </v-list-item>

          <v-divider></v-divider>

          <v-list-item  link v-for="(community, index) in allComunities" :key="index" >
           <v-list-item-avatar>
              <img src="@/assets/images/about.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{community.community_name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        

          
        </v-list>
      </v-navigation-drawer>
  </div>

  <v-container class="mainPage">
     <v-card max-width="67vw">
       
       <v-card-text class="p-3 bg-black" >
          <v-avatar  class="rounded-circle userIcon" size="40" tile >
            <v-img  src="@/assets/images/about.jpg"></v-img>
          </v-avatar>
          <span class="mx-2">Username</span>
          <v-icon color="white">fa-angle-right</v-icon>
          <span class="mx-2">Group Name</span>
          
       </v-card-text>
     <div class="m-auto">
    <v-img  class="white--text" src="@/assets/images/about.jpg" ></v-img>

     </div>
                    <v-card-title class="headline" >Biology Community</v-card-title>
  
  
    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>
      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <div class="mr-3"><v-icon>mdi-thumb-up</v-icon> <small class="ml-1">300</small></div>
      <div><v-icon>mdi-comment</v-icon> <small class="ml-1">300</small></div>
    <v-spacer></v-spacer>


<!-- <div class="player-container"><vue-core-video-player src="https://www.youtube.com/watch?v=5AG971ZzFTs"></vue-core-video-player></div> -->

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
     
    </v-card-actions>
     <v-textarea v-if="login==true"
            class="mx-2"
            label="Type in your comment"
            rows="2"
           
        >
      <v-avatar slot="prepend"  class="rounded-circle mr-3" size="40" tile ><v-img  src="@/assets/images/about.jpg"></v-img></v-avatar>

        </v-textarea>
        <v-btn depressed v-if="login==false">
          LOGIN TO COMMENT
        </v-btn>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
            <div class="d-flex justify-content-between">
            
                   <v-avatar  class="rounded-circle mr-3" size="40" tile ><v-img  src="@/assets/images/about.jpg"></v-img></v-avatar>
             
              <span>
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit in sint neque qui. Consequuntur assumenda officia inventore perferendis necessitatibus expedita vel non, rerum, et quidem vero magnam sed ab iusto?
              </span>
            </div>
         
        
        </v-card-text>
      </div>
    </v-expand-transition>
        
         
  </v-card>
  </v-container>

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
      allComunities:{}
    }
  },
  methods:{
       getComunity(){
             
        this.axios.get(this.$hostname+"general_api.php?action=getComunity").then((response)=>{
        console.log(response.data) 
          this.allComunities=response.data
         console.log(this.allComunities)
               }).catch(error=>{
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