<?php
    require 'config.php';
    
    if ($_SERVER['REQUEST_METHOD'] == 'POST'){
        $write = "<?php";
        
        $write .= "\n";
        $print1 = ($_FILES['imageslider1']['name'] != null)? uploadimage('imageslider1', $sliderimage1):$_POST['sliderimage1'];
        $write .= '$sliderimage1 = "'. $print1.'";';
        
        $write .= "\n";
        $print2 = ($_FILES['imageslider2']['name'] != null)? uploadimage('imageslider2', $sliderimage2):$_POST['sliderimage2'];
        $write .= '$sliderimage2 = "'. $print2 .'";';
        
        $write .= "\n";
        $print3 = ($_FILES['imageslider3']['name'] != null)? uploadimage('imageslider3', $sliderimage3):$_POST['sliderimage3'];
        $write .= '$sliderimage3 = "'. $print3 .'";';
        
        $write .= "\n";
        $print4 = ($_FILES['imageslider4']['name'] != null)? uploadimage('imageslider4', $sliderimage4):$_POST['sliderimage4'];
        $write .= '$sliderimage4 = "'. $print4 .'";';
        
        $write .= "\n";
        $print5 = ($_FILES['imageslider5']['name'] != null)? uploadimage('imageslider5', $sliderimage5):$_POST['sliderimage5'];
        $write .= '$sliderimage5 = "'. $print5 .'";';
        
        $write .= "\n";
        $print6 = ($_FILES['imagebackground']['name'] != null)? uploadimage('imagebackground', $bodyBackgroundUrl):$_POST['bodyBackgroundUrl'];
        $write .= '$bodyBackgroundUrl = "'. $print6 .'";';
        
        $write .= "\n";
        $print7 = ($_FILES['imagelogo']['name'] != null)? uploadimage('imagelogo', $logoSrc):$_POST['logoSrc'];
        $write .= '$logoSrc = "'. $print7 .'";';
        
        $write .= "\n";
        $write .= '$logoWidth = "'. $_POST['logoWidth'].'";';  
        $write .= "\n";
        $write .= '$logoHeight = "'. $_POST['logoHeight'].'";';
        $write .= "\n";
        $write .= '$title = "'. $_POST['title'].'";'; 
        $write .= "\n";
        $write .= '$titleTextColor = "'. $_POST['titleTextColor'].'";';
        $write .= "\n";
        $write .= '$subtitle = "'. $_POST['subtitle'].'";'; 
        $write .= "\n";
        $write .= '$subtitleTextColor = "'. $_POST['subtitleTextColor'].'";';
        $write .= "\n";
        $write .= '$menuItemTextColor = "'. $_POST['menuItemTextColor'].'";';
        $write .= "\n";
        $write .= '$menuItemTextColorHover = "'. $_POST['menuItemTextColorHover'].'";'; 
        $write .= "\n";
        $write .= '$menuItemBackgroundColor = "'. $_POST['menuItemBackgroundColor'].'";'; 
        $write .= "\n";
        $write .= '$menuItemBackgroundColorHover = "'. $_POST['menuItemBackgroundColorHover'].'";';
        $write .= "\n";
        $write .= '$AboutUsTitle = "'. $_POST['AboutUsTitle'].'";';
        $write .= "\n";
        $write .= '$AboutUsTitleTextColor = "'. $_POST['AboutUsTitleTextColor'].'";';
        $write .= "\n";
        $write .= '$AboutUsHeading = "'. $_POST['AboutUsHeading'].'";';
        $write .= "\n";
        $write .= '$AboutUsHeadingTextColor = "'. $_POST['AboutUsHeadingTextColor'].'";';
        $write .= "\n";
        $write .= '$AboutUsContent = "'. $_POST['AboutUsContent'].'";';
        $write .= "\n";
        $write .= '$AboutUsContentTextColor = "'. $_POST['AboutUsContentTextColor'].'";';
        
        $write .= "\n";
        $print8 = ($_FILES['aboutsimageheader']['name'] != null)? uploadimage('aboutsimageheader', $AboutUsBackgroundImageHeader):$_POST['AboutUsBackgroundImageHeader'];
        $write .= '$AboutUsBackgroundImageHeader = "'. $print8 .'";';
        
        $write .= "\n";
        $write .= '$AboutUsBackgroundColorHeader = "'. $_POST['AboutUsBackgroundColorHeader'].'";';
        
        $write .= "\n";
        $print9 = ($_FILES['aboutsimagecontent']['name'] != null)? uploadimage('aboutsimagecontent', $AboutUsBackgroundImageContent):$_POST['AboutUsBackgroundImageContent'];
        $write .= '$AboutUsBackgroundImageContent = "'.$print9.'";'; 
        
        $write .= "\n";
        $write .= '$AboutUsBackgroundColorContent = "'. $_POST['AboutUsBackgroundColorContent'].'";';
        $write .= "\n";
        $write .= '$collapse1Heading  = "'. $_POST['collapse1Heading'].'";';
        $write .= "\n";
        $write .= '$collapse2Heading  = "'. $_POST['collapse2Heading'].'";';
        $write .= "\n";
        $write .= '$collapse3Heading  = "'. $_POST['collapse3Heading'].'";';
        $write .= "\n";
        $write .= '$collapse1Content  = "'. $_POST['collapse1Content'].'";';
        $write .= "\n";
        $write .= '$collapse2Content  = "'. $_POST['collapse2Content'].'";';
        $write .= "\n";
        $write .= '$collapse3Content  = "'. $_POST['collapse3Content'].'";'; 
        
        $write .= "\n";
        $print10 = ($_FILES['serviceimagehover']['name'] != null)? uploadimage('serviceimagehover', $serviceItemHoverImage):$_POST['serviceItemHoverImage'];
        $write .= '$serviceItemHoverImage  = "'. $print10 .'";';
        
        $write .= "\n";
        $write .= '$serviceItemHoverFont  = "'. $_POST['serviceItemHoverFont'].'";';
        $write .= "\n";
        $write .= '$OurTeamTitle  = "'. $_POST['OurTeamTitle'].'";';
        $write .= "\n";
        $write .= '$OurTeamTitleTextColor  = "'. $_POST['OurTeamTitleTextColor'].'";';
        $write .= "\n";
        $write .= '$OurTeamHeading  = "'. $_POST['OurTeamHeading'].'";';
        $write .= "\n";
        $write .= '$OurTeamHeadingTextColor  = "'. $_POST['OurTeamHeadingTextColor'].'";';
        $write .= "\n";
        $write .= '$OurTeamContent  = "'. $_POST['OurTeamContent'].'";';
        $write .= "\n";
        $write .= '$OurTeamContentTextColor  = "'. $_POST['OurTeamContentTextColor'].'";';
        
        $write .= "\n";
        $print11 = ($_FILES['ourteamimageheader']['name'] != null)? uploadimage('ourteamimageheader', $OurTeamBackgroundImageHeader):$_POST['OurTeamBackgroundImageHeader'];
        $write .= '$OurTeamBackgroundImageHeader  = "'.$print11.'";';
        
        $write .= "\n";
        $write .= '$OurTeamBackgroundColorHeader = "'. $_POST['OurTeamBackgroundColorHeader'].'";';
        
        $write .= "\n";
        $print12 = ($_FILES['ourteamimagecontent']['name'] != null)? uploadimage('ourteamimagecontent', $OurTeamBackgroundImageContent):$_POST['OurTeamBackgroundImageContent'];
        $write .= '$OurTeamBackgroundImageContent  = "'.$print12.'";';
        
        $write .= "\n";
        $write .= '$OurTeamBackgroundColorContent  = "'. $_POST['OurTeamBackgroundColorContent'].'";';
        $write .= "\n";
        $write .= '$modalButtonName = "'. $_POST['modalButtonName'].'";';
        $write .= "\n";
        $write .= '$modalButtonHeader = "'. $_POST['modalButtonHeader'].'";';
        $write .= "\n";
        $write .= '$modalButtonContent = "'. $_POST['modalButtonContent'].'";';
        $write .= "\n";
        $write .= '$sender = "'. $_POST['sender'].'";';
        $write .= "\n";
        $write .= '$senderPass  = "'. $_POST['senderPass'].'";';
        $write .= "\n";
        $write .= '$receiver  = "'. $_POST['receiver'].'";';
        $write .= "\n";
        $write .= '$gmapUrl   = "'. $_POST['gmapUrl'].'";';
        $write .= "\n";
        $write .= '$contactInfo   = \''. $_POST['contactInfo'].'\';';
        $write .= "\n";
        $write .= '$contactInfoBorder   = \''. $_POST['contactInfoBorder'].'\';';
        $write .= "\n";
        $write .= '$contactInfoBg   = \''. $_POST['contactInfoBg'].'\';';
        $write .= "\n";
        $write .= '$facebook   = "'. $_POST['facebook'].'";';
        $write .= "\n";
        $write .= '$googleplus   = "'. $_POST['googleplus'].'";';
        $write .= "\n";
        $write .= '$youtube   = "'. $_POST['youtube'].'";';
        $write .= "\n";
        $write .= '$linkedin   = "'. $_POST['linkedin'].'";';
        
        
        $file = fopen("config.php", "w+");
        fwrite($file, $write);
    }
    
    
    
    function uploadimage($img, $value){
            
        if(isset($_FILES[$img])){
            var_dump($FILES[$img]);
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
    
    

?>

<html>
    <head>
        <title>Amdin Pannel</title>
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
        
        <script type="text/javascript" src="tinymce/tinymce.min.js"></script>
        <script type="text/javascript" src="jscolor/jscolor.js"></script>
    
        <script type="text/javascript">
            tinymce.init({
                selector: ".mytextarea"
            });
        </script>
        
    </head>
    <body>
        <div id="header">
            <div id="headerContent">Admin Pannel
                <a href="ServicesAndGallery.php" style=" margin-left: 20px; font-size: 18px;  color:white;">Go to Services and gallery</a>
            </div>
            
        </div>
        <form action="" method="POST" enctype="multipart/form-data">
            <div id="jumbotron">
                <table>
                    <th>Home</th>
                   
                    <tr>
                        <td><label>Slider image 1</label></td>
                        <td><input type="text" name="sliderimage1" value="<?php echo $sliderimage1;?>" ></td>
                        <td><input type="file" name="imageslider1" /></td>
                    </tr>
                    <tr>
                        <td><label>Slider image 2</label></td>
                        <td><input type="text" name="sliderimage2" value="<?php echo $sliderimage2;?>" ></td>
                        <td><input type="file" name="imageslider2" /></td>
                    </tr>
                    <tr>
                        <td><label>Slider image 3</label></td>
                        <td><input type="text" name="sliderimage3" value="<?php echo $sliderimage3;?>" ></td>
                        <td><input type="file" name="imageslider3" /></td>
                    </tr>
                    <tr>
                        <td><label>Slider image 4</label></td>
                        <td><input type="text" name="sliderimage4" value="<?php echo $sliderimage4;?>" ></td>
                        <td><input type="file" name="imageslider4" /></td>
                    </tr>
                    <tr>
                        <td><label>Slider image 5</label></td>
                        <td><input type="text" name="sliderimage5" value="<?php echo $sliderimage5;?>" ></td>
                        <td><input type="file" name="imageslider5" /></td>
                    </tr>
                    <tr>
                        <td><label>Logo url</label></td>
                        <td><input type="text" name="logoSrc" value="<?php echo $logoSrc;?>" ></td>
                        <td><input type="file" name="imagelogo" /></td>
                    </tr>
                    <tr>
                        <td><label>Logo Width</label></td>
                        <td><input type="text" name="logoWidth" value="<?php echo $logoWidth;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Logo Height</label></td>
                        <td><input type="text" name="logoHeight" value="<?php echo $logoHeight;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Title</label></td>
                        <td><input type="text" name="title" value="<?php echo $title;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Title Text Color</label></td>
                        <td><input type="text" name="titleTextColor" class="color {adjust:false}" value="<?php echo $titleTextColor;?>" ></td>
                        <td style="font-size:13px;"> Add # At the beginning of number value eg:- #6B61FF or Use basic color names!</td>
                    </tr>
                    <tr>
                        <td><label>Subtitle</label></td>
                        <td><input type="text" name="subtitle" value="<?php echo $subtitle;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Subtitle Text Color</label></td>
                        <td><input type="text" name="subtitleTextColor" class="color {adjust:false}"  value="<?php echo $subtitleTextColor;?>" ></td>
                        <td style="font-size:13px;"> Add # At the beginning of number value eg:- #6B61FF or Use basic color names!</td>
                    </tr>
                    
                </table>
                
            </div>
            
            
            <div id="jumbotron">
                <table>
                    <th>Layout</th>
                     <tr>
                        <td><label>Website Background Image</label></td>
                        <td><input type="text" name="bodyBackgroundUrl" value="<?php echo $bodyBackgroundUrl;?>" ></td>
                        <td><input type="file" name="imagebackground" /></td>
                    </tr>
                    <tr>
                        <td><label>Menu Text Color</label></td>
                        <td><input type="text" name="menuItemTextColor" class="color {adjust:false}" value="<?php echo $menuItemTextColor;?>" ></td>
                        <td style="font-size:13px;"> Add # At the beginning of number value eg:- #6B61FF or Use basic color names!</td>
                    </tr>
                    <tr>
                        <td><label>Menu Text Color On Hover</label></td>
                        <td><input type="text" name="menuItemTextColorHover" class="color {adjust:false}" value="<?php echo $menuItemTextColorHover;?>" ></td>
                        <td style="font-size:13px;"> Add # At the beginning of number value eg:- #6B61FF or Use basic color names!</td>
                    </tr>
                    <tr>
                        <td><label>Menu Background Color</label></td>
                        <td><input type="text" name="menuItemBackgroundColor" class="color {adjust:false}" value="<?php echo $menuItemBackgroundColor;?>" ></td>
                        <td style="font-size:13px;"> Add # At the beginning of number value eg:- #6B61FF or Use basic color names!</td>
                    </tr>
                    <tr>
                        <td><label>Menu Background Color On Hover</label></td>
                        <td><input type="text" name="menuItemBackgroundColorHover" class="color {adjust:false}" value="<?php echo $menuItemBackgroundColorHover;?>" ></td>
                        <td style="font-size:13px;"> Add # At the beginning of number value eg:- #6B61FF or Use basic color names!</td>
                    </tr>
                </table>
            </div>
            
            
            <div id="jumbotron">
                <table>
                    <th>About Us</th>
                    <tr>
                        <td><label>About Us Title</label></td>
                        <td><input type="text" name="AboutUsTitle" value="<?php echo $AboutUsTitle;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>About Us Title Text Color</label></td>
                        <td><input type="text" name="AboutUsTitleTextColor" class="color {adjust:false}" value="<?php echo $AboutUsTitleTextColor;?>" ></td>
                        <td style="font-size:13px;"> Add # At the beginning of number value eg:- #6B61FF or Use basic color names!</td>
                    </tr>
                    <tr>
                        <td><label>About Us Heading</label></td>
                        <td><input type="text" name="AboutUsHeading" value="<?php echo $AboutUsHeading;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>About Us Heading Text Color</label></td>
                        <td><input type="text" name="AboutUsHeadingTextColor" class="color {adjust:false}" value="<?php echo $AboutUsHeadingTextColor;?>" ></td>
                        <td style="font-size:13px;"> Add # At the beginning of number value eg:- #6B61FF or Use basic color names!</td>
                    </tr>
                    <tr>
                        <td><label>About Us Content</label></td>
                        <td colspan="2"><textarea rows="4" cols="50" name="AboutUsContent" class="mytextarea"><?php echo $AboutUsContent;?></textarea></td>
                    </tr>
                    <tr>
                        <td><label>About Us Content Text Color</label></td>
                        <td><input type="text" name="AboutUsContentTextColor" class="color {adjust:false}" value="<?php echo $AboutUsContentTextColor?>" ></td>
                        <td style="font-size:13px;"> Add # At the beginning of number value eg:- #6B61FF or Use basic color names!</td>
                    </tr>
                    <tr>
                        <td><label>Background image For Header </label></td>
                        <td><input type="text" name="AboutUsBackgroundImageHeader" value="<?php echo $AboutUsBackgroundImageHeader;?>" ></td>
                        <td><input type="file" name="aboutsimageheader" /></td>
                    </tr>
                    <tr>
                        <td><label>Background Color For Header</label></td>
                        <td><input type="text" name="AboutUsBackgroundColorHeader" class="color {adjust:false}" value="<?php echo $AboutUsBackgroundColorHeader;?>" ></td>
                        <td style="font-size:13px;"> Add # At the beginning of number value eg:- #6B61FF or Use basic color names!</td>
                    </tr>
                    <tr>
                        <td><label>Background Image For Content</label></td>
                        <td><input type="text" name="AboutUsBackgroundImageContent" value="<?php echo $AboutUsBackgroundImageContent;?>" ></td>
                        <td><input type="file" name="aboutsimagecontent" /></td>
                    </tr>
                    <tr>
                        <td><label>Background Color For Content</label></td>
                        <td><input type="text" name="AboutUsBackgroundColorContent" class="color {adjust:false}" value="<?php echo $AboutUsBackgroundColorContent;?>" ></td>
                        <td style="font-size:13px;"> Add # At the beginning of number value eg:- #6B61FF or Use basic color names!</td>
                    </tr>
                    <tr>
                        <td><label>Collapse 1 Heading</label></td>
                        <td><input type="text" name="collapse1Heading" value="<?php echo $collapse1Heading;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Collapse 2 Heading</label></td>
                        <td><input type="text" name="collapse2Heading" value="<?php echo $collapse2Heading;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Collapse 3 Heading</label></td>
                        <td><input type="text" name="collapse3Heading"  value="<?php echo $collapse3Heading;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Collapse 1 Content</label></td>
                        <td colspan="2" ><textarea rows="4" cols="50" name="collapse1Content" class="mytextarea"><?php echo $collapse1Content;?></textarea></td>
                    </tr>
                    <tr>
                        <td><label>Collapse 2 Content</label></td>
                        <td colspan="2" ><textarea rows="4" cols="50" name="collapse2Content" class="mytextarea"><?php echo $collapse2Content;?></textarea></td>
                    </tr>
                    <tr>
                        <td><label>Collapse 3 Content</label></td>
                        <td colspan="2" ><textarea rows="4" cols="50" name="collapse3Content" class="mytextarea"><?php echo $collapse3Content;?></textarea></td>
                    </tr>
                </table>
            </div>
            
            
            <div id="jumbotron">
                <table>
                    <th>Services</th>
                    <tr>
                        <td><label> Hover Image For Service</label></td>
                        <td><input type="text" name="serviceItemHoverImage" value="<?php echo $serviceItemHoverImage;?>" ></td>
                        <td><input type="file" name="serviceimagehover"/></td>
                    </tr>
                    <tr>
                        <td><label>Hover Text For Service</label></td>
                        <td><input type="text" name="serviceItemHoverFont" value="<?php echo $serviceItemHoverFont;?>" ></td>
                    </tr>
                </table>
            </div>
            
            
            
            
            <div id="jumbotron">
                <table>
                    <th>Our Team</th>
                    <tr>
                        <td><label>Out Team Title</label></td>
                        <td><input type="text" name="OurTeamTitle" value="<?php echo $OurTeamTitle;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Title Text Color</label></td>
                        <td><input type="text" name="OurTeamTitleTextColor" class="color {adjust:false}" value="<?php echo $OurTeamTitleTextColor;?>" ></td>
                        <td style="font-size:13px;"> Add # At the beginning of number value eg:- #6B61FF or Use basic color names!</td>
                    </tr>
                    <tr>
                        <td><label>Out Team Heading</label></td>
                        <td><input type="text" name="OurTeamHeading" value="<?php echo $OurTeamHeading;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Heading Text Color</label></td>
                        <td><input type="text" name="OurTeamHeadingTextColor" class="color {adjust:false}" value="<?php echo $OurTeamHeadingTextColor;?>" ></td>
                        <td style="font-size:13px;"> Add # At the beginning of number value eg:- #6B61FF or Use basic color names!</td>
                    </tr>
                    <tr>
                        <td><label>Content</label></td>
                        <td colspan="2" ><textarea rows="4" cols="50" name="OurTeamContent" class="mytextarea"><?php echo $OurTeamContent;?></textarea></td>
                    
                    </tr>
                    <tr>
                        <td><label>Content Text Color</label></td>
                        <td><input type="text" name="OurTeamContentTextColor" class="color {adjust:false}" value="<?php echo $OurTeamContentTextColor;?>" ></td>
                        <td style="font-size:13px;"> Add # At the beginning of number value eg:- #6B61FF or Use basic color names!</td>
                    </tr>
                    <tr>
                        <td><label>Background Image For Header </label></td>
                        <td><input type="text" name="OurTeamBackgroundImageHeader" value="<?php echo $OurTeamBackgroundImageHeader;?>" ></td>
                        <td><input type="file" name="ourteamimageheader"/></td>
                    </tr>
                    <tr>
                        <td><label> Background Color For Header</label></td>
                        <td><input type="text" name="OurTeamBackgroundColorHeader" class="color {adjust:false}" value="<?php echo $OurTeamBackgroundColorHeader;?>" ></td>
                        <td style="font-size:13px;"> Add # At the beginning of number value eg:- #6B61FF or Use basic color names!</td>
                    </tr>
                    <tr>
                        <td><label>Background Image For Content</label></td>
                        <td><input type="text" name="OurTeamBackgroundImageContent" value="<?php echo $OurTeamBackgroundImageContent;?>" ></td>
                        <td><input type="file" name="ourteamimagecontent"/></td>
                    </tr>
                    <tr>
                        <td><label>Background Color For Content</label></td>
                        <td><input type="text" name="OurTeamBackgroundColorContent" class="color {adjust:false}"  value="<?php echo $OurTeamBackgroundColorContent;?>" ></td>
                        <td style="font-size:13px;"> Add # At the beginning of number value eg:- #6B61FF or Use basic color names!</td>
                    </tr>
                                     
                    <tr>
                        <td><label>Popup Button Name</label></td>
                        <td><input type="text" name="modalButtonName" value="<?php echo $modalButtonName;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Popup Heading</label></td>
                        <td><input type="text" name="modalButtonHeader" value="<?php echo $modalButtonHeader;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Popup Content</label></td>
                        <td><input type="text" name="modalButtonContent" value="<?php echo $modalButtonContent;?>" ></td>
                    </tr>
                </table>
            </div>
            
            
            
            <div id="jumbotron">
                <table>
                    <th>Contact Us</th>
                     <tr>
                        <td><label>Sender Email Id</label></td>
                        <td><input type="text" name="sender" value="<?php echo $sender;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Sender Password</label></td>
                        <td><input type="password" name="senderPass" value="<?php echo $senderPass;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Receiver Email Id</label></td>
                        <td><input type="text" name="receiver" value="<?php echo $receiver;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Gmap Url</label></td>
                        <td><input type="text" name="gmapUrl" value="<?php echo $gmapUrl;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Contact Info </label></td>
                        <td colspan="2"><textarea rows="4" cols="50" name="contactInfo" class="mytextarea"><?php echo $contactInfo;?></textarea></td>
                    </tr>
                    <tr>
                        <td><label>Contact Info Border</label></td>
                        <td><input type="text" name="contactInfoBorder" class="color {adjust:false}"  value="<?php echo $contactInfoBorder;?>" ></td>
                        <td style="font-size:13px;"> Add # At the beginning of number value eg:- #6B61FF or Use basic color names!</td>
                    </tr>
                    <tr>
                        <td><label>Contact Info Background</label></td>
                        <td><input type="text" name="contactInfoBg" class="color {adjust:false}"  value="<?php echo $contactInfoBg;?>" ></td>
                        <td style="font-size:13px;"> Add # At the beginning of number value eg:- #6B61FF or Use basic color names!</td>
                    </tr>
                </table>
            </div>

            
            
               
            
            
            
            
            <div id="jumbotron">
                <table>
                    <th>Footer</th>
                     <tr>
                        <td><label>Facebook page Url</label></td>
                        <td><input type="text" name="facebook" value="<?php echo $facebook;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Google + page Url</label></td>
                        <td><input type="text" name="googleplus" value="<?php echo $googleplus;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Linkedin page URL</label></td>
                        <td><input type="text" name="linkedin" value="<?php echo $linkedin;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Youtube channel Url</label></td>
                        <td><input type="text" name="youtube" value="<?php echo $youtube;?>" ></td>
                    </tr>
                </table>
            </div>
            
            
            <br/><br/>
            <div style="margin-left: 50%; "><button type="submit" value="Submit">Save Settings</button></div>
               
        </form>
        
    </body>
</html>