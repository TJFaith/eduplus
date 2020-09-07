<template>
<div>
  <v-row>
    <v-card class="mx-auto" flat>
    <v-img  src="@/assets/images/about.jpg" height="200px"></v-img>
     <v-avatar  class="float-right rounded-circle groupIcon" size="130" tile >
                    <v-img  src="@/assets/images/about.jpg"></v-img>
     </v-avatar>
    <v-card-title> Title of Community</v-card-title>

    <v-card-subtitle>Total Members</v-card-subtitle>
    <v-card-subtitle>Group Descripption</v-card-subtitle>
      <v-card-text >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores animi ducimus nihil, officia aperiam? Aliquam at et ad maxime tempore dignissimos deleniti hic asperiores delectus aut! Deserunt, ullam aliquam.
      </v-card-text>

    <v-card-actions>
      <v-btn text>Share</v-btn>
      <v-btn color="purple" text >Explore</v-btn>
      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <v-btn text>Share</v-btn>
      <v-btn color="purple" text >Explore</v-btn>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </v-row>
   
   <v-divider>Related Community</v-divider>

  <v-row>
  
        <v-col cols="6" md="4">
          
              <v-card color="red" dark class="bg">
            
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="headline" >Biology Community</v-card-title>
                    <v-card-subtitle>group description</v-card-subtitle>
                  </div>

                  <v-avatar  class="ma-3 rounded-circle" size="50" tile >
                    <v-img  src="@/assets/images/about.jpg"></v-img>
                  </v-avatar>
                </div>
              <hr>
                <v-card-actions>
                
                  <v-btn class="mx-4" color="red">
                     <router-link :to="{ name: 'singleCommunity', params: { community_id: 123 }}">
                       <i class="nav-icon fas fa-edit mr-2"></i> Edit
                      </router-link> 
                  </v-btn>
                
                      <v-btn class="mx-4" color="red">
                            <i class="nav-icon fa fa-users mr-2"></i>2k
                      </v-btn>
              
                </v-card-actions>
              </v-card>
            </v-col> 
          
       
    </v-row>
  </div>
</template>

<script>
export default {
  
  data(){
    return{
      show:true,
    }
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