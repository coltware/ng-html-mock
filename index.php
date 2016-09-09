<?php
if(!isset($_GET['page'])){
	$_GET['page'] = "/index.html";
}
?>
<!DOCTYPE html>
<html lang="ja" ng-app="main">
<head>
    <meta charset="UTF-8">
    <title>HTML MOCK</title>
    <script type="text/javascript" src="vendor/jquery/jquery-2.2.1.min.js"></script>
    <script type="text/javascript" src="vendor/angularjs/angular.min.js"></script>
    <script type="text/javascript" src="js/server.js"></script>
    <link rel="stylesheet" href="css/mock.css">
</head>
<body>
<?php include("views/header.html"); ?>
<div class="mock-container">
    <?php include("views/menu.html"); ?>
    <div class="mock-main" >
        <?php include("views" .$_GET['page']); ?>
    </div>
</div>
<?php include("views/footer.html"); ?>
</body>
<?php
$script = str_replace(".html",".js",$_GET['page']);
$filename = "js/controllers" . $script;
if(is_file($filename)){
	print sprintf('<script type="text/javascript" src="%s"></script>',$filename);
}
?>
</html>