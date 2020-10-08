<template>
<div>
   <v-card max-width="67vw" v-for="(postData, index) in postData" :key="index">
       
       <v-card-text class="p-3 bg-black" >
          <v-avatar  class="rounded-circle userIcon" size="40" tile >
            <v-img  src="@/assets/images/about.jpg"></v-img>
          </v-avatar>
          <span class="mx-2">{{postData.member_name}}</span>
          <v-icon color="white">fa-angle-right</v-icon>
          <span class="mx-2">{{postData.community_name}}</span>
          
       </v-card-text>
       <v-card-text v-html="postData.text_caption">

       </v-card-text>
     <!-- <div class="m-auto">
    <v-img  class="white--text" src="@/assets/images/about.jpg" ></v-img>
.text_caption
     </div> -->
                    <!-- <v-card-title class="headline" >Biology Community</v-card-title> -->
  
  
    <!-- <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>
      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text> -->

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
</div>
</template>

<script>
export default {
  data(){
    return{
      show:false,
      login:false,
      postData:{}
    }
  },
  methods:{
    allPost(){
       this.axios.get(this.$hostname+"general_api.php?action=allPost").then((response)=>{
            this.postData=response.data
            console.log(response)
        }).catch(error=>{
            alert(error)
          })
    }
  },
  created(){
    this.allPost()
  }
}
</script>

<style>

</style>