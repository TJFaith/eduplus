<?php
header('Access-Control-Allow-Origin: ' .$_SERVER['HTTP_ORIGIN']);
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header("Content-Type:application/json, Access-Control-Allow-Origin:*");
header("Content-Type:multipart/form-data, Access-Control-Allow-Origin:*");


include_once "../database.php";
include_once "../controller/generalQueryController.php";
include "../controller/mail.php";

$email = new php_mail();
$controllerQuery = new generalQueryController();


    // QUERY REQUEST STARTS ===================
    $result = array('error'=>false);
    $action = '';

    if(isset($_GET['action'])){
        $action = $_GET['action'];
    }

    if($action=='AllCertification'){
        $query = json_decode(file_get_contents('php://input'),true);
        // echo json_encode ($query);
        return json_encode($controllerQuery->AllCertification($query));
    }

    if($action == 'c_category'){
        $query = json_decode(file_get_contents("php://input"),true);
        return json_encode($controllerQuery->c_category($query));
    }

    if($action == 'sendMail'){
        $query = json_decode(file_get_contents("php://input"),true);
        // echo json_encode($query);
        return json_encode($email->email($query));
     }
     if($action == 'retrivePassword'){
        $query = json_decode(file_get_contents("php://input"),true);
        // echo json_encode($query);
        return json_encode($email->retrivePassword($query));
     }

     if($action == 'confirmOTP'){
         $query = json_decode(file_get_contents("php://input"),true);
         return json_encode($email->confirmOTP($query));
     }
    // search code
    if($action =='search_filter'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->search_filter($query));
    }
  
    // Authentication
    if ($action == 'signup'){

        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($email->signup($query));
    }
    
    if ($action == 'login'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->login($query));
    }

    if($action == 'google_login'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->google_login($query));
    }

    if($action =='getUserData'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->getUserData($query));
    }

    if($action == 'selectGrade'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->selectGrade($query));
    }

    if($action == 'newComunity'){
        $query = json_decode(file_get_contents('php://input'),true);
        // $name = $_FILES['imgfile']['name'];
        // echo json_encode($query);
        return json_encode($controllerQuery->newComunity($query));
    }

    if($action =='getComunity'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->getComunity($query));

    }

    if($action =='singleCommunity'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->singleCommunity($query));
    }
    
    if($action =='deleteCommunity'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->deleteCommunity($query));
    }

    if($action == 'updateComunity'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->updateComunity($query));
    }

    if($action =='deleteAdmin'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->deleteAdmin($query));
    }

    if($action=='updateAdmin'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->updateAdmin($query));
    }

   
    if($action=='searchComunity'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->searchComunity($query));
    }

    if($action=='newPost'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->newPost($query));
    }

    if($action=='joinCommunity'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->joinCommunity($query));
    }
    
    if($action=='leaveCommunity'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->leaveCommunity($query));
    }
    if($action=='allPost'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->allPost($query));
    }

    if($action == 'totalPost'){
        return json_encode($controllerQuery->totalPost());
    }

    if($action == 'totalCertificationPost'){
        return json_encode($controllerQuery->totalCertificationPost());
    }
  
    if($action=='updatePassword'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->updatePassword($query));
    }
    // API QUERY CONNECTIONS =============== -->
    
    
   
?>