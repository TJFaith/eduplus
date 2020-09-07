<?php 
use Illuminate\Database\Schema\Blueprint;
use Illuminate\support\Facades\Schema;
use Illuminate\support\Facades\Collection;

use Illuminate\Database\Capsule\Manager as Capsule;

use Models\subject;
use Models\question;
use Models\instruction;
use Models\option;

class juniorQueryController
{
    // Generate id
    private function generateId(){
       // CODE TO GENERATE ID
        $token = 'qwertzuiopasdfghjklyxcvbnmABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz';
        $token = str_shuffle($token);
        $token = substr($token,  0,  2);
        $current_date = date('Ymd');
        return $token = $token.$current_date;
    }

    // create question table
    public function generateTableName($data){
        
    //GET ASSESSMENT HISTORY TABLE NAME
    $assement_history_title = 'his_'.$data['user_id'].$this->generateId();
    echo json_encode($assement_history_title);

    
    //    CREATE ASSESSMENT HISTORY TABLE

    if(!Capsule::schema()->hasTable($assement_history_title)){
        Capsule::schema()->create($assement_history_title, function ($table) {
            $table->bigIncrements('id');
            $table->string('question_id');
            $table->string('instruction_id')->nullable();
            $table->string('subject_id');
            $table->integer('answer_id');
            $table->string('myAnswer')->nullable();
            $table->timestamps();
        });
 }

    // INSERT INTO ASSESSMENT_HISTORIES
    Capsule::table('assessment_histories')->insert([
        'assesment_title'   =>  $assement_history_title,
        'user_id'           =>  $data['user_id'],
        'assessmentType'    =>  $data['assessmentType'],
        'created_at'        =>  date('Y-m-d H:i:s'),
        'updated_at'        =>  date('Y-m-d H:i:s')
    ]);   
    


    }


    // questionEngin
    public function junior_question($data){
       
        // if(!Capsule::schema()->hasTable($data['tableName'])){
       // array variables
        $subject_arr    =   array();
        $question_arr   =   array();
    //    CREATE ASSESSMENT HISTORY TABLE

            // Capsule::schema()->create($data['tableName'], function ($table) {
            //     $table->bigIncrements('id');
            //     $table->string('question_id');
            //     $table->string('instruction_id')->nullable();
            //     $table->string('subject_id');
            //     $table->integer('answer_id');
            //     $table->string('myAnswer')->nullable();
            //     $table->timestamps();
            // });

             
        $subject = subject::inRandomOrder()->get(); 
        foreach ($subject as $subLoop){
            array_push($subject_arr, array(   
                "subject_id"=>$subLoop->subject_id,
                "subject"=>$subLoop->subject
            ));

           
                $question = question::inRandomOrder()->where('subject_id',$subLoop->subject_id)->limit(5)->get();
                foreach($question as $qst){
                // get instruction
                $instruction = instruction::select('instruction')->where('instruction_id',$qst->instruction_id)->get();
                
                // get objectives
                $options = option::select('option_id','options','question_id')->where('question_id', $qst->question_id)->get();
               
                    array_push($question_arr, array(
                        'subject_id'  => $qst->subject_id,
                        'question_id' => $qst->question_id,
                        'question'    => $qst->questions,
                        'instruction' => $instruction,
                        'option'      => $options,
                        'my_answer'   => ''
                    ));
                    
               
                 // check if table colomns has values
                //  $checkTableId = Capsule::table($data['tableName'])->get();
                //  if (!$checkTableId == null) {
                        Capsule::table($data['tableName'])->insert([
                            'subject_id'        => $qst->subject_id,
                            'question_id'       => $qst->question_id,
                            'instruction_id'    => $qst->instruction_id,
                            'answer_id'         => $qst->answers_id,
                            'created_at'        => date('Y-m-d H:i:s'),
                            'updated_at'        => date('Y-m-d H:i:s')
    
                        ]);
                // }
              
            }
            
            // }

          
        }
          // get current question table 
          $currentQuestion = Capsule::table($data['tableName'])->get();

          $allData = array(
              'j_question'  =>  $question_arr,
              'j_subject'   =>  $subject_arr,
              'j_currentQuestion' => $currentQuestion,
              'timeInterval' => 3601
          );
            echo json_encode($allData);

   
         }


    public function update_answer($data){
        
        Capsule::table($data['tableName'])->where('question_id',$data['questionID'])->update([
            'myAnswer'   => $data['answer'],
            'updated_at'     =>  date('Y-m-d H:i:s')
        ]);

        $questionLeft = Capsule::table($data['tableName'])->where('myAnswer', null)->count();
        $questionAnswered = Capsule::table($data['tableName'])->whereNotNull('myAnswer')->count();
   
        echo json_encode(array(
            'q_left'    => $questionLeft,
            'q_answer'  => $questionAnswered
        ));
    }


    // CALCULATE RESULT
    
    function result($data){
        $qstArr = array();
        $assessment_status = collect();
       
        $qustion_table_name=$data['tableName'];
        //get assesment history table values
        $assesment_history = Capsule::table('assessment_histories')->where('assesment_title',$qustion_table_name)->get();

       $subjects = subject::all();

       $scienceSubject =  subject::where('subject_category','s')->orWhere('subject_category','sc')->orWhere('subject_category','as')->get();

       $commercialSubject = subject::where('subject_category','c')->orWhere('subject_category','sc')->orWhere('subject_category','ac')->get();

       $artSubject = subject::where('subject_category','a')->orWhere('subject_category','as')->orWhere('subject_category','ac')->get();
      
       //Science Subject calculation
       $science =0;
       $u_s_score = 0;
        foreach($scienceSubject as $sc){
           $science_total= count(Capsule::table($qustion_table_name)->where('subject_id',$sc->subject_id)->get());
            $scince_score = count (Capsule::table($qustion_table_name)->whereColumn('answer_id', 'myAnswer')->where('subject_id',$sc->subject_id)->get());
            $science += $science_total;
            $u_s_score  += $scince_score;
        }
        $science;

         //Commercial Subject calculation
         $commercial=0;
        $u_c_score = 0;
        foreach($commercialSubject as $co){
           $commercial_total= count(Capsule::table($qustion_table_name)->where('subject_id',$co->subject_id)->get());
           
            $commerce_score = count (Capsule::table($qustion_table_name)->whereColumn('answer_id', 'myAnswer')->where('subject_id',$co->subject_id)->get());
            $commercial += $commercial_total;
            $u_c_score  += $commerce_score;
        }
        // echo $commercial;
    
        //Art Subject calculation
        $art=0;
        $u_a_score = 0;
        foreach($artSubject as $ar){
            $art_total= count(Capsule::table($qustion_table_name)->where('subject_id',$ar->subject_id)->get());
            $art_score = count (Capsule::table($qustion_table_name)->whereColumn('answer_id', 'myAnswer')->where('subject_id',$ar->subject_id)->get());
            $art += $art_total;
            $u_a_score  += $art_score;
        }

        //CALCULATE THE PERCENTAGE 
       $sciencePercent = ($u_s_score/$science)*100;
        $commercialPercent =($u_c_score/$commercial)*100;
      $artPercent =($u_a_score/$art)*100;
        
        //ROUND ANSWER TO TWO DECIMAL PLACE
       $sciencePercentR = round($sciencePercent,2);
        $commercialPercentR = round ($commercialPercent,2);
        $artPercentR = round($artPercent,2);

           $premessage = "YOU ARE POSTED TO";
           $postmessage="CLASS BASE ON YOUR PERFORMANCE";
        
       
        if ($sciencePercentR <= 30 & $commercialPercentR <= 30 & $artPercentR <= 30 ){
          $remark= "SORRY YOU ARE NOT FIT FOR ANY CLASSES, PLEASE RE-TAKE THE ASSESSMENT";
        }else{
        
            if($sciencePercentR  > $commercialPercentR & $sciencePercentR > $artPercentR){
                $remark = $premessage.' SCIENCE '.$postmessage;
            }elseif($commercialPercentR  > $sciencePercentR & $commercialPercentR > $artPercentR){
                $remark = $premessage.' COMMERCIAL '.$postmessage;
            }elseif($artPercentR  > $commercialPercentR & $artPercentR > $sciencePercentR){
                $remark = $premessage.' ART '.$postmessage;
            }elseif ($sciencePercentR  == $commercialPercentR & $sciencePercentR == $artPercentR & $commercialPercentR==$artPercentR){
                $remark="CONGRATULATION:YOU ARE FIT FOR ALL CLASSES";
            }
        }


        // CODES TO CALULATE NORMAL SCORES ==========================================
        foreach($subjects as $sub){
        // Get class
        
         $allAnswers = Capsule::table($qustion_table_name)->where('subject_id',$sub->subject_id)->get();
         foreach($allAnswers as $allAnswer){

          
            // return $scince_score2;
            //Commercial Subject calculation
            foreach($commercialSubject as $co){
               $commercial_score = Capsule::table($qustion_table_name)->whereColumn('answer_id', 'myAnswer')->where('subject_id',$co->subject_id)->get();
             }

             //Commercial Subject calculation
            foreach($artSubject as $ar){
                $art_score = Capsule::table($qustion_table_name)->whereColumn('answer_id', 'myAnswer')->where('subject_id',$ar->subject_id)->get();
               }


            if(in_array($allAnswer->subject_id, $qstArr)){

            }else{
                (array_push($qstArr,$allAnswer->subject_id));
                // Count Score
               $scores = count($correct_answer = Capsule::table($qustion_table_name)->whereColumn('answer_id', 'myAnswer')->where('subject_id',$allAnswer->subject_id)->get());
                 $scores = $scores *20;
               //Save status in a collection 
               $assessment_status->push(['subject'=>$sub->subject, 'subject_id'=>$allAnswer->subject_id,'score'=>$scores]);
            }
          
         }

        }
      //Render to the view
      $resultOutPut = array(
        'assesment_history'         =>  $assesment_history,
        'assessment_status'         =>  $assessment_status,
        'sciencePercentR'           =>  $sciencePercentR,
        'commercialPercentR'        =>  $commercialPercentR,
        'artPercentR'               =>  $artPercentR,
        'remark'                    =>  $remark
    );
      echo json_encode($resultOutPut);


        
    }
    
}
?>















