
<html>
<body>
	<h1>It works!</h1>
	<?php
include("TinyImg.php");
/**
 * Created by PhpStorm.
 * User: Zhang He
 * Date: 2015/6/8
 * Time: 11:45
 */
$tinyImg = new TinyImg();
$key = "****vJ53kGoVkOJ8bwlxt0qk3oxzThs8QDDh****";//这里是你申请的API key
$input = "/Users/april/Study/Blog/public/img2/1"; //这个文件夹下的文件会被压缩
$output = "/Users/april/Study/Blog/public/img-try";//压缩的结果会被保存到这个文件夹中
$tinyImg->compressImgsFolder($key,$input,$output); ?>
</body>
</html>

