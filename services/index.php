<?php
    require '../config.php';
    require '../ServiceConfig.php';

    if(!array_key_exists($_GET['id'], $serviceGallerItems)){
        header("Location: ../index.php");
        die();
    }
?>



<!doctype html>
<html lang="en" class="no-js">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/reset.css"> <!-- CSS reset -->
	<link rel="stylesheet" href="css/style.css"> <!-- Resource style -->
	<script src="js/modernizr.js"></script> <!-- Modernizr -->
  	
	<title></title>
</head>
<body style="margin-top:-50px;">
	<header style="background-color:#fafafa;" >
		<h1 style="color:black">Services In Detail</h1>
	</header>

	<section class="cd-single-item" style="margin-top:-50px;">
		<div class="cd-slider-wrapper">
			<ul class="cd-slider">
                                
                            <?php 
                                for($i=0; $i < count($serviceGallerItems[$_GET['id']]); $i++){
                                    if($i==0){
                                        echo "<li class='selected'><img src=".$serviceGallerItems[$_GET['id']][0]."></li>";
                                        continue;
                                    }
                                     echo "<li><img src=".$serviceGallerItems[$_GET['id']][$i]."></li>";
                                }
                            ?>
                                
                            
                            
		
                                
                                
			</ul> <!-- cd-slider -->

			<ul class="cd-slider-navigation">
				<li><a href="#0" class="cd-prev inactive">Next</a></li>
				<li><a href="#0" class="cd-next">Prev</a></li>
			</ul> <!-- cd-slider-navigation -->

			<a href="#0" class="cd-close">Close</a>
		</div> <!-- cd-slider-wrapper -->

		<div class="cd-item-info">
			<h2><?php echo $serviceGallerItemsDetails [$_GET['id']]['name']?></h2>

			<p><?php echo $serviceGallerItemsDetails [$_GET['id']]['detail']?></p>
						
		</div> <!-- cd-item-info -->
	</section> <!-- cd-single-item -->
 
	
<script src="js/jquery-2.1.1.js"></script>
<script src="js/jquery.mobile.min.js"></script>
<script src="js/main.js"></script> <!-- Resource jQuery -->
</body>
</html>