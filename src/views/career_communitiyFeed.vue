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

          <v-list-item  link >
           <v-list-item-avatar>
              <img src="@/assets/images/about.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Biology Community</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        

          
        </v-list>
      </v-navigation-drawer>
  </div>

  <v-container class="mainPage">
     <v-card ml-5  max-width="67vw">
       <v-card-row>
          <v-avatar  class="rounded-circle userIcon" size="40" tile >
            <v-img  src="@/assets/images/about.jpg"></v-img>
          </v-avatar>
          <span>Username</span><v-icon>fa fa-arrow-right</v-icon>
          
       </v-card-row>
      
    <v-img  class="white--text align-end" height="200px" src="@/assets/images/about.jpg" >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-container>

        <!-- END -->
    <app-footer/>
  </div>
</template>

<script>
export default {
    computed: {
    mini() {
       return this.$vuetify.breakpoint.smAndDown;
}

},
created(){
    console.log(this.mini)
}
}
</script>

<style>
  .mainPage{
    margin-top: 20vh;
  }

  .userIcon{

}

 
</style>