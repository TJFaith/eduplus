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
      <div class="row m-0">
        <!-- SHOW ON MOBILE -->
         <div class="input-group mx-3 d-lg-none d-md-none w-100">
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
      <div class="col-md-9 d-flex flex-wrap">
        <div v-for="(certification, index) in certification_info" :key="index" class="m-2">
          <!-- start -->
          <div class="card-deck">
            <div class="card" style="width:13.1rem; min-height:27rem">
              <img style="object-fit:cover; height:10rem; width:13rem" :src="certification.c_logo" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{certification.c_title}}</h5>
                <p class="card-text">{{certification.c_description}}</p>
                <hr>
                <ul class="list-inline text-center">
                            <li class="list-inline-item">
                                <a :href="certification.c_facebook">
                                <i class="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                   <a :href="certification.c_twitter">
                                    <i class="fab fa-twitter"></i>
                                   </a>
                            </li>
                            <li class="list-inline-item">
                                  <a :href="certification.c_instagram">
                                <i class="fab fa-instagram"></i>
                                  </a>
                                </li>
                            <li class="list-inline-item">
                                  <a :href="certification.c_youtube">
                                <i class="fab fa-youtube"></i>
                                  </a>
                                </li>
                        </ul>
                        <div class="text-center">
                           <p class="card-text btn btn-light bg-light text-muted">
                             <a :href="certification.c_webAddress">View</a>
                            </p>
                <p class="card-text">
                  <small class="text-muted">Last updated {{certification.updated_at}} ago</small>
                </p>
                        </div>
               
              </div>
            </div>
            
          
              </div>
          <!-- end -->
        </div>
        <!-- {{certification_info}} -->
      </div>
      </div>
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
      certification_info:{},
    }
  },
methods:{
    AllCertification(){
    
        this.axios.get(this.$hostname+"general_api.php?action=AllCertification").then((response)=>{
            this.certification_info=response.data
              
             }).catch(error=>{
                alert(error);
             
            })
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
          }
          let filter_value = {'c_id':this.search_category.id, 'c_value':this.search}
          this.axios.post(this.$hostname+"general_api.php?action=search_filter", filter_value).then((response)=>{
            this.certification_info=response.data
          }).catch(error=>{
            alert(error)
          })
        }
},
created(){
  this.AllCertification()
  this.getAllCategory();
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