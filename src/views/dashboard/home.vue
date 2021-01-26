<template>

    <div class="container-fluid mt-3">
      
<div class="row">
        <div class="col-lg-4 col-xs-6">
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
        <div class="col-lg-4 col-xs-6">
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

        <div class="col-lg-4 col-xs-6">
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
     
        <!-- <div class="col-lg-3 col-xs-6"> -->
          <!-- small box -->
          <!-- <div class="small-box bg-red">
            <div class="inner">
              <h3>{{topRowData.myResources}}</h3>

              <p>My Resources</p>
            </div>
            <div class="icon">
              <i class="ion fa fa-file"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div> -->
        <!-- </div> -->
        <!-- ./col -->
      </div>   

      <div class="row">
          <div class="col-md-12">
          <div class="card-header d-flex">
            <div>
        

               <h6 class="box-title">Assessment Chart</h6>
            </div>
             
             <div>
         
                <v-dialog
                    v-model="showCalendar"
                    width="300"
          
                  >
                <template  v-slot:activator="{ on, attrs }">
                  <v-btn class="ml-5" text color="red lighten-2" dark v-bind="attrs" v-on="on">
                      <v-icon right dark class="pr-5" > mdi-calendar  </v-icon>
                    {{formatDate()}}
                  </v-btn>
                </template>

     
                    <v-date-picker
                            v-model="picker"
                            type="month"
                            @change="formatDate()"
                          >
                    <v-btn
                          color="primary"
                          text
                          @click="showCalendar = false"
                        >
                      SELECT
                    </v-btn>
                    </v-date-picker>
                </v-dialog>

              
             </div>
             <!-- <div class="ml-5">{{formatDate()}}</div> -->
            </div>
          
            <div class="box-body">
            
                  <v-sparkline
                    :value="value"
                   
                    height="100"
                    padding="24"
                    stroke-linecap="round"
                    smooth
                  >
                    <template v-slot:label="item">
                      {{ item.value }}%
                    </template>
                  </v-sparkline>
                
            </div>
            
            </div>
      </div>



    </div>




</template>

<script>
 
    export default {
      data(){
        return{
          showCalendar:false,
          // picker: new Date().toISOString().substr(0, 10),
          picker: new Date().toISOString().substr(0, 10),
          topRowData:{},
          value: [],
        }
    },

      methods:{
      formatDate(){
        // var month = new Array();
        //   month[0] = "January";
        //   month[1] = "February";
        //   month[2] = "March";
        //   month[3] = "April";
        //   month[4] = "May";
        //   month[5] = "June";
        //   month[6] = "July";
        //   month[7] = "August";
        //   month[8] = "September";
        //   month[9] = "October";
        //   month[10] = "November";
        //   month[11] = "December";
        //  this.picker = month[this.picker.getMonth()];
          var res = this.picker.split("-");
        var dateMonth;
          switch (res[1]) {
            case '01':
              dateMonth = "January";
              break;
            case '02':
              dateMonth = "February";
              break;
            case '03':
              dateMonth = "March";
              break;
            case '04':
              dateMonth = "April";
              break;
            case '05':
              dateMonth = "May";
              break;
            case '06':
              dateMonth = "June";
              break;
            case '07':
              dateMonth = "July";
              break;
            case '08':
              dateMonth = 'August';
              break;
            case '09':
              dateMonth = 'September';
              break;
            case '10':
              dateMonth = 'October';
              break;
            case '11':
              dateMonth = 'November';
              break;
            case '12':
              dateMonth = 'December';
              break;

          }
          this.getAssessmentDate(res[0], res[1]);
          return dateMonth = res[0] + ' - ' + dateMonth
      },
      getUserData(){
         let userinfo=this.$session.get('user_login');
        this.axios.post(this.$hostname+"general_api.php?action=getUserData", userinfo).then((response)=>{
             this.topRowData = response.data;
            }).catch(error=>{
                alert(error)
            })
      },
      getAssessmentDate(selectedYear, selectedMonth){
        let picker = {'selectedYear':selectedYear, 'selectedMonth':selectedMonth, 'user_id': this.$session.get('user_login').id }
        this.axios.post(this.$hostname+"general_api.php?action=selectGrade",picker ).then((response)=>{
          this.value = []
          for (let index = 0; index < response.data.assessment.length; index++) {
           
            this.value.push(response.data.assessment[index]['grade'])
            // console.log(response.data.assessment[index]['grade'])
          }
          
        }).catch(error=>{
          alert(error)
        })
      }
      },
      created(){
        this.getUserData()
        this.formatDate();

      },

        mounted() {
            
        }
    }
</script>
