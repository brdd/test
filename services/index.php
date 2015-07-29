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
  	
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        
        
        <style>
	.modalDialog {
		position: fixed;
		font-family: Arial, Helvetica, sans-serif;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0,0,0,0.8);
		z-index: 99999;
		opacity:0;
		-webkit-transition: opacity 400ms ease-in;
		-moz-transition: opacity 400ms ease-in;
		transition: opacity 400ms ease-in;
		pointer-events: none;
	}

	.modalDialog:target {
		opacity:1;
		pointer-events: auto;
	}

	.modalDialog > div {
		width: 400px;
		position: relative;
		margin: 10% auto;
		padding: 5px 20px 13px 20px;
		border-radius: 10px;
		background: #fff;
	}

	.close {
		background: #606061;
		color: #FFFFFF;
		line-height: 25px;
		position: absolute;
		right: -12px;
		text-align: center;
		top: -10px;
		width: 24px;
		text-decoration: none;
		font-weight: bold;
		-webkit-border-radius: 12px;
		-moz-border-radius: 12px;
		border-radius: 12px;
		-moz-box-shadow: 1px 1px 3px #000;
		-webkit-box-shadow: 1px 1px 3px #000;
		box-shadow: 1px 1px 3px #000;
	}

	.close:hover { background: #00d9ff; }
	</style>
        
        
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
                        
                        
                        <a href="#openModal" class="btn btn-success" style="float:right" >Open Modal</a><br/>
                        <div id="openModal" class="modalDialog">
                            <div>
                                <a href="" title="Close" class="close">X</a>
                                <?php echo $GalleryModalContent?>
                            </div>
                        </div>

                        
			<p><?php echo $serviceGallerItemsDetails [$_GET['id']]['detail']?></p>
						
		</div> <!-- cd-item-info -->
	</section> <!-- cd-single-item -->
 
	
<script src="js/jquery-2.1.1.js"></script>
<script src="js/jquery.mobile.min.js"></script>
<script src="js/main.js"></script> <!-- Resource jQuery -->
</body>
</html>