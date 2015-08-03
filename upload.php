<?php
    function uploadimage($img){
        var_dump($_FILES[$img]);
        if(isset($_FILES[$img])){
            $errors= array();
            $file_name = $_FILES[$img]['name'];
            $file_size =$_FILES[$img]['size'];
            $file_tmp =$_FILES[$img]['tmp_name'];
            $file_type =$_FILES[$img]['type'];   
            $file_ext=strtolower(end(explode('.',$_FILES[$img]['name'])));

            $expensions= array("jpeg","jpg","png", "gif"); 		
            if(in_array($file_ext,$expensions)=== false){
                    $errors = ["please choose a .JPEG, .GIF or .PNG file."];
            }
            
            if($file_size > 2097152){
            $errors = ['File size must be excately 2 MB'];
            }
            
            if(empty($errors)==true){
                    move_uploaded_file($file_tmp,"images/".$file_name);
                    echo "Success";
            }else{
                foreach ($errors as $value) {
                    echo $value;
                }
            }
        }
        
    }
?>

<form action="" method="POST" enctype="multipart/form-data">
    <input type="file" name="image" /><?php uploadimage('image')?><br/>
    <input type="file" name="image1" /><?php uploadimage('image1')?>
<input type="submit"/>
</form>