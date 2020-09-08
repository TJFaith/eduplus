<template>
  <div>
    <app-header/>
      <div>
        <div class="container-fluid mt-16">
          <div class="row toprow">
            <div class="headerTXT">
              <h6>JOIN A</h6>
              <h1><b>CAREER COMMUNITY</b></h1>
              <div class="search">
                <v-form v-model="valid" class="searchComunity">
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
              <router-link to="/career_Communities/feeds">
              <v-icon class="pointer animated pulse" color="white" size=100>fa fa-angle-double-right</v-icon>
            </router-link>
          </div>
        </div>
      </div>
    <app-footer/>
  </div>
</template>

<script>
export default {

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

}
.pointer{
 position:absolute;
 right:0;
transform: translate(-60%,200%);

 
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
}
/* .headerTXT {
  color:#fff;
} */
</style>