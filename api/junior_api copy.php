<?php
    header('Access-Control-Allow-Origin: ' .$_SERVER['HTTP_ORIGIN']);
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    header("Content-Type:application/json, Access-Control-Allow-Origin:*");
    header("Content-Type:multipart/form-data, Access-Control-Allow-Origin:*");


    include_once "../database.php";
    include_once "../controller/juniorQueryController.php";

    $controllerQuery = new juniorQueryController();


    // QUERY REQUEST STARTS ===================
    $result = array('error'=>false);
    $action = '';

    if(isset($_GET['action'])){
    $action = $_GET['action'];
    }

    // ================================ API FOR  *********  SUBJECTS **********
    // if($action == 'getSubject'){
    // $query = json_decode(file_get_contents("php://input"),true);
    // return json_encode($controllerQuery->getAllSubject());
    // }

    // if($action =='addSubject'){
    // $query = json_decode(file_get_contents("php://input"),true);
    // return json_encode($controllerQuery->addSubject($query));
    // }
    // =================================END OF API FOR *********  SUBJECTS **********


    // ================================ API FOR  *********  QUESTIONS **********

    if($action == 'generateTableName'){
    $query = json_decode(file_get_contents("php://input"),true);
    return json_encode($controllerQuery->generateTableName($query));

    }
    if($action == 'junior_question'){
        $query = json_decode(file_get_contents("php://input"),true); 
        return json_encode($controllerQuery->primary_question($query));
    }


    // if($action == 'junior_question'){
    // // $query = json_decode(file_get_contents("php://input"),true); 
    // echo json_encode('checking');
    // // return json_encode($controllerQuery->junior_question($query));
    // }

    if($action == 'update_answer'){
    $query = json_decode(file_get_contents("php://input"),true); 
    return json_encode($controllerQuery->update_answer($query));
    }

    if ($action == 'result'){
    $query = json_decode(file_get_contents("php://input"),true); 
    return json_encode($controllerQuery->result($query));
    }
?>

