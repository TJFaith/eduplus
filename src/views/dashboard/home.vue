<template>

    <div class="container-fluid mt-3">
      
<div class="row">
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-aqua">
            <div class="inner">
              <h3>{{topRowData.CommunitiesCreated}}</h3>

              <p>Communities Created</p>
            </div>
            <div class="icon">
              <i class="ion fa fa-user-plus"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->

           <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-yellow">
            <div class="inner">
              <h3>{{topRowData.CommunityJoind}}</h3>

              <p>Communities Joind</p>
            </div>
            <div class="icon">
              <i class="ion fa fa-users"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->

        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-green">
            <div class="inner">
              <h3>{{topRowData.bestGrade}}<sup style="font-size: 20px">%</sup></h3>

              <p>Best assessment Grade</p>
            </div>
            <div class="icon">
              <i class="ion fa fa-graduation-cap"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
     
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-red">
            <div class="inner">
              <h3>{{topRowData.myResources}}</h3>

              <p>My Resources</p>
            </div>
            <div class="icon">
              <i class="ion fa fa-file"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
      </div>   

      <div class="row">
          <div class="col-md-12">
          <div class="card-header">
              <h6 class="box-title">Assessment Chart</h6>
            </div>
          
            <div class="box-body">
              <div class="chart">
                <canvas id="lineChart" style="height: 250px; width: 510px;" height="250" width="510"></canvas>
              </div>
            </div>
            
            </div>
      </div>



    </div>




</template>

<script>
    export default {
      data(){
        return{
          topRowData:{},
        }
    },

      methods:{
      getUserData(){
         let userinfo=this.$session.get('user_login');
          
        this.axios.post(this.$hostname+"general_api.php?action=getUserData", userinfo).then((response)=>{
             this.topRowData = response.data;
            }).catch(error=>{
                alert(error)
            })
      }
      },
      created(){
        this.getUserData()

      },

        mounted() {
            
        }
    }
</script>
