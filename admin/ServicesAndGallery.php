<?php
    require('access.php');
    require '../ServiceConfig.php';
    
    
    function uploadimage($img, $value){
        echo "here!";
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
                    $value = "../images/".$file_name;
                    echo "Success";
                    return $value;
            }else{
                foreach ($errors as $value) {
                    echo $value;
                }
            }
        }

    }
    
    
    
    
    
     function uploadMultipleImage($allImageDetails){
         echo count($allImageDetails['name']);
        for($i = 0; $i < count($allImageDetails['name']);$i++){
            $errors= array();
            $file_name = $allImageDetails['name'][$i];
            $file_size = $allImageDetails['size'][$i];
            $file_tmp = $allImageDetails['tmp_name'][$i];
            $file_type = $allImageDetails['type'][$i];

            $file_ext=strtolower(end(explode('.',$allImageDetails['name'][$i])));
            $expensions= array("jpeg","jpg","png", "gif"); 		
            if(in_array($file_ext,$expensions)=== false){
                    $errors = ["please choose a .JPEG, .GIF or .PNG file."];
            }

            if($file_size > 2097152){
            $errors = ['File size must be excately 2 MB'];
            }
            if(empty($errors)==true){
                    move_uploaded_file($file_tmp,"../images/".$file_name);
                    $value = "images/".$file_name;
                    echo "Success";
                   
            }else{
                foreach ($errors as $value) {
                    echo $value;
                }
            }
        }
         
         
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
                    $value = "images/".$file_name;
                    echo "Success";
                    return $value;
            }else{
                foreach ($errors as $value) {
                    echo $value;
                }
            }
        }

    }
    
    
    
    
    
    
    
    
    
    if(isset($_GET['del'])){
        
        $write .= "<?php \n";
        unset($serviceItem[$_GET['del']]);
        $serviceItem = var_export($serviceItem, true);
        $write .= '$serviceItem   = '.$serviceItem.';';
        
        
        $write .= "\n";
        unset($serviceGallerItems[$_GET['del']]);
        $serviceGallerItems = var_export($serviceGallerItems, true);
        $write .= '$serviceGallerItems   = '.$serviceGallerItems.';';
        
        
        $write .= "\n";
        unset($serviceGallerItemsDetails[$_GET['del']]);
        $serviceGallerItemsDetails = var_export($serviceGallerItemsDetails, true);
        $write .= '$serviceGallerItemsDetails   = '.$serviceGallerItemsDetails.';';
        
        
        $file = fopen("../ServiceConfig.php", "w+");
        fwrite($file, $write);
        
    }
    
    if ($_POST['serviceItem']){
        
        $write .= "<?php \n";
        end($serviceItem);
        $id = (empty($serviceItem))? 0: key($serviceItem)+1;
        $print01 = ($_FILES['imagethumbnail']['name'] != null)? uploadimage('imagethumbnail', $sliderimage1):$_POST['tumbnail'];
        array_push($serviceItem, ['image'=> $print01,'url'=>"services/index.php?id=$id", 'name'=>$_POST['name']]);
        $serviceItem = var_export($serviceItem, true);
        $write .= '$serviceItem   = '.$serviceItem.';';
        
        
        $write .= "\n";
        uploadMultipleImage($_FILES['galleryImage']);
        
        $galleryImage = array_filter($_FILES['galleryImage']['name']) ;
        if(isset($_FILES['galleryImage'])){
            foreach ($galleryImage as $key => $value) {
                $value = "../images/".$value; // why not $value[$key] = "/images/".$value;?!
                $galleryImage[$key] = $value;
            }
        }
        //$galleryImage takes precedance in array union]);
        $print02 = $galleryImage + $_POST['image'];
        ksort($print02);
        $serviceGallerItems[$id] = $print02;
        $serviceGallerItems = var_export($serviceGallerItems, true);
        $write .= '$serviceGallerItems   = '.$serviceGallerItems.';';
        
        
        $write .= "\n";
        $serviceGallerItemsDetails[$id] = ['name'=>$_POST['serviceName'], 'detail'=>$_POST['ServiceDetail'], 'modalButton'=>$_POST['GalleryModalButton'], 'modalContent'=>$_POST['GalleryModalContent']];
        $serviceGallerItemsDetails = var_export($serviceGallerItemsDetails, true);
        $write .= '$serviceGallerItemsDetails   = '.$serviceGallerItemsDetails.';';
        
        
        $file = fopen("../ServiceConfig.php", "w+");
        fwrite($file, $write);
        
    }
