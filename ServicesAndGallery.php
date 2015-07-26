<?php
    require 'ServiceConfig.php';
    
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
        
        
        $file = fopen("ServiceConfig.php", "w+");
        fwrite($file, $write);
        
    }
    
    if ($_POST['serviceItem']){
        
        $write .= "<?php \n";
        end($serviceItem);
        $id = (empty($serviceItem))? 0: key($serviceItem)+1;
        array_push($serviceItem, ['image'=> $_POST['tumbnail'],'url'=>"services/index.php?id=$id", 'name'=>$_POST['name']]);
        $serviceItem = var_export($serviceItem, true);
        $write .= '$serviceItem   = '.$serviceItem.';';
        
        
        $write .= "\n";
        $serviceGallerItems[$id] = $_POST['image'];
        $serviceGallerItems = var_export($serviceGallerItems, true);
        $write .= '$serviceGallerItems   = '.$serviceGallerItems.';';
        
        
        $write .= "\n";
        $serviceGallerItemsDetails[$id] = ['name'=>$_POST['serviceName'], 'detail'=>$_POST['ServiceDetail']];
        $serviceGallerItemsDetails = var_export($serviceGallerItemsDetails, true);
        $write .= '$serviceGallerItemsDetails   = '.$serviceGallerItemsDetails.';';
        
        
        $file = fopen("ServiceConfig.php", "w+");
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
            input{
                width:350px;
            }
            #header{
                background-color: black;
                width:100%;
                color: white;
                font-size: 25px;
                padding:15px;
            }
            #headerContent{
                width:100%;
                margin-left: auto;
                margin-right:auto;
            }
            #jumbotron{
                width:90%;
                padding:15px;
                margin-top:20px;
                margin-left: auto;
                margin-right:auto;
                border-radius: 5px;
                background:#eee;
            }
        </style>
        
        <script type="text/javascript" src="tinymce/tinymce.min.js"></script>
    
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
        
        <form action="" method="POST">
            <div id="jumbotron">
                <table>
                    <tr>
                        <td><label>Thumbnail Image Url</label></td>
                        <td><input type="text" name="tumbnail"></td>
                    </tr>
                    <tr>
                        <td><label>Display Name</label></td>
                        <td><input type="text" name="name"></td>
                    </tr>
                </table>
            </div>
            
            
            
            
            <div id="jumbotron">
                <table>
                    <?php for($i = 0; $i < $limit; $i++){?>
                    <tr>
                        <td><label>Image <?php echo ($i+1) ?></label></td>
                        <td><input type="text" name="image[]"></td>
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
                         <td><textarea rows="4" cols="50" name="ServiceDetail" class="mytextarea"></textarea></td>
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