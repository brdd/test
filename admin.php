<?php
    require 'config.php';
    
    if ($_SERVER['REQUEST_METHOD'] == 'POST'){
        $write = "<?php";
        $write .= "\n";
        $write .= '$sliderimage1 = "'. $_POST['sliderimage1'].'";';
        $write .= "\n";
        $write .= '$sliderimage2 = "'. $_POST['sliderimage2'].'";';
        $write .= "\n";
        $write .= '$sliderimage3 = "'. $_POST['sliderimage3'].'";';
        $write .= "\n";
        $write .= '$sliderimage4 = "'. $_POST['sliderimage4'].'";';
        $write .= "\n";
        $write .= '$sliderimage5 = "'. $_POST['sliderimage5'].'";';
        $write .= "\n";
        $write .= '$bodyBackgroundUrl = "'. $_POST['bodyBackgroundUrl'].'";';
        $write .= "\n";
        $write .= '$logoSrc = "'. $_POST['logoSrc'].'";';
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
        $write .= '$AboutUsBackgroundImageHeader = "'. $_POST['AboutUsBackgroundImageHeader'].'";';
        $write .= "\n";
        $write .= '$AboutUsBackgroundColorHeader = "'. $_POST['AboutUsBackgroundColorHeader'].'";';
        $write .= "\n";
        $write .= '$AboutUsBackgroundImageContent = "'. $_POST['AboutUsBackgroundImageContent'].'";'; 
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
        $write .= '$serviceItemHoverImage  = "'. $_POST['serviceItemHoverImage'].'";';
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
        $write .= '$OurTeamBackgroundImageHeader  = "'. $_POST['OurTeamBackgroundImageHeader'].'";';
        $write .= "\n";
        $write .= '$OurTeamBackgroundColorHeader = "'. $_POST['OurTeamBackgroundColorHeader'].'";';
        $write .= "\n";
        $write .= '$OurTeamBackgroundImageContent  = "'. $_POST['OurTeamBackgroundImageContent'].'";';
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
            input{
                width:450px;
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
            <div id="headerContent">Admin Pannel
                <a href="ServicesAndGallery.php" style=" margin-left: 20px; font-size: 18px;  color:white;">Go to Services and gallery</a>
            </div>
            
        </div>
        <form action="" method="POST">
            <div id="jumbotron">
                <table>
                    <th>Home</th>
                   
                    <tr>
                        <td><label>Slider image 1</label></td>
                        <td><input type="text" name="sliderimage1" value="<?php echo $sliderimage1;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Slider image 2</label></td>
                        <td><input type="text" name="sliderimage2" value="<?php echo $sliderimage2;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Slider image 3</label></td>
                        <td><input type="text" name="sliderimage3" value="<?php echo $sliderimage3;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Slider image 4</label></td>
                        <td><input type="text" name="sliderimage4" value="<?php echo $sliderimage4;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Slider image 5</label></td>
                        <td><input type="text" name="sliderimage5" value="<?php echo $sliderimage5;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Logo url</label></td>
                        <td><input type="text" name="logoSrc" value="<?php echo $logoSrc;?>" ></td>
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
                        <td><label>title Text Color</label></td>
                        <td><input type="text" name="titleTextColor"  value="<?php echo $titleTextColor;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>subtitle</label></td>
                        <td><input type="text" name="subtitle" value="<?php echo $subtitle;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>subtitle Text Color</label></td>
                        <td><input type="text" name="subtitleTextColor" value="<?php echo $subtitleTextColor;?>" ></td>
                    </tr>
                    
                </table>
                
            </div>
            
            
            <div id="jumbotron">
                <table>
                    <th>Layout</th>
                     <tr>
                        <td><label>Body Background Url</label></td>
                        <td><input type="text" name="bodyBackgroundUrl" value="<?php echo $bodyBackgroundUrl;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>menuItem Text Color</label></td>
                        <td><input type="text" name="menuItemTextColor" value="<?php echo $menuItemTextColor;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>menuItemT ext Color Hover</label></td>
                        <td><input type="text" name="menuItemTextColorHover" value="<?php echo $menuItemTextColorHover;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>menuItem Background Color</label></td>
                        <td><input type="text" name="menuItemBackgroundColor" value="<?php echo $menuItemBackgroundColor;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>menuItem Background Color Hover</label></td>
                        <td><input type="text" name="menuItemBackgroundColorHover" value="<?php echo $menuItemBackgroundColorHover;?>" ></td>
                    </tr>
                </table>
            </div>
            
            
            <div id="jumbotron">
                <table>
                    <th>About Us</th>
                    <tr>
                        <td><label>AboutUs Title</label></td>
                        <td><input type="text" name="AboutUsTitle" value="<?php echo $AboutUsTitle;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>AboutUs Title Text Color</label></td>
                        <td><input type="text" name="AboutUsTitleTextColor" value="<?php echo $AboutUsTitleTextColor;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>AboutUs Heading</label></td>
                        <td><input type="text" name="AboutUsHeading" value="<?php echo $AboutUsHeading;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>AboutUs Heading Text Color</label></td>
                        <td><input type="text" name="AboutUsHeadingTextColor" value="<?php echo $AboutUsHeadingTextColor;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>AboutUs Content</label></td>
                        <td><textarea rows="4" cols="50" name="AboutUsContent" class="mytextarea"><?php echo $AboutUsContent;?></textarea></td>
                    </tr>
                    <tr>
                        <td><label>AboutUs Content Text Color</label></td>
                        <td><input type="text" name="AboutUsContentTextColor" value="<?php echo $AboutUsContentTextColor?>" ></td>
                    </tr>
                    <tr>
                        <td><label>AboutUs Background Image Header </label></td>
                        <td><input type="text" name="AboutUsBackgroundImageHeader" value="<?php echo $AboutUsBackgroundImageHeader;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>AboutUs Background Color Header</label></td>
                        <td><input type="text" name="AboutUsBackgroundColorHeader" value="<?php echo $AboutUsBackgroundColorHeader;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>AboutUs Background Image Content</label></td>
                        <td><input type="text" name="AboutUsBackgroundImageContent" value="<?php echo $AboutUsBackgroundImageContent;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>AboutUs Background Color Content</label></td>
                        <td><input type="text" name="AboutUsBackgroundColorContent" value="<?php echo $AboutUsBackgroundColorContent;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>collapse 1 Heading</label></td>
                        <td><input type="text" name="collapse1Heading" value="<?php echo $collapse1Heading;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>collapse 2 Heading</label></td>
                        <td><input type="text" name="collapse2Heading" value="<?php echo $collapse2Heading;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>collapse 3 Heading</label></td>
                        <td><input type="text" name="collapse3Heading"  value="<?php echo $collapse3Heading;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>collapse 1 Content</label></td>
                        <td><textarea rows="4" cols="50" name="collapse1Content" class="mytextarea"><?php echo $collapse1Content;?></textarea></td>
                    </tr>
                    <tr>
                        <td><label>collapse 2 Content</label></td>
                        <td><textarea rows="4" cols="50" name="collapse3Content" class="mytextarea"><?php echo $collapse2Content;?></textarea></td>
                    </tr>
                    <tr>
                        <td><label>collapse 3 Content</label></td>
                        <td><textarea rows="4" cols="50" name="collapse3Content" class="mytextarea"><?php echo $collapse3Content;?></textarea></td>
                    </tr>
                </table>
            </div>
            
            
            <div id="jumbotron">
                <table>
                    <th>Services</th>
                    <tr>
                        <td><label>serviceItem Hover Image</label></td>
                        <td><input type="text" name="serviceItemHoverImage" value="<?php echo $serviceItemHoverImage;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>serviceItem Hover Font</label></td>
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
                        <td><label>Out Team Title Text Color</label></td>
                        <td><input type="text" name="OurTeamTitleTextColor" value="<?php echo $OurTeamTitleTextColor;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Out Team Heading</label></td>
                        <td><input type="text" name="OurTeamHeading" value="<?php echo $OurTeamHeading;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Out Team Heading Text Color</label></td>
                        <td><input type="text" name="OurTeamHeadingTextColor" value="<?php echo $OurTeamHeadingTextColor;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Out Team Content</label></td>
                        <td><textarea rows="4" cols="50" name="OurTeamContent" class="mytextarea"><?php echo $OurTeamContent;?></textarea></td>
                    
                    </tr>
                    <tr>
                        <td><label>Out Team Content Text Color</label></td>
                        <td><input type="text" name="OurTeamContentTextColor" value="<?php echo $OurTeamContentTextColor;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Out Team Background Image Header </label></td>
                        <td><input type="text" name="OurTeamBackgroundImageHeader" value="<?php echo $OurTeamBackgroundImageHeader;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Out Team Background Color Header</label></td>
                        <td><input type="text" name="OurTeamBackgroundColorHeader" value="<?php echo $OurTeamBackgroundColorHeader;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Out Team Background Image Content</label></td>
                        <td><input type="text" name="OurTeamBackgroundImageContent" value="<?php echo $OurTeamBackgroundImageContent;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Out Team Background Color Content</label></td>
                        <td><input type="text" name="OurTeamBackgroundColorContent" value="<?php echo $OurTeamBackgroundColorContent;?>" ></td>
                    </tr>
                                     
                    <tr>
                        <td><label>modal Button Name</label></td>
                        <td><input type="text" name="modalButtonName" value="<?php echo $modalButtonName;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>modal Button Header</label></td>
                        <td><input type="text" name="modalButtonHeader" value="<?php echo $modalButtonHeader;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>modal Button Content</label></td>
                        <td><input type="text" name="modalButtonContent" value="<?php echo $modalButtonContent;?>" ></td>
                    </tr>
                </table>
            </div>
            
            
            
            <div id="jumbotron">
                <table>
                    <th>Contact Us</th>
                     <tr>
                        <td><label>Sender</label></td>
                        <td><input type="text" name="sender" value="<?php echo $sender;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Sender Password</label></td>
                        <td><input type="password" name="senderPass" value="<?php echo $senderPass;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Receiver</label></td>
                        <td><input type="text" name="receiver" value="<?php echo $receiver;?>" ></td>
                    </tr>
                    <tr>
                        <td><label>Gmap Url</label></td>
                        <td><input type="text" name="gmapUrl" value="<?php echo $gmapUrl;?>" ></td>
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