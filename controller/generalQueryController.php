<?php 

use Illuminate\Http\Request;
use Illuminate\Database\Capsule\Manager as Capsule;

use Models\question;
use Models\primary_question;
use Models\user;
USE Models\certification;
use Models\certification_category;
use Models\community;
use Models\community_data;
use Models\user_data;

class generalQueryController
{
    // CERTIFICATION
    public function AllCertification(){
        echo certification::orderBy('ID','DESC')->get();
     }
  //  get all certification category
  public function c_category(){
    echo certification_category::orderBy('c_name','ASC')->get();
 }

//  search code
 public function search_filter($data){
       
    if( isset($data['c_id'])){
        echo certification::where('c_organizationName', 'LIKE', '%'.$data['c_value'].'%')
                    ->where('c_category',$data['c_id'])
                    ->get();
    }else{
        echo certification::where('c_organizationName', 'LIKE', '%'.$data['c_value'].'%')
                    ->get();
    }   
}

private function getUserID($email){
   return $user_id = User::select('id','name')->where('email',$email)->get();

}
// Authentication
public function signup($data){
    //   Check if email exist
    $email = User::select('email')->where('email', $data['email'])->get();
    if (!$email ->count() ){
        $signup = new User;
        $signup -> name = $data['name'];
        $signup -> email = $data['email'];
        $signup -> password = password_hash($data['password'], PASSWORD_BCRYPT);
        if($signup -> save()){
            echo json_encode(array(
                'respond'=>'saved',
                'user_id'=>$this->getUserID($data['email'])
            ));
        }
    }else{
        echo json_encode(array(
            'respond'=>'Exist',
        ));
        
    }
      
}

public function login($data){
    $respons ='';
    $aut = User::where('email', $data['email'])->get();
    if (!count($aut)) {
        // $html_doc->title = "testtitle";
        $respons='<span class="text-danger">Incorrect Email</span>';
        $aut  ='';

    }else{
        foreach ($aut as $key => $value) {
            $hashed_password = $value['password'];            

            if(password_verify($data['password'], $hashed_password)) {
               $respons ='success';
            } else{
                $respons='<span class="text-danger">Incorrect Password</span>';
                $aut  ='';
            }
        }
    }
    echo json_encode(array(
        'respond'=>$respons,
        'user_data'=>$aut,
    ));
}

public function google_login($data){
    if (User::where('email', $data['email'])->exists()) {
        $aut = User::where('email', $data['email'])->get();
        $respons ='success';
        echo json_encode(array(
            'respond'=>$respons,
            'user_data'=>$aut,
        ));
     }else{
        $signup = new User;
        $signup -> name = $data['name'];
        $signup -> email = $data['email'];
        $signup -> user_icon = $data['picture'];
        if($signup -> save()){
        $respons ='success';

            echo json_encode(array(
                'respond'=>$respons,
                'user_data'=>$this->getUserID($data['email'])
            ));
        }
     }
    
}

public function google_signup($data){
    if (User::where('email', $data['email'])->exists()) {
        $aut = '';
        $respons ='Account Already Exist, Login Instead';

        echo json_encode(array(
            'respond'=>$respons,
            'user_data'=>$aut,
        ));
     }else{
        $signup = new User;
        $signup -> name = $data['name'];
        $signup -> email = $data['email'];
        $signup -> user_icon = $data['picture'];
        if($signup -> save()){

            echo json_encode(array(
                'respond'=>'saved',
                'user_data'=>$this->getUserID($data['email'])
            ));
        }
     }
    
}

public function getUserData($data){
    // community created
    $myResources = user_data::where('user_id', $data['id'])->count();
    $communityCreated = community::where('created_by', $data['id'])->count();
    $communityJoind = community_data::where('member_id', $data['id'])->count();
    $bestGrade = Capsule::table('assessment_histories')->select('grade')->where('user_id',$data['id'])->get();
    // loop to get best grade
    $bGradeF = 0;
    foreach ($bestGrade as $bGrade) {
        if ($bGrade->grade > $bGradeF){
            $bGradeF = $bGrade->grade; 
        }
    }
    echo json_encode(array(
        'CommunitiesCreated'=>$communityCreated,
        'CommunityJoind'=>$communityJoind,
        'bestGrade' => $bGradeF,
        'myResources' => $myResources
    ));
    // echo User::where('id',$data['user_id'])->get();
}

// START OF CAREER COMMUNITY METHODS ============================================
// Image upload processing 
   // private methods
   private function imageProcessing(){
    // upload icon
if(isset($_FILES['file']['name'])){
   $name = $_FILES['file']['name'];
   $target_dir = "upload/";
   $target_file = $target_dir . basename($_FILES["file"]["name"]);
 
   // Select file type
   $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

   // Valid file extensions
   $extensions_arr = array("jpg","jpeg","png","gif");

   // Check extension
   if( in_array($imageFileType,$extensions_arr) ){
          
       // Convert to base64 
       $image_base64 = base64_encode(file_get_contents($_FILES['file']['tmp_name']) );
      return $image = 'data:image/'.$imageFileType.';base64,'.$image_base64;
     }

   }else{
       return $image = $_POST['c_logo'];
   } 
}

private function responseMessage(){
   $resp = array('response'=>'success');
   return json_encode($resp);
}
// end of image upload processing 

}
?>