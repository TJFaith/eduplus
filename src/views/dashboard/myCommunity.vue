<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>