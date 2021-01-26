<template>
<div>
  
  <!-- Navbar -->
  <div style="position:fixed; width:100%">
    <nav :class="{'main-header': drawer}"  class="navbar navbar-expand navbar-black navbar-dark p-0">
     <ul class="navbar-nav d-flex justify-content-between w-100 p-0 m-0">
       <li class="nav-item">
        <a class="nav-link"  @click.stop="drawer = !drawer" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
      </li>
         <li class="nav-item m-1">
        <button style="border:2px solid red"  class="btn text-red btn-light btn-md submit" @click="submitBtn()">Submit</button>
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
  <nav  :class="{'main-header': drawer}" class="navbar navbar-expand navbar-white navbar-light d-flex justify-content-between flex-wrap flex-md-nowrap">

   
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
       
    </ul>

    
   
  </nav>
  </div>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->

 <v-navigation-drawer v-model="drawer" fixed absolute>
        
      <v-list-item>
        <v-list-item-avatar>
          <!-- <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img> -->
          
                   

                        <v-img src="@/assets/images/logo.png" alt="Eduplus Logo"></v-img>

                       
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Eduplus</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      
                <span class="mx-4 text-uppercase">Question list</span>
          
          <!-- start of side bar -->
              <ol type="1" class="ml-4" style="margin-bottom:30vh">

              <div v-for="(subject, index) in quest.j_subject" :key="index">
                  <br>
                  <div style="color:black; margin-top:3%;background:lightgray">{{subject.subject}}</div> 
                  <div v-for="(question, q_index) in quest.j_question" :key="q_index">
                    
                    <li v-if="question.subject_id == subject.subject_id" style="cursor:pointer" 
                   
                    @click="getQuestion(question.instruction, question.question, question.option, question.my_answer) "> 
                        
                          <span v-if="question.my_answer==''" style="color:red">Not Answered</span>
                          <span v-else style="color:green">Answered</span>
                       
                    </li>
                    
                  </div> 
                  
              </div>
                  
               </ol>

            <!-- mobiel sidebar -->
            
          <!-- end of sidebar -->
           
        

       
    </v-navigation-drawer>
  




  <!-- Content Wrapper. Contains page content -->
  <div :class="{'content-wrapper': drawer}" class="pushPageDown2">
    <div class="content h-100" >
      <div id="question_section" >
        {{testMobile}}
        <!-- instruction -->
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
                      <input type="radio" :name="opt.question_id" class="mr-2" @click="changeColor"  :value="opt.option_id" v-model="answer">
                      <span  v-html="opt.options"></span>
                    </li>
                    </div>
                    
                  </div>
                  
                </div>
             </ol>
           </div>

      </div>
     <div class="fixed-bottom bg-primary w-100 pt-4 d-xl-none">
  
                <v-pagination
                 
                  v-model="questionNumber"
                  :length="totalQuestion"
                  @input="mobileQuestion(questionNumber)"
                  :value="questionNumber"
                  :color="pageBTN"
                  :class="questionNumber"
                  :id="questionNumber"
                ></v-pagination>
             
             <!-- Main Footer -->
  <footer :class="{'main-footer-2':drawer}" class="main-footer" >
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">
      Site developed and maintain by <a href="https://www.tectainet.com">Tectainet Technologies</a>
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; {{new Date().getFullYear()}} <a href="https://eduplus.edu.com">Eduplus</a>.</strong> All rights reserved.
  </footer>

     </div>
    
   
        
    <br/><br/>
    </div>
  </div>
  <!-- /.content-wrapper -->



  <!-- Main Footer -->
  <footer :class="{'main-footer-2':drawer}" class="main-footer d-none d-md-block" >
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">
      Site developed and maintain by <a href="https://www.tectainet.com">Tectainet Technologies</a>
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; {{new Date().getFullYear()}} <a href="https://eduplus.edu.com">Eduplus</a>.</strong> All rights reserved.
  </footer>
</div>




</template>

<script>
import {bus} from '../../../main';

export default {
  data(){
      return{
        pageBTN:"green",
         drawer: null,
         questionNumber:1,
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
        timeInterval:null,
        testMobile:null

      }
  },
  computed:{
    changeColor(){
      return true;
       
    }
  },
  methods:{
    getID(){
  console.log(this.quest)
     this.quest=this.$session.get('currentTest');
      this.totalQuestion = this.quest.j_question.length;
      this.totalLeft = this.quest.j_question.length;
      this.timeInterval = this.quest.timeInterval;
   
    },
    mobileQuestion(q_index){
    
      this.instruction = this.quest.j_question[q_index-1].instruction
      this.questionToDisplay = this.quest.j_question[q_index-1].question
      this.options = this.quest.j_question[q_index-1].option
      this.answer = this.quest.j_question[q_index-1].my_answer
      // this.testMobile = this.$vuetify.pagination.ariaLabel.page

      // quest.j_subject
  // quest.j_question
    },
    getQuestion(inst,question,option, my_answer){
      // instruction
      this.instruction = inst
      this.questionToDisplay = question
      this.options = option
      this.answer = my_answer
        if(this.$vuetify.breakpoint.mdAndUp){
      this.drawer = true
        }else{
      this.drawer = false

        }

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

body{
  overscroll-behavior-y: contain;
}
</style>