?>

<html>
    <head>
        <title>Amdin Pannel</title>
        <script>
            function isNumber(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                    return false;
                }
                return true;
            }
        </script>
        <style>
            body, html{
                margin:0px;
                padding:0px;
                height:100%;
                font-family: "Times New Roman", Times, serif;
                
            }
            input[type="text"]{
               width:450px;
            }
            
            label{
                display:inline-block;
                width:250px;
            }
            #header{
                background-color: black;
                width:100%;
                min-width: 1020px;
                color: white;
                font-size: 25px;
                padding:15px;
            }
            #headerContent{
                width:100%;
                min-width: 1020px;
                margin-left: auto;
                margin-right:auto;
            }
            #jumbotron{
                width:90%;
                min-width: 1020px;
                padding:15px;
                margin-top:20px;
                margin-left: auto;
                margin-right:auto;
                border-radius: 5px;
                background:#eee;
            }
        </style>
        
        <script type="text/javascript" src="../tinymce/tinymce.min.js"></script>
    
        <script type="text/javascript">
            tinymce.init({
                selector: ".mytextarea"
            });
        </script>
        
    </head>
    <body>
        <div id="header">
            <div id="headerContent">Services and gallery
            </div>
        </div>
        
        <div id="jumbotron">
            <?php
                if(isset($_POST['limit'])){
                    $limit = ($_POST['limit'])?  intval($_POST['limit']):5;
                }else{
                    $limit = 5;
                }
                
            ?>
            <form actin="" method="POST">
                <label>Enter a number (Default: 5)</label>
                <input type="text" class="textfield" value="" id="extra7" name="limit" onkeypress="return isNumber(event)" />
                <button type="submit" >Submit</button>
            </form>
        </div>
        
        <form action="" method="POST" enctype="multipart/form-data">
            <div id="jumbotron">
                <table>
                    <tr>
                        <td><label>Thumbnail Image Url</label></td>
                        <td><input type="text" name="tumbnail"></td>
                        <td><input type="file" name="imagethumbnail" /></td>
                    </tr>
                    <tr>
                        <td><label>Display Name</label></td>
                        <td><input type="text" name="name"></td>
                    </tr>
                    <tr>
                        <td><label>Popup Button Name</label></td>
                        <td><input type="text" name="GalleryModalButton"></td>
                    </tr>
                    <tr>
                        <td><label>Popup Content</label></td>
                        <td colspan="2"><textarea rows="4" cols="50" name="GalleryModalContent" class="mytextarea"></textarea></td>
                  
                    </tr>
                </table>
            </div>
            
            
            
            
            <div id="jumbotron">
                <table>
                    <?php for($i = 0; $i < $limit; $i++){?>
                    <tr>
                        <td><label>Image <?php echo ($i+1) ?></label></td>
                        <td><input type="text" name="image[]"></td>
                        <td><input type="file" name="galleryImage[]" /></td>
                    </tr>
                    <?php }?>
                </table>
            </div>
            
            <div id="jumbotron">
                <table>
                    <tr>
                        <td><lbel>Service Name</label></td>
                        <td><input type="text" name="serviceName"></td>
                    </tr>
                    <tr>
                        <td><label>Service Details</label></td>
                         <td style="width:800px;"><textarea rows="4" cols="50" name="ServiceDetail" class="mytextarea"></textarea></td>
                    </tr>
                </table>
            </div>
            
            
            <div style="margin-left: 50%; "><button type="submit" value="Submit">Save Settings</button></div>
               
            
            <input type="hidden" value="serviceItem" name="serviceItem"/>
            
            </form>
            
            
            
            
            
        <div id="jumbotron">
                
            <?php foreach ($serviceItem as $key=>$service){?>
                
            <a href="?del=<?php echo $key?>">
                <div style="width:150px; height:150px; display:inline;padding:15px; border:solid black 1px;">
                    <?php echo $key?> <?php echo $service['name']?>
                </div>
            </a>

            <?php } ?>
        </div>
        
    </body>