<template>
  <div>
    <app-header/>

    <div class="container">
      <div class="c_header">
        <div class="row">
          <div class="col-md-5 offset-md-7 c_header_text1">
            <h1 class="text-muted text-center">View various Certification centers</h1>
              <hr>
            <p class="text-muted text-justify">We have over 10,000 certification centers on our database <br>Whatever be your career path just select from the certification category on our plathform then click on the certification links where you can either take certifid course online or physically depending on the orgaination.</p>
          </div>
        </div>
      </div>
    </div>
      <div class="row m-0 p-0" >
        <!-- SHOW ON MOBILE -->
         <div class="input-group d-lg-none d-md-none w-80 fixed-bottom">
        <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-search"></i></span>
        </div>
            <input class="form-control" @keyup="filter_search()" v-model="search" type="text" name="mobileNumber" id="search" placeholder="Filter Certification Centers" >


              <div class="input-group-prepend">
                <select name="" id="search" @change="filter_search()" v-model="search_category"  class="text-muted form-control rounded-0" style="cursor:pointer">
                  <option  value="all" selected>All</option>
                  <option v-for="(category, index) in c_category" :key="index"  :value="{id:category.c_ID, text:category.c_name}">{{category.c_name}}</option>
                </select>
              </div>
    </div>

    <!-- SHOW ON DESKTOP -->
        <div class="overflow-auto sideCategory col-md-2 d-none d-lg-block d-md-block" >
           <div class="input-group my-3 w-100">
              <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fa fa-search"></i></span>
              </div>
                <input @keyup="filter_search()" v-model="search" class="form-control" type="text" name="mobileNumber" id="search" placeholder="Filter Certification Centers" >
           </div>
        <select class="form-control" size="100" style="height:100vh"  @change="filter_search()" v-model="search_category" >
            <option  value="all" selected>All</option>
            <option v-for="(category, index) in c_category" :key="index" :value="{id:category.c_ID, text:category.c_name}">{{category.c_name}}</option>
        </select>
      </div>

      <!-- all certification -->
      <!-- d-flex flex-wrap -->
       <div class="col-8 d-flex flex-wrap justify-space-between">

         <!-- start of certification  list -->
         <div v-for="(certification, index) in certification_info" :key="index" class="m-3">
         <v-card  max-width="344" flat class="shadow-sm">
          <v-list-item three-line  @click.stop="showDetails(certification)" style="cursor:pointer">
             <v-list-item-avatar tile size="80" color="grey">
                <v-img v-if="certification.c_logo == 'undefined'" class="elevation-6" alt="" src="https://cdn.nohat.cc/thumb/f/720/comvecteezy404155.jpg"></v-img>
                <v-img v-else class="elevation-6" alt="" :src="certification.c_logo"></v-img>
             </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">
                {{certification.c_title}}
              </v-list-item-title>
              <v-list-item-subtitle><small><a target="_blank" :href="certification.c_webAddress">{{certification.c_webAddress}}</a></small></v-list-item-subtitle>
        <v-list-item-subtitle>{{certification.c_description}}</v-list-item-subtitle>
        <b> <small class="text-muted">Last updated {{certification.updated_at}} ago</small></b>
        </v-list-item-content>

     
    </v-list-item>

   <v-card-actions>
      <v-list-item>
        <!-- <v-list-item-avatar color="grey darken-3">
          <v-img class="elevation-6" alt="" src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
        </v-list-item-avatar> -->

        <v-list-item-content>
          <v-list-item-title> </v-list-item-title>
        </v-list-item-content>
        <v-row
          align="center"
          justify="start"
        >

      
        <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <a :href="certification.c_facebook" v-bind="attrs" v-on="on">
          <v-icon class="mr-1">
            fab fa-facebook
          </v-icon>
        </a>
      </template>
      <span v-if="certification.c_facebook != ''">{{certification.c_facebook}}</span>
      <span v-else>No Facebook Address Found</span>
    </v-tooltip>
       
            <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <a :href="certification.c_twitter" v-bind="attrs" v-on="on">
          <v-icon class="mr-1">
            fab fa-twitter
          </v-icon>
        </a>
      </template>
      <span v-if="certification.c_twitter != ''">{{certification.c_twitter}}</span>
      <span v-else>No twitter Address Found</span>
    </v-tooltip>
          
             <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <a :href="certification.c_instgram" v-bind="attrs" v-on="on">
          <v-icon class="mr-1">
            fab fa-instagram
          </v-icon>
        </a>
      </template>
      <span v-if="certification.c_instgram != ''">{{certification.c_instgram}}</span>
      <span v-else>No Instagram Address Found</span>
    </v-tooltip>

       <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <a :href="certification.c_youtube" v-bind="attrs" v-on="on">
          <v-icon class="mr-1">
            fab fa-youtube
          </v-icon>
        </a>
      </template>
      <span v-if="certification.c_youtube != ''">{{certification.c_youtube}}</span>
      <span v-else>No youtube Address Found</span>
    </v-tooltip>


        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
  </div>
  <!-- end of certification list -->
         <div style="text-align:center; min-height:100vh; width:100%"  v-if="showMoreLoading">
         <v-progress-circular color="black"  :size="50"  indeterminate></v-progress-circular>
       </div>
      </div>
       

      </div>

      <!-- individual records -->
       <v-dialog
      v-model="dialog"
      max-width="890"
    >
      <v-card>
         <v-list-item three-line>
             <v-list-item-avatar tile size="80" color="grey">
                <v-img v-if="certification_individual.c_logo == 'undefined'" class="elevation-6" alt="" src="https://cdn.nohat.cc/thumb/f/720/comvecteezy404155.jpg"></v-img>
                <v-img v-else class="elevation-6" alt="" :src="certification_individual.c_logo"></v-img>
             </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title style="white-space:normal" class="headline">
                <!-- {{certification_individual.c_title}} -->
              </v-list-item-title>
              <v-list-item-subtitle><small><a target="_blank" :href="certification_individual.c_webAddress">{{certification_individual.c_webAddress}}</a></small></v-list-item-subtitle>
        <b> <small class="text-muted">Last updated {{certification_individual.updated_at}} ago</small></b>
        </v-list-item-content>

     
    </v-list-item>
     
        <v-card-title class="headline">
          {{ certification_individual.c_title }}
        </v-card-title>

        <v-card-text>
         {{certification_individual.c_description}}
        </v-card-text>

        <v-card-actions>
      <v-list-item>
      
        <v-row
          align="center"
          justify="start"
        >

      
        <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <a :href="certification_individual.c_facebook" v-bind="attrs" v-on="on">
          <v-icon class="mr-1">
            fab fa-facebook
          </v-icon>
        </a>
      </template>
      <span v-if="certification_individual.c_facebook != ''">{{certification_individual.c_facebook}}</span>
      <span v-else>No Facebook Address Found</span>
    </v-tooltip>
       
            <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <a :href="certification_individual.c_twitter" v-bind="attrs" v-on="on">
          <v-icon class="mr-1">
            fab fa-twitter
          </v-icon>
        </a>
      </template>
      <span v-if="certification_individual.c_twitter != ''">{{certification_individual.c_twitter}}</span>
      <span v-else>No twitter Address Found</span>
    </v-tooltip>
          
             <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <a :href="certification_individual.c_instgram" v-bind="attrs" v-on="on">
          <v-icon class="mr-1">
            fab fa-instagram
          </v-icon>
        </a>
      </template>
      <span v-if="certification_individual.c_instgram != ''">{{certification_individual.c_instgram}}</span>
      <span v-else>No Instagram Address Found</span>
    </v-tooltip>

       <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <a :href="certification_individual.c_youtube" v-bind="attrs" v-on="on">
          <v-icon class="mr-1">
            fab fa-youtube
          </v-icon>
        </a>
      </template>
      <span v-if="certification_individual.c_youtube != ''">{{certification_individual.c_youtube}}</span>
      <span v-else>No youtube Address Found</span>
    </v-tooltip>


        </v-row>
      </v-list-item>
    </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- end of individual records -->
    <app-footer/>
      
  </div>
