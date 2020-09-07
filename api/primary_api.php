<?php
    header('Access-Control-Allow-Origin: ' .$_SERVER['HTTP_ORIGIN']);
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    header("Content-Type:application/json, Access-Control-Allow-Origin:*");
    header("Content-Type:multipart/form-data, Access-Control-Allow-Origin:*");


    include_once "../database.php";
    include_once "../controller/primaryQueryController.php";

    $controllerQuery = new primaryQueryController();


    // QUERY REQUEST STARTS ===================
    $result = array('error'=>false);
    $action = '';

    if(isset($_GET['action'])){
    $action = $_GET['action'];
    }


    // ================================ API FOR  *********  QUESTIONS **********

    if($action == 'generateTableName'){
        $query = json_decode(file_get_contents("php://input"),true);
        return json_encode($controllerQuery->generateTableName($query));
    }

    if($action == 'primary_question'){
        $query = json_decode(file_get_contents("php://input"),true); 
        return json_encode($controllerQuery->primary_question($query));
    }

    if($action == 'primary_update_answer'){
        $query = json_decode(file_get_contents("php://input"),true); 
        return json_encode($controllerQuery->primary_update_answer($query));
    }

    if ($action == 'primary_result'){
        $query = json_decode(file_get_contents("php://input"),true); 
        return json_encode($controllerQuery->primary_result($query));
    }
?>

