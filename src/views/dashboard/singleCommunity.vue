<template>
<div>
  <v-row>
    <div style="text-align:center; min-height:100vh" class="w-100"  v-if="showLoading">
         <v-progress-circular color="black"  :size="100"  indeterminate></v-progress-circular>
       </div>
    <v-card class="mx-auto w-100" flat v-for="(communityData, index) in communityDATA.com_data" :key="index">
    
    <v-img  src="@/assets/images/about.jpg" height="200px"></v-img>
     <v-avatar  class="float-right rounded-circle groupIcon" size="130" tile >
                    <v-img  src="@/assets/images/about.jpg"></v-img>
     </v-avatar>
    <v-card-title> {{communityData.community_name}}</v-card-title>

    <v-card-subtitle>Total Members: <b><span>{{communityDATA.total_member}}</span></b></v-card-subtitle>
    <!-- <i className="material-icons">exit_to_app</i> -->
   
    <v-btn text color="error" v-if="a_member" @click="leaveCommunity(communityData.community_name)"><v-icon class="mr-2">fas fa-sign-out-alt</v-icon> Leave Community</v-btn>
    <v-card-subtitle>Group Descripption</v-card-subtitle>
      <v-card-text >
       {{communityData.community_description}}
      </v-card-text>

    <v-card-actions>
      <div v-if="login_status">
        <div v-if="a_member">
        <v-btn class="mx-2" @click="dialog = true"  color="primary">
          <v-icon>mdi-plus</v-icon>
          Add new Post |
          <small >
          <i color="gray--text">Whats on your mind</i>
          </small>
    </v-btn>

      <!-- <v-btn class="mx-2" fab dark small color="primary">
      <v-icon dark>
        mdi-image
      </v-icon>
    </v-btn> -->

        <!-- <v-btn class="mx-2" fab dark small color="primary">
      <v-icon dark>
        mdi-video
      </v-icon>
    </v-btn> -->
    </div>
    <div v-else>
      <v-btn class="mx-2" @click="joinCommunity(communityData.community_name)"  color="primary">
              <v-icon class="mr-2">mdi-plus</v-icon>
              JOIN COMMUNITY
           
          </v-btn>
    </div>
    </div>

    <div v-else>
      <v-btn class="mx-2" @click="login"  color="primary">
              
              Login to post
           
          </v-btn>
    </div>

     
      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
      <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <div class="post" v-for="(communityDataPost, index) in communityDATA.allPost" :key="index">

         <v-card-text class="p-3" >
          <v-avatar  class="rounded-circle userIcon" size="40" tile >
            <v-img  src="@/assets/images/about.jpg"></v-img>
          </v-avatar>
          <span class="mx-2">{{communityDataPost.member_name}}</span>
          <v-icon>fa-angle-right</v-icon>
          <span class="mx-2">{{communityData.community_name}}</span>
          <hr>
       </v-card-text>
       <v-card-text>
         <span v-html="communityDataPost.text_caption">
          
         </span>
       </v-card-text>
        </div>

      </div>
    </v-expand-transition>
   
  </v-card>
  </v-row>
   
   <v-divider>Related Community</v-divider>


  <!-- MODAL TO COMPOSE MESSAGE -->
  <div class="text-center">
    <v-dialog 
      v-model="dialog"
      width="500"
    >
   

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Whats on your mind
        </v-card-title>

  
    <!-- <v-textarea
      name="input-7-1"
     height="100%"
      label="Type your message here"
      auto-grow
      value=""
    ></v-textarea> -->
   <div class="quill-editor"> 
     <quill-editor ref="myTextEditor" v-model="newPost" > </quill-editor>
  </div>

        <v-divider></v-divider>

        <v-card-actions>
         
           <v-btn
            color="primary"
            text
            @click="savePost()"
          >
            Post
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  </div>
</template>

<script>
import {bus} from '../../main';