</template>

<script>

export default {
  data(){
    return{
      search:'',
      search_category:'',
      c_category:{},
      certification_info:[],
      certification_individual:[],
      showMoreLoading:false,
       startRange:null,
       endRange:null,
      totalPostNumber:null,
       dialog: false,
    }
  },
methods:{
   scroll() {
// document.documentElement.scrollTop, document.body.scrollTop
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset) + window.innerHeight === document.documentElement.offsetHeight
  //  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

  //        this.$router.replace({ name: "certification", params: {startRange:"2",endRange:"3"}}).then(()=>{
  //            this.getPost()
  //        }).catch(()=>{});
  //  }
        if (bottomOfWindow && this.showMoreLoading == false) {
          // code for endless scroll
          let remain = this.endRange - this.startRange;
          remain = this.totalPostNumber - remain - 1;
      
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
         
            this.$router.replace({ name: "certification", params: {startRange:this.startRange,endRange:this.endRange}}).then(()=>{
             this.AllCertification()
             
         }).catch(()=>{});
         
        }  	
    }
    },
     AllCertification(){
      this.showMoreLoading = true;
        let dataRange ={
           'startRange':this.$route.params.startRange,
           'endRange':this.$route.params.endRange
           }
         this.axios.post(this.$hostname+"general_api.php?action=AllCertification", dataRange).then((response)=>{
           for ( var index=0; index<response.data.length; index++ ) {
              this.certification_info.push(response.data[index]);
         

           }
          this.showMoreLoading = false;
         }).catch(error=>{
      this.showMoreLoading = false;
      this.AllCertification()
      error
          //  alert(error)
         })
    },

   
      totalCertificationPost(){
         this.axios.get(this.$hostname+"general_api.php?action=totalCertificationPost").then((response)=>{
         
           this.totalPostNumber = response.data
           this.startRange = this.totalPostNumber - 10
           this.endRange = this.totalPostNumber
           if (this.startRange <= 0){
             this.startRange = 1
           }
            this.$router.replace({ name: "certification", params: {startRange:this.startRange,endRange:this.totalPostNumber}}).then(()=>{
                  this.allPost();              
         }).catch(()=>{});
        
         }).catch(error=>{
           alert(error)
         })

    },
    showDetails(certification_array){
      this.certification_individual = certification_array
      this.dialog = true;
      
    },
  getAllCategory(){
      this.axios.get(this.$hostname+"general_api.php?action=c_category").then((response)=>{
                this.c_category=response.data   
      }).catch(error=>{alert(error);
       });
   },
      filter_search(){
          if(this.search.category_id ==""){
            this.search.category_id =0;
            this.certification_info = []
            this.AllCertification()
          }
          console.log(this.search_category)
          let filter_value = {'c_id':this.search_category.id, 'c_value':this.search}
          this.axios.post(this.$hostname+"general_api.php?action=search_filter", filter_value).then((response)=>{
            this.certification_info=response.data
          }).catch(error=>{
            alert(error)
          })
        }
},
mounted(){
    this.totalCertificationPost()
    this.scroll()
  
  },
created(){
  this.AllCertification()
  this.getAllCategory();
},
destroyed() {
 window.onscroll = null; 
}
   
}

</script>

<style scoped>
.cert_category{
  height: 100vh;
}

.c_header{
  transform: translate(0,10%);
  background-repeat: no-repeat;
  background-position: left;
  /* background-attachment:fixed; */
  /* background-size: contain; */
  background-image: url('~@/assets/images/certification.png');
  min-height: 100vh;
}
.c_header_text1{
  transform: translate(0,10rem);
}

@media screen and (max-width:768px) {
  .c_header_text1 {
    border-top: 2px solid #008BC4;
    border-bottom:2px solid #008BC4;
    background-color:rgba(0, 0, 0,.8);
    color:#fff !important;
    margin:0%;
    padding:5%;
  }

  .certification_icon{
    min-width:20%;
  }

  .sideCategory{
    height:100vh;
    position: fixed;
  }

}
</style>