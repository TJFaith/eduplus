<template>
<div>
  <v-row>
    <v-card class="mx-auto w-100" flat v-for="(communityData, index) in communityDATA.com_data" :key="index">
    <v-img  src="@/assets/images/about.jpg" height="200px"></v-img>
     <v-avatar  class="float-right rounded-circle groupIcon" size="130" tile >
                    <v-img  src="@/assets/images/about.jpg"></v-img>
     </v-avatar>
    <v-card-title> {{communityData.community_name}}</v-card-title>

    <v-card-subtitle>Total Members: <b><span>{{communityDATA.total_member}}</span></b></v-card-subtitle>
    <v-card-subtitle>Group Descripption</v-card-subtitle>
      <v-card-text >
       {{communityData.community_description}}
      </v-card-text>

    <!-- <v-card-actions>
      <v-btn text>Share</v-btn>
      <v-btn color="purple" text >Explore</v-btn>
      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions> -->

   
  </v-card>
  </v-row>
   
   <v-divider>Related Community</v-divider>


  </div>
</template>

<script>
import {bus} from '../../main';

export default {
  
  data(){
    return{
      show:true,
      communityDATA:{},
    }
  },
  methods:{
    getID(){
     let communityID={'c_id':this.$route.params.community_id}
      this.axios.post(this.$hostname+"general_api.php?action=singleCommunity", communityID).then((response)=>{
            this.communityDATA=response.data
          }).catch(error=>{
            alert(error)
          })

    },
  },
  created(){
    bus.$emit('showSettings', true);
    this.getID();
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