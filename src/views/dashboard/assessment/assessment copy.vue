<template>
<div>
  
  <!-- Navbar -->
  <div style="position:fixed; width:100%">
  <nav style="z-index:100" class="main-header navbar navbar-expand navbar-white navbar-light d-flex justify-content-between flex-wrap flex-md-nowrap">

   
    <ul class="navbar-nav d-flex  ">
      <!-- <li class="nav-item d-md-none">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a> 
      </li> -->
            <li class="nav-item pt-2 mr-5">
                <b>Total Questions:</b>
                
                <span>
                    {{totalQuestion}}
                </span>
            </li>
            
            <li class="nav-item  pt-2 mr-5">
                    <b>Answered:</b> <span id="questionAnswerd">{{totalAnswerd}}</span>
            </li>
           
            <li class="nav-item  pt-2 mr-5">
                    <b>Questions Left:</b> <span id="questionRemain">{{totalLeft}}</span>
            </li>
             
       
    </ul>
    <ul class="navbar-nav d-flex">
      <li class="nav-item">
        <app-timer :timeInterval=timeInterval></app-timer>
      </li>
       <li class="nav-item  user-panel ">
                    <a href="#" class="nav-link">
                         {{userData.name.slice(0, 5)}}
                      <i class="nav-icon ">
                        <img v-if="userData.user_icon" :src="userData.user_icon" class="img-circle elevation-2-small" alt="User Image">
                        <img v-else src="@/assets/images/profiel.png" class="img-circle elevation-2-small" alt="User Image">

                        
                        </i>
                     
                    </a>
                    
                  </li>
    </ul>

    
   
  </nav>
  </div>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4" style="position:fixed">
    <!-- Brand Logo -->
    <a href="#" class="brand-link">
      <img src="@/assets/images/logo.png" alt="Eduplus Logo" class="brand-image"
           style="opacity: .8">
      <span class="brand-text font-weight-light">Eduplus</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar Menu -->
      <nav style="max-height:90vh">
        <ul class="nav nav-pills nav-sidebar flex-column" role="menu" data-accordion="false">
                <p class="brand-link">Question list</p>
          
        
        
            <li id="fetch_side_bar">
          <!-- start of side bar -->
              <ol type="1">

              <div v-for="(subject, index) in quest.j_subject" :key="index">
                  <br>
                  <div style="color:black; margin-top:3%;background:lightgray">{{subject.subject}}</div> 
                  <div v-for="(question, q_index) in quest.j_question" :key="q_index">
                    
                    <li v-if="question.subject_id == subject.subject_id" style="cursor:pointer" @click="getQuestion(question.instruction, question.question, question.option, question.my_answer)"> 
                        
                          <span v-if="question.my_answer==''" style="color:red">Not Answered</span>
                          <span v-else style="color:#fff">Answered</span>
                       
                    </li>
                    
                  </div> 
                  
              </div>
                  
               </ol>

            <!-- mobiel sidebar -->
            
          <!-- end of sidebar -->
           
            </li>
        
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>





  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper pushPageDown2">
    <div class="content overflow-auto h-100" >
      <div id="question_section">
        <!-- instruction -->
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam quasi eius, fugit nemo aliquam consequuntur sed maxime sequi dicta numquam vitae optio quo animi ut. Nulla adipisci soluta vero.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus qui cum voluptas saepe soluta, sint tenetur tempora quisquam aperiam distinctio id, ea corrupti ipsa ad incidunt praesentium ducimus, deleniti et!

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam quasi eius, fugit nemo aliquam consequuntur sed maxime sequi dicta numquam vitae optio quo animi ut. Nulla adipisci soluta vero.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus qui cum voluptas saepe soluta, sint tenetur tempora quisquam aperiam distinctio id, ea corrupti ipsa ad incidunt praesentium ducimus, deleniti et!

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam quasi eius, fugit nemo aliquam consequuntur sed maxime sequi dicta numquam vitae optio quo animi ut. Nulla adipisci soluta vero.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus qui cum voluptas saepe soluta, sint tenetur tempora quisquam aperiam distinctio id, ea corrupti ipsa ad incidunt praesentium ducimus, deleniti et!
        <div class="mb-3" v-for="(inst, i) in instruction" :key="i"> <div><b><span v-html="inst.instruction"></span></b></div></div>
        <hr>
        <!-- main question -->
           <div class="mt-3" v-html="questionToDisplay"></div>
           <!-- objective -->
           <div class="objective">
               <ol type="A">
                <div v-for="(opt, o_index) in options" :key="o_index">
                  <div class="option w-100">
                    <div @click="selectedOption(opt.option_id, opt.question_id)">
                      <!-- v-html="opt.options" -->
                    <li >
                      <input type="radio" :name="opt.question_id" class="mr-2"  :value="opt.option_id" v-model="answer">
                      <span  v-html="opt.options"></span>
                    </li>
                    </div>
                    
                  </div>
                  
                </div>
             </ol>
           </div>

      </div>
     
    
        <button  class="btn btn-dark btn-lg submit" @click="submitBtn()">Submit</button>
   
        
    <br/><br/>
    </div>
  </div>
  <!-- /.content-wrapper -->



  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">
      Site developed and maintain by <a href="https://www.tectainet.com">Tectainet Technologies</a>
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2019 <a href="https://eduplus.edu.com">Eduplus</a>.</strong> All rights reserved.
  </footer>
