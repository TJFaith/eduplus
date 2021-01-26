<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use Models\user;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


// Load Composer's autoloader
require '../vendor/autoload.php';

// Instantiation and passing `true` enables exceptions

class php_mail extends generalQueryController{
   private $mail;
private function emailConfig(){
        $this->mail = new PHPMailer(true);
    
        //Server settings
        //     $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
        $this->mail->SMTPDebug = 0;                      // Enable verbose debug output
        $this->mail->isSMTP();                                            // Send using SMTP
        $this->mail->Host       = 'mail.tectainet.com';                   // Set the SMTP server to send through
        $this->mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $this->mail->Username   = 'mailer@tectainet.com';                 // SMTP username
        $this->mail->Password   = 'faithproxx22';                         // SMTP password
        $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
         $this->mail->SMTPSecure = 'ssl';
        $this->mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
        
       
}
private function generateId(){
    // CODE TO GENERATE ID
     $token = 'qwertzuiopasdfghjklyxcvbnmABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz';
     $token = str_shuffle($token);
     return $token = substr($token,  0,  6);
    //  $current_date = date('Ymd');
    //  return $token = $token.$current_date;
 }
public function email($data){
            $this->emailConfig();
            //Recipients
            $mail->setFrom($data['email'], $data['fullName']);
            $mail->addReplyTo($data['email']);
            $mail->addAddress('info@eduplus.sch.ng', 'EDUPLUS');     // Add a recipient
            $mail->addAddress('enquiries@eduplus.sch.ng', 'EDUPLUS');     // Add a recipient
            // $mail->addAddress('ellen@example.com');               // Name is optional
            // $mail->addReplyTo('info@example.com', 'Information');
            // $mail->addCC('cc@example.com');
            // $mail->addBCC('bcc@example.com');

            // Attachments
            // $mail->addAttachment('./'.$data[0]['details'].'.xlsx');         // Add attachments
            // $mail->addAttachment('./img/LOGO.05fb23f9.png', 'LOGO.jpg');    // Optional name

            // Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'EDUPLUS CONTACT';
            $mail->Body    = 'Hello! here is a message from '. $data['fullName'] . ', <br>
            
            <p>'
            .$data['message']
            .'
            </p>
            
            ';
        try {
            $mail->send();
            echo json_encode(array("returnMsg" => "Message has been sent"));
        //     echo 'Message has been sent';
            } catch (Exception $e) {
                echo json_encode(array("returnMsg" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"));
            }

           
        }

        public function retrivePassword($data){
            // echo json_encode($data);
            // check if email exist
            $respons ='';
           $user_id = User::select('id','name', 'email', 'password')->where('email',$data['email'])->get();
           if (!count($user_id)) {
            $respons ='Not found';
            // Email not found in database
           } else{
            // send mail
            $userEmail=''; $userFullName='';
            $token = $this->generateId();
            $this->emailConfig();
            foreach($user_id as $user_data){
                if($user_data->password == null){
                    $respons ='No password';
                }else{
                $userEmail = $user_data->email;
                $userFullName = $user_data->name;
                $this->mail->setFrom('mailer@tectainet.com', 'EDUPLUS');
                $this->mail->addReplyTo($userEmail);
                $this->mail->addAddress($userEmail, $userFullName);   
                $this->mail->isHTML(true);                                  // Set email format to HTML
                $this->mail->Subject = 'PASSWORD RESET TOKEN';
                $this->mail->Body    = 'Hello '. $userFullName . ', here is your password reset token, <br>
                
                <p><b>'
                .$token
                .'
                </b></p>
                <p><strong>NOTE: This One time Password (OTP) expires in 5 minutes</strong></p>
                
                ';
            try {
                $this->mail->send();
                // remember_token
                
                // save the token to database

                User::where('email',$userEmail)->update([
                    'otp'             => $token,
                    'updated_at'        => date('Y-m-d H:i:s')
                ]);

                
                $respons = 'sent';
            //     echo 'Message has been sent';
                } catch (Exception $e) {
                    $respons= "Message could not be sent. Mailer Error: {$this->mail->ErrorInfo}";
                }
    
                }
            }
            
         
           }

           echo json_encode(array(
            'respond'=>$respons,
        ));
        }

        public function confirmOTP($data){
            //  $otpData = User::select('email','otp', 'is_expired','updated_at')->where('otp','=', $data['otp'])->where('is_expired','!=', 1)
            //  ->whereRaw('updated_at >= now() - interval ? minute', [5])->get();
           
             $date = new DateTime;
             $date->modify('-5 minutes');
             $formatted_date = $date->format('Y-m-d H:i:s');
             
             $otpData = User::select('email','otp', 'is_expired','updated_at')->where('otp','=', $data['otp'])->where('is_expired','!=', 1)->get();
            //  ->where('updated_at','>=',$formatted_date)->get();

             if (!count($otpData)) {
                echo json_encode(array(
                    'respond'=>'Incurrect OTP',
                    'alertColor'=>'red'

                ));
            }else {
                foreach ($otpData as $value) {
                    if($value['updated_at'] >= $formatted_date){
                        echo json_encode(array(
                            'respond'=>'Correct',
                            'alertColor'=>'green'
                        ));  
                    }else{
                        echo json_encode(array(
                            'respond'=>'OTP Session has espire',
                            'alertColor'=>'red'
                        ));
                    }
                }
            }

        }
        protected $confirmationURL;
        private function confirm_email($data){
            $respons ='';
            $this->emailConfig();
            $this->confirmationURL = $this->generateId();;

                $userEmail = $data['email'];
                $userFullName = $data['name'];
                $this->mail->setFrom('mailer@tectainet.com', 'EDUPLUS');
                $this->mail->addReplyTo($userEmail);
                $this->mail->addAddress($userEmail, $userFullName);   
                $this->mail->isHTML(true);                                  // Set email format to HTML
                $this->mail->Subject = 'EMAIL CONFIRMATION';
                $this->mail->Body    = 'Hello '. $userFullName . ', thanks for sigining up with EDUPLUS, <br>
                please click the bellow button to verify your email <br>
                <a href="https://www.eduplus.sch.ng/v_login/'.$this->confirmationURL.'"><button>Verify Email</button></a>
                <p><strong>You recive this email because you attempt to sign up with Eduplus, if you are not the one please file a report on this page <a href="https://www.eduplus.sch.ng/contact">Eduplus Contact</a></strong></p>
                <p>Thanks</p>
                ';
            try {
                $this->mail->send();
              
                return $respons = 1;
                } catch (Exception $e) {
                   return $respons= 2;
                }

                // Error, otp not sent, try again"
        //    echo json_encode(array(
        //     'respond'=>$respons,
        // ));
    }

        // Authentication
public function signup($data){
    //   Check if email exist
    $email = User::where('email', $data['email'])->get();

    if (!$email ->count() ){
        // send email 
        $verifyEmail = $this->confirm_email($data);

        if ($verifyEmail == 1){
            // send confirmation to email
            // return json_encode($email->confirm_email($data));
            
            $signup = new User;
            $signup -> name = $data['name'];
            $signup -> email = $data['email'];
            $signup -> password = password_hash($data['password'], PASSWORD_BCRYPT);
            $signup -> gender = $data['gender'];
            $signup -> phone = $data['phone'];
            $signup -> confirmation = $this->confirmationURL;
            if($signup -> save()){
                echo json_encode(array(
                    'respond'=>'saved',
                    'user_id'=>$this->getUserID($data['email'])
                ));
            }
        }else if($verifyEmail == 2){
            echo $respons= "Message could not be sent. Check your internet Connection and retry";
            
        }
        }else{
            echo json_encode(array(
                'respond'=>'Exist',
            ));
        }
   
       
}





        
}

?>