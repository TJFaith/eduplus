
<template>
    <div class="container-fluid mt-3">

      
        <div class="row justify-content-center">
            <div class="col-lg-6 col-xs-9">
          <!-- small box -->
          <div class="small-box bg-green">
            <div class="inner">
              

              <p>Primary School Assessment</p>
              <!-- <h3>15 <span>Questions</span></h3> -->
            </div>
            <div class="icon">
              <i class="ion fa fa-book"></i>
            </div>
            <a href="#" @click="[showJunior=false, show = !show]" class="btn takeAssessBtn small-box-footer">Take Assessment <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->

        <div class="col-lg-6 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-red">
            <div class="inner">
                <p>Junior School Assessment</p>
              <!-- <h3>15 <span>Questions</span></h3> -->

              
            </div>
            <div class="icon">
              <i class="ion fa fa-book"></i>
            </div>
            <a href="#" @click="[show=false, showJunior = !showJunior]" class="small-box-footer">Take Assessment <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->

            
        </div>
<hr>
    <!-- SHOW DETAILS -->
    <!-- For primary school -->
        <div style="margin-top:5px">
        
          <transition name="fadePrimary">
            <div v-if="show"  class="row justify-content-center">
            
            <div class="col-lg-6 col-xs-6">
               <div class="small-box bg-aqua text-center">
                 <div class="card-header"><h4 id="primary_assessmentType">PRACTICE COMMON ENTRANCE ASSESSEMNT</h4></div>

                    <div class="card-bod">
                      <p>
                        <span><i class="fa fa-question"></i></span>
                        5 QUESTIONS / SUBJECT    <br/>
                        <span><i class="fa fa-clock"></i></span>
                        1 Hour</p>

                        <button @click="primary_optionAlert()" class="btn btn-danger">Start Test</button>
                  <br/> <br>
                    </div>

               </div>
            </div>


            <div class="col-lg-6 col-xs-6" >
               <div class="small-box bg-aqua text-center">
                 <div class="card-header"><h4>TAKE COMMON ENTRANCE EXAM</h4></div>

                    <div class="card-bod">
                      <p>
                        <span><i class="fa fa-question"></i></span>
                        5 QUESTIONS / SUBJECT    <br/>
                        <span><i class="fa fa-clock"></i></span>
                        20 Minutes</p>
 <!-- @click="alertMsg" -->
                        <button @click="alertMsg" class="btn btn-danger">Start Exam</button>
                  <br/> <br>
                    </div>

               </div>
            </div>
            </div>
          </transition>
        </div>
<!-- ====================================================================== -->
 <!-- SHOW DETAILS -->
    <!-- For junior secondary school school -->
        <div style="margin-top:5px">
        
          <transition name="fadeJunior">
            <div v-if="showJunior"  class="row justify-content-center">
            
            <div class="col-lg-6 col-xs-6">
               <div class="small-box bg-gray text-center">
                 <div class="card-header">
                   <h4 id="assessmentType">PRACTICE FOR JUNIOR SECONDARY ASSESSEMNT</h4></div>

                    <div class="card-bod">
                      <p>
                        <span><i class="fa fa-question"></i></span>
                        5 QUESTIONS / SUBJECT    <br/>
                        <span><i class="fa fa-clock"></i></span>
                        1 Hour</p>

                        <button @click="optionAlert" class="btn btn-danger">Start Test</button>
                  <br/> <br>
                    </div>

               </div>
            </div>


            <div class="col-lg-6 col-xs-6" >
               <div class="small-box bg-gray text-center">
                 <div class="card-header"><h4>TAKE JUNIOR SECONDARY EXAM</h4></div>

                    <div class="card-bod">
                      <p>
                        <span><i class="fa fa-question"></i></span>
                        5 QUESTIONS / SUBJECT    <br/>
                        <span><i class="fa fa-clock"></i></span>
                        20 Minutes</p>

                        <button @click="alertMsg" class="btn btn-danger">Start Exam</button>
                                          <br/> <br>
                    </div>

               </div>
            </div>
            </div>
          </transition>
        </div>
    
    </div>


</template>


<script>
import $ from 'jquery'
    export default {
      data(){
         
        return{
          show:false,
          showJunior:false,
          quest:{}
          // userQuestions:{}
        }
      },
     methods:{
       alertMsg:function(){
        this.$swal.fire({
           icon: 'info',
          title: 'Notify',
          text: 'No exam yet, please check back latter!'
          // footer: '<a href>Why do I have this issue?</a>'
        });
       },


// Junior School
       optionAlert(){
          this.$swal.fire({
            title: 'Are you ready to proceed?',
            text: "You won't be able to revert this once started!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Proceed to Assessment'
              }).then((result) => {
                if (result.value) {
                  this.retriveQuestion()
                }
            })
       },
        //  FUNCTION TO LOAD QUESTIONS
         retriveQuestion(){
          
              let sessionData=this.$session.get('user_login');
         
        //   //  create question 
            
        let assessmentData = {
          'assessmentType':$('#assessmentType').html(),
          'user_id': sessionData.id
          };
          this.axios.post(this.$hostname+"junior_api.php?action=generateTableName",assessmentData).then((response)=>{
   
              this.$session.set('assessmentSession', response.data)
             
              
            let tableName = {'tableName':this.$session.get('assessmentSession')}
            this.axios.post(this.$hostname + 'junior_api.php?action=junior_question', tableName ).then((response)=>{ 
                this.quest=response.data;
                this.$session.set('currentTest', this.quest)
                console.log(this.quest)
                 let params = 'scrollbars=no,resizale=no, status=no,location=no,toolbar=no,menubar=no, fullscreen=yes,width='+screen.width+',height='+screen.height+',left=0,top=0,';
                open('/assessment','', params);
                
            }).catch(error=>{
              alert(error);
            })


           }).catch(error=>{
             alert(error)
           });

         },
       
         
// =====================================================================
    //  Primary school
        primary_optionAlert(){
          this.$swal.fire({
            title: 'Are you ready to proceed?',
            text: "You won't be able to revert this once started!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Proceed to Assessment'
              }).then((result) => {
                if (result.value) {
                  this.primary_retriveQuestion()
                }
            })
       },
        //  FUNCTION TO LOAD QUESTIONS
         primary_retriveQuestion(){
          
              let sessionData=this.$session.get('user_login');
         
        //   //  create question 
            
        let assessmentData = {
          'assessmentType':$('#primary_assessmentType').html(),
          'user_id': sessionData.id
          };
          this.axios.post(this.$hostname+"primary_api.php?action=generateTableName",assessmentData).then((response)=>{
   
              this.$session.set('assessmentSession', response.data)

            let tableName = {'tableName':this.$session.get('assessmentSession')}
            this.axios.post(this.$hostname + 'primary_api.php?action=primary_question', tableName ).then((response)=>{ 
                this.quest=response.data;
                this.$session.set('currentTest', this.quest)
               

                 let params = 'scrollbars=no,resizale=no, status=no,location=no,toolbar=no,menubar=no, fullscreen=yes,width='+screen.width+',height='+screen.height+',left=0,top=0,';
                open('/primary_assessment','', params);
                
            }).catch(error=>{
              alert(error);
            })


           }).catch(error=>{
             alert(error)
           });

         }
     },
        mounted() {
          
        },
        created(){
       
        }
    }
  
</script>