export default {
  
  data(){
    return{
      show:true,
      communityDATA:{},
      dialog:false,
      newPost:'',
      login_status:false,
      a_member:false,
      showLoading:false,
    }
  },
  methods:{
    getID(){
      this.showLoading=true
     let communityID={
       'c_id':this.$route.params.community_id
       }
    
      this.axios.post(this.$hostname+"general_api.php?action=singleCommunity", communityID).then((response)=>{
            this.showLoading= false;
            this.communityDATA=response.data
           

            // ch eck if user is login
            if(this.$session.has('user_login')){
              this.login_status=true
              
              // check if user is a member of this community
              for (let index = 0; index < this.communityDATA.allMembers.length; index++) {
                // const element = array[index];
                // alert(this.communityDATA.allMembers[index].user_id)
           
                if (this.communityDATA.allMembers[index].user_id == this.$session.get('user_login').id && this.communityDATA.allMembers[index].community_id ==this.$route.params.community_id ){
                 this.a_member = true
                 break;
                }else{
                  this.a_member = false
                }
          }
      }else{
          this.login_status=false
        //   this.$router.push({path:'/'}).catch(()=>{});
      }

          }).catch(error=>{
            this.showLoading= false;

            alert(error)
          })

     
     
    },
    joinCommunity(communityName){
          this.$swal.queue([{
            title: 'Are you sure you want to join '+communityName,
            // text:id,
            showCancelButton: true,
            // confirmButtonColor: 'success',
            confirmButtonText: 'Join',
            showLoaderOnConfirm: true,
            allowOutsideClick:false,
            preConfirm: () => {
                
                 
                  let userData = {
                    'user_id':this.$session.get('user_login').id,
                    'user_email':this.$session.get('user_login').email,
                    'community_id':this.$route.params.community_id
                    }
                    this.axios.post(this.$hostname+"general_api.php?action=joinCommunity", userData).then((response)=>{
                     
                      if(response.data.response =='success'){
                         this.$router.go()

                         this.a_member = true
                      }
                  
                    }).catch(error=>{
                      alert(error)
                    })
                              
            }
          }])
      

     
    },
     leaveCommunity(communityName){
          this.$swal.queue([{
            title: 'Are you sure you want to leave '+communityName,
            // text:id,
            showCancelButton: true,
            confirmButtonColor: 'red',
            confirmButtonText: 'Leave',
            showLoaderOnConfirm: true,
            allowOutsideClick:false,
            preConfirm: () => {
                
                 
                  let userData = {
                    'user_id':this.$session.get('user_login').id,
                    'user_email':this.$session.get('user_login').email,
                    'community_id':this.$route.params.community_id
                    }
                    this.axios.post(this.$hostname+"general_api.php?action=leaveCommunity", userData).then((response)=>{
                    
                      if(response.data.response =='success'){
                         this.$router.go()

                         this.a_member = false
                      }
                  
                    }).catch(error=>{
                      alert(error)
                    })
                              
            }
          }])
      

     
    },
    login(){
        let currentURL = window.location.href
        this.$session.start()
        this.$session.set('postPage', currentURL)
        window.location = '/login'; 

    },
    savePost(){
      this.dialog = false
     
        let newPost={
          'data':this.newPost,
          'community_id':this.$route.params.community_id,
          'member_id':this.$session.get('user_login').id
          }
    
      this.axios.post(this.$hostname+"general_api.php?action=newPost", newPost).then((response)=>{
          console.log(response)
          if(response.data.response == 'success'){
            this.newPost = ''
            this.getID();
          }
          }).catch(error=>{
            alert(error)
          })
    }
  },
watch:{
  getCID(){
    return this.getID();
  }
},

  computed:{
    getCID(){
      return this.getID()
    }
  },
  created(){
    bus.$emit('showSettings', true);
    this.getCID;
  },
  beforeDestroy (){
    bus.$emit('showSettings', false);

  }
}
</script>

<style scoped>
.groupIcon{
  position: absolute;
  right: 0;
 
  transform: translate(-30%, -50%);
}
</style>