</div>




</template>

<script>
import {bus} from '../../../main';

export default {
  data(){
      return{
        quest:{},
        instruction:'',
        questionToDisplay:"",
        options:{},
        answer:"",
        currentQuestion:{},
        test:{},

        totalQuestion:null,
        totalAnswerd:0,
        totalLeft:0,

        userData:{},
        user_name:'',
        timerCountDown:null,
        timeInterval:null

      }
  },
  methods:{
    getID(){
  
     this.quest=this.$session.get('currentTest');
      this.totalQuestion = this.quest.j_question.length;
      this.totalLeft = this.quest.j_question.length;
      this.timeInterval = this.quest.timeInterval;
   
    },
    getQuestion(inst,question,option, my_answer){

      // instruction
      this.instruction = inst
      this.questionToDisplay = question
      this.options = option
      this.answer = my_answer
    },
   selectedOption(optionID, q_ID){
     
      for (let index = 0; index < this.quest.j_question.length; index++) {
          // const element = array[index];
          if(this.quest.j_question[index].question_id== q_ID){
            this.quest.j_question[index].my_answer = optionID
          }
        }

     let myAnswer = {
       'answer':optionID,
       'questionID':q_ID,
       'tableName':this.$session.get('assessmentSession')
     }
    
    //  update answer 
    this.axios.post(this.$hostname + 'junior_api.php?action=update_answer', myAnswer).then((respons)=>{
  
     this.totalAnswerd = respons.data.q_answer
    this.totalLeft = respons.data.q_left
    }).catch(error=>{
      this.test=error
    });
   },

//Submit questions
submitBtn(){
let title2
  // stopTimeFunction();
  if(this.totalLeft > 0){
    title2 = 'Do you really want to submit your answer. You still have '+ this.totalLeft +' questions left';
   
  }else{
    title2 ='Submit answers?'
  }

  this.answerLoader(title2, "You won't be able to revert this once you proceed!", true);

},


  //  submite for final assessment 
  answerLoader(title2, text2, boolProperty){
  
    this.$swal.queue([{
      title: title2,
      text:text2,
      showCancelButton: boolProperty,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Proceed to Result',
      showLoaderOnConfirm: boolProperty,
      allowOutsideClick:false,
      preConfirm: () => {
           
             this.$session.set('currentTest',this.quest)
              window.location = '/result'; 
      }
    }])
    }
  },
  
  mounted(){
    // prevent reload
  window.addEventListener('keydown', function(e) {
    if((e.which || e.keyCode) == 116 || (e.which || e.keyCode == 82)){
      e.preventDefault();
  }
});
    

  },
  created(){
       if(!this.$session.has('user_login') && !this.$session.get('assessmentSession')){
     this.$router.push({path:'/'}).catch(()=>{});
        
         }else if(this.$session.has('user_login') && !this.$session.get('assessmentSession')){
          this.$router.push({path:'/dashboard'}).catch(()=>{});
         }else{
          this.userData=this.$session.get('user_login');
          this.user_name=this.userData.name
      this.getID();
     
         }
         bus.$on('timer',(data)=>{
                
             this.timerCountDown = data.rhours + data.rminutes + data.rseconds;
             if(this.timerCountDown == '000000'){
                  alert('Your allocated time is up');
                    this.$session.set('currentTest',this.quest)
                    window.location = '/result'; 
                }

            })
  }
}
</script>

<style scoped>
#question_section{
  padding-top:6rem;
  margin:3rem;
  min-height:60vh
}
.option{
  display: inline-block;
  
}
.mobile-sidebar{
  position: fixed;
  background-color: darkslategray;
}
</style>
