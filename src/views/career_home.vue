<template>
<div>
  <div style="text-align:center; min-height:100vh"  v-if="showLoading">
         <v-progress-circular color="black"  :size="100"  indeterminate></v-progress-circular>
       </div>
   <v-card class="mb-5" max-width="67vw" v-for="(postData, index) in postData" :key="index">
       
       <v-card-text class="p-3 bg-black" >
          <v-avatar  class="rounded-circle userIcon" size="40" tile >
            <v-img  src="@/assets/images/about.jpg"></v-img>
          </v-avatar>
          <span class="mx-2">{{postData.member_name}}</span>
          <v-icon color="white">fa-angle-right</v-icon>
          <span class="mx-2">{{postData.community_name}}</span>
          
       </v-card-text>
       <v-card-text v-html="postData.text_caption" class="caption_image">

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
  <div style="text-align:center;"  v-if="showMoreLoading">
         <v-progress-circular color="black"  :size="100"  indeterminate></v-progress-circular>
       </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      show:false,
      login:false,
      postData:[],
       showLoading:false,
       showMoreLoading:false,
       startRange:null,
       endRange:null,
       totalPostNumber:null,
    }
  },
  methods:{
    scroll() {
// document.documentElement.scrollTop, document.body.scrollTop
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset) + window.innerHeight === document.documentElement.offsetHeight
  //  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

  //        this.$router.replace({ name: "career_home", params: {startRange:"2",endRange:"3"}}).then(()=>{
  //            this.getPost()
  //        }).catch(()=>{});
  //  }
        if (bottomOfWindow) {
          // code for endless scroll
          let remain = this.endRange - this.startRange;
          remain = this.totalPostNumber - remain - 1;
          console.log(remain);
      
          if(this.startRange < 1){
            this.startRange = 1
          this.endRange = remain

          }else if (this.startRange > 5){
            this.startRange = this.startRange - 5
          this.endRange = remain
            
          }else if (this.startRange >1 && this.startRange <= 5){
            this.startRange = 1
            this.endRange = this.endRange - 5

          }
   
                  this.$router.replace({ name: "career_home", params: {startRange:this.startRange,endRange:this.endRange}}).then(()=>{
             this.getPost()
             
         }).catch(()=>{});
         
        }  	
    }
    },
    totalPost(){
         this.axios.get(this.$hostname+"general_api.php?action=totalPost").then((response)=>{
           this.totalPostNumber = response.data
           this.startRange = this.totalPostNumber - 5
           this.endRange = this.totalPostNumber
           if (this.startRange <= 0){
             this.startRange = 1
           }
            this.$router.replace({ name: "career_home", params: {startRange:this.startRange,endRange:this.totalPostNumber}}).then(()=>{
                  this.allPost();              
         }).catch(()=>{});
        
         }).catch(error=>{
           alert(error)
         })

    },
    getPost(){
      this.showMoreLoading = true;
        let dataRange ={
           'startRange':this.$route.params.startRange,
           'endRange':this.$route.params.endRange
           }
         this.axios.post(this.$hostname+"general_api.php?action=allPost", dataRange).then((response)=>{
      

           for ( var index=0; index<response.data.length; index++ ) {
              this.postData.push(response.data[index])
              console.log(response)
           }
      this.showMoreLoading = false;
          

         }).catch(error=>{
      this.showMoreLoading = false;
           alert(error)
         })
    },
    allPost(){
         let dataRange ={
           'startRange':this.$route.params.startRange,
           'endRange':this.$route.params.endRange
           }
     
      this. showLoading =true;
       this.axios.post(this.$hostname+"general_api.php?action=allPost", dataRange).then((response)=>{
      this.showLoading =false;
   
            this.postData=response.data
           
        }).catch(error=>{
      this. showLoading =false;
            alert(error)
          })
    }
  },
  mounted(){
      this.totalPost();
    this.scroll()
       

    // this.allPost()9
  },
  
  created(){
  

  },
  destroyed() {
 window.onscroll = null; 
}
}
</script>

<style>

</style>