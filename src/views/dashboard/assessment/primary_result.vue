<template>

<!-- @foreach ($assesment_history as $assHistory) -->
<div>
<div id="printContentID" v-for="(assHistory, index) in quest.assesment_history" :key="index">

<div class="mianHeader bg-dark">
   
    <h2>{{assHistory.assessmentType}}</h2>
    <hr style="background-color:#fff; width:100%" >
    <h3>RESULT</h3>
</div>

<div class="pageBody">
    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-3">
                <table class="table table-stripped table-dark">
                   

                    <tbody>
                        <tr>
                            <td style="width:20%">Candidate's Name</td>
                            <td >{{user_name }}</td>
                        </tr>
                        <tr>
                            <td>Date and Time:</td>
                            <td>{{assHistory.updated_at}}</td>
                        </tr>
                            

                    </tbody>
                </table>


                <table class="table table-stripped">
                        <thead class="table-dark">
                                <tr>
                                        <th colspan="2">SUBJECT GRADING</th>
                                </tr>
                               
                                
                                <tr>
                                    <td>Subject</td>
                                    <td>Score</td>
                                </tr>
                            </thead>

                            
                   

                        <tbody>
                           
                                <tr  v-for="(ass_staus, index) in quest.assessment_status" :key="index">
                                    <td>{{ass_staus.subject}}</td>
                                    <td>{{ass_staus.score}}</td>
                                </tr>
                           
                        </tbody>

                    </table>

                    <table class="table table-striped">
                        <thead class="table-dark">
                            <tr>
                                    <th colspan="2">TOTAL GRADING</th>
                            </tr>
                           
                            
                            <tr>
                                <td>Subject</td>
                                <td>Score</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>All</td>
                                <td>{{quest.subjectPercentR}} %</td>
                               
                            </tr>
                            
                            
                        </tbody>
                    </table>
                    <div style="marign:5% 0% 5% 0%; text-align:center">
                    <br/><br/>
              
                <br/><br/>
                    <button @click="printResult()" class="btn btn-success print-btn">PRINT <i class="fa fa-print"></i></button>
                    <br><br>
                </div>
            </div>
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
            quest:{},
            user_name:'',
        }
    },
    methods:{
        calculateResult(){
             let tableName = {'tableName':this.$session.get('assessmentSession')}
              
              // CALCULATE RESULT
                this.axios.post(this.$hostname+"primary_api.php?action=primary_result",tableName).then((response)=>{
                    this.quest = response.data
                }).catch(()=>{
                       this.$swal.insertQueueStep({
                          icon: 'error',
                          title: 'Unable to submit result'
                        })
                 });

        },
        printResult(){
         
        var css ='<link rel="stylesheet" href="/css/app.css"/>';
        var printContent = document.getElementById("printContentID");
        var WinPrint = window.open('','','width=900, height=650');
        WinPrint.document.write(printContent.innerHTML);
        WinPrint.document.head.innerHTML = css;
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();

    //    window.print();
        }
    },
    mounted(){
        
    },
    created(){
         this.userData=this.$session.get('user_login');
          this.user_name=this.userData.name
        this.calculateResult();
        // this.quest = this.$session.get('currentTest');
    }
    
 
}
</script>

<style>

</style>