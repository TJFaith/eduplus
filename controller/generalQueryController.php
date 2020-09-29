<?php 

use Illuminate\Http\Request;
use Illuminate\Database\Capsule\Manager as Capsule;

use Models\question;
use Models\primary_question;
use Models\user;
USE Models\certification;
use Models\certification_category;
use Models\community;
use Models\community_admin_member;
use Models\community_data;
use Models\user_data;

class generalQueryController
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

   //        Check extension
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
public function newComunity($data){
    // Insert record
    $community_ID = 'con_'.$this->generateId();
    $community = new community;
    $community -> community_id = $community_ID ;
    $community -> community_name = $data['title'];
    $community -> community_owner = $data['communityOwner'];
    // $community -> community_icon = $this->imageProcessing(); 
    $community -> community_description	 = $data['description'];
    // $community -> community_cover_image = $this->imageProcessing();
    $community -> save();
    
    // save admins
    community_admin_member::insert([
        'user_id'           =>  $data['user_id'],
        'email'             =>  $data['communityOwner'],
        'community_id'      => $community_ID,
        'status'            => 'owner',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s')

        ]);
        // echo json_encode($data['email']);
    foreach ($data['email'] as $adminEmail) {
    community_admin_member::insert([
        'email'             => $adminEmail['email'],
        'community_id'      => $community_ID,
        'status'            => $adminEmail['status'],
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s')

    ]);
    }
    echo $this->responseMessage();
        // echo json_encode($data);
}
public function updateComunity($data){
try{
    community::where('community_id',$data['community_id'])->update([

        'community_name'        =>  $data['title'],
        'community_owner'       =>  $data['communityOwner'],
        'community_description' =>  $data['description'],
        'created_at'            => date('Y-m-d H:i:s'),
        'updated_at'            => date('Y-m-d H:i:s')
        
]);

foreach ($data['email'] as $adminEmail) {
    if(isset($adminEmail['id'])){
    community_admin_member::where('id',$adminEmail['id'])->where('community_id',$adminEmail['community_id'])->update([
        'email'             => $adminEmail['email'],
        'status'            => $adminEmail['status'],
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s')

    ]);
    }else if(!isset($adminEmail['id'])){
        community_admin_member::insert([
            'email'             => $adminEmail['email'],
            'community_id'      => $data['community_id'],
            'status'            => $adminEmail['status'],
            'created_at'        => date('Y-m-d H:i:s'),
            'updated_at'        => date('Y-m-d H:i:s')
    
        ]);
    }
}

    echo $this->responseMessage();
    }catch(Exception $e){
        return json_encode('Ops! sorry an error occured');
    }
}

public function getComunity($data){
    $community_arr    =   array();
    if(isset($data['user_id'])){
    $getComunity_id = community_admin_member::select('user_id','email','community_id')->where('user_id',$data['user_id'])->get();
    foreach ($getComunity_id as $c_id) {
        if ($c_id->user_id != null && $c_id->email != null){
        $getCommunity = community::where('community_id',$c_id->community_id)->get();
        array_push($community_arr, array(   
            $getCommunity
        ));
    }

    }
    
   echo json_encode($community_arr);

    }else if(!isset($data['user_id'])){
       $getCommunity = community::latest()->get();
       echo json_encode($getCommunity);
        
    }
    
   
    
}

// private $c_id;
// individual community
public function singleCommunity($data){
   
    $com_data = community::where('community_id',$data['c_id'])->get();
    $com_member = community_admin_member::where('community_id',$data['c_id'])
    ->whereNotNull('user_id')
    ->count();
       $c_id = $data['c_id'];
  
    $com_admin = community_admin_member::where(function ($query) use ($c_id){
        $query->where('community_id', $c_id)->where('status','admin');
     })->orWhere(function ($query) use ($c_id){
         $query->where('community_id', $c_id)->where('status','pending admin');
     })->get();
    
    echo json_encode(array(
        'com_data'=>$com_data,
        'com_admin'=>$com_admin,
        'total_member'=>$com_member
    ));
}

public function deleteCommunity($data){
    community::where('community_id',$data['c_id'])->delete();
    community_admin_member::where('community_id',$data['c_id'])->delete();
}

public function deleteAdmin($data){
    try{
    community_admin_member::where('community_id',$data['c_id'])->where('id',$data['id'])->delete();
    echo $this->responseMessage();
    }catch(Exception $e){
        return json_encode('Ops! sorry an error occured');
    }
}

public function updateAdmin($data){
    try{
        community_admin_member::where('community_id',$data['c_id'])->where('id',$data['id'])->update([
                'email'             => $data['adminEmail'],
                'created_at'        => date('Y-m-d H:i:s'),
                'updated_at'        => date('Y-m-d H:i:s')
            ]);

  
        echo $this->responseMessage();
        }catch(Exception $ex){
            return json_encode('Ops! sorry an error occured');
        }
    }
}


?>