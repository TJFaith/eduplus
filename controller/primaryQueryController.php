<?php 

// exit();
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Collection;
use Illuminate\Database\Capsule\Manager as Capsule;

use Illuminate\Http\Request;

// primary models
use Models\primary_subject;
use Models\primary_question;
use Models\primary_instruction;
use Models\primary_option;


// include_once "../database.php"; 

// include './autoloader/inc.php';
class primaryQueryController
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
public function primary_question($data){

$subject_arr    =   array();
$question_arr   =   array();

$subject = primary_subject::inRandomOrder()->get(); 
foreach ($subject as $subLoop){
array_push($subject_arr, array(   
"subject_id"=>$subLoop->primary_subject_id,
"subject"=>$subLoop->primary_subject
));


$question = primary_question::inRandomOrder()->where('subject_id',$subLoop->primary_subject_id)->limit(5)->get();
foreach($question as $qst){
// get instruction
$instruction = primary_instruction::select('instruction')->where('instruction_id',$qst->instruction_id)->get();

// get objectives
$options = primary_option::select('option_id','options','question_id')->where('question_id', $qst->question_id)->get();

array_push($question_arr, array(
'subject_id'  => $qst->subject_id,
'question_id' => $qst->question_id,
'question'    => $qst->questions,
'instruction' => $instruction,
'option'      => $options,
'my_answer'   => ''
));

Capsule::table($data['tableName'])->insert([
    'subject_id'        => $qst->subject_id,
    'question_id'       => $qst->question_id,
    'instruction_id'    => $qst->instruction_id,
    'answer_id'         => $qst->answers_id,
    'created_at'        => date('Y-m-d H:i:s'),
    'updated_at'        => date('Y-m-d H:i:s')

]);


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

//  UPDATE ANSWER
public function primary_update_answer($data){

Capsule::table($data['tableName'])->where('question_id',$data['questionID'])->update([
'myAnswer'        => $data['answer'],
'updated_at'      =>  date('Y-m-d H:i:s')
]);

$questionLeft = Capsule::table($data['tableName'])->where('myAnswer', null)->count();
$questionAnswered = Capsule::table($data['tableName'])->whereNotNull('myAnswer')->count();

echo json_encode(array(
'q_left'    => $questionLeft,
'q_answer'  => $questionAnswered
));
}

function primary_result($data){
$qstArr = array();
$assessment_status = collect();
$qustion_table_name=$data['tableName'];

//get assesment history table values
$assesment_history = Capsule::table('assessment_histories')->where('assesment_title',$qustion_table_name)->get();

$subjects = primary_subject::all();



//Science Subject calculation
$sub =0;
$u_s_score = 0;
foreach($subjects as $su){
$subject_total= count(Capsule::table($qustion_table_name)->where('subject_id',$su->primary_subject_id)->get());
$subject_score = count (Capsule::table($qustion_table_name)->whereColumn('answer_id', 'myAnswer')->where('subject_id',$su->subject_id)->get());
$sub += $subject_total;
$u_s_score  += $subject_score;
}
$sub;



//CALCULATE THE PERCENTAGE 
$subjectPercent = ($u_s_score/$sub)*100;


//ROUND ANSWER TO TWO DECIMAL PLACE
$subjectPercentR = round($subjectPercent,2);



// CODES TO CALULATE NORMAL SCORES ==========================================
foreach($subjects as $sub){
// Get class

$allAnswers = Capsule::table($qustion_table_name)->where('subject_id',$sub->primary_subject_id)->get();
foreach($allAnswers as $allAnswer){


if(in_array($allAnswer->subject_id, $qstArr)){

}else{
(array_push($qstArr,$allAnswer->subject_id));
// Count Score
$scores = count($correct_answer = Capsule::table($qustion_table_name)->whereColumn('answer_id', 'myAnswer')->where('subject_id',$allAnswer->subject_id)->get());
$scores = $scores *20;
//Save status in a collection 
$assessment_status->push(['subject'=>$sub->primary_subject, 'subject_id'=>$allAnswer->subject_id,'score'=>$scores]);
}

}

}
//Render to the view
$resultOutPut = array(
  'assesment_history'         =>  $assesment_history,
  'assessment_status'         =>  $assessment_status,
  'subjectPercentR'           =>  $subjectPercentR
);

echo json_encode($resultOutPut);


}
}

?>



