<html>
<head>
<link href='http://fonts.googleapis.com/css?family=Ubuntu+Mono' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Kelly+Slab' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Andada' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="http://www.beautifulwork.org/css/bootstrap/bootstrap-responsive.css" />
<link rel="stylesheet" type="text/css" href="http://www.beautifulwork.org/css/bootstrap/bootstrap-responsive.min.css" />
<link rel="stylesheet" type="text/css" href="http://www.beautifulwork.org/css/bootstrap/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="http://www.beautifulwork.org/css/bootstrap/bootstrap.min.css" />

<style>
      body {
        font-family: 'Ubuntu Mono', sans-serif;
        <!-- font-size: 48px; -->
      }
    </style>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-15779763-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</head>

<body style="background-color:#ffffff;">

<style type="text/css">
.leftA
{
position:absolute;
left:25%;
font-size:18px;
}

.bwhome
{
position:absolute;
left:2%;
top:2%;
font-size:16px;
color: #4671d5;
}


.searchb
{
background-color:#ffffff;
font-size:16px;
font-family: 'Kelly Slab', cursive;
border-color:#4671d5;
border-width:1px;
{

</style>


 
<div class="bwhome">
<a href="index.php"> BEAUTIFUL SEARCH  HOME </a>
</div>




<?php

 
$con = mysql_connect("localhost","--username--","--password--");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }


// some code
mysql_select_db("beautkst_beauty_wrdp1", $con);
// echo $_POST['search'];
// $result = mysql_query("SELECT * FROM wp_posts");


$search='%'.$_POST['value'].'%';



// echo $search;

// $search='%' . $_POST['search'];
// echo $search; die ;
// echo "SELECT * FROM wp_posts  WHERE post_content LIKE '$search' "; die;
 // $result = mysql_query("SELECT * FROM wp_posts  WHERE post_content LIKE '$search' ");
?>
<center>
<div  style="font-size:18px;border-width:1px;">
<!-- <a href="http://www.bweagle.in"><img style="width:10%;" src="images/bweagle.png" /></a> -->

<!-- <div style="font-size:20px;">
BWEAGLE
</div> -->

<form action="search.php" method="post">
<input style="height:40px;color:#7277d8;" type="text" size="80" name="value" /><br>
<!-- <input type="radio"  name="Newbie" value="Newbie" /> STARTER <br />
<input type="radio"  name="Newbie" value="Newbie" /> INTERMEDIATE <br />
<input type="radio"  name="Newbie" value="Newbie" /> ADVANCED <br /> -->
<!-- <input type="checkbox"  name="Newbie" value="Newbie" />  <br /> -->
<input type="submit" class="searchb"  />
<!-- <br><br> -->
<!-- Search Field : <input type="text" name="field" /> -->
</form>
</div>
</center>

<?php
$result = mysql_query("SELECT * FROM wp_posts WHERE post_content LIKE '$search' " ); 
  if(!$result) die(mysql_error());
$a                = mysql_fetch_object($result); 
$total_items      = mysql_num_rows($result); 
$limit            = $_GET['limit']; 
$type             = $_GET['type']; 
$page             = $_GET['page']; 
  
  //set default if: $limit is empty, non numerical, less than 10, greater than 50 
if((!$limit)  || (is_numeric($limit) == false) || ($limit < 10) || ($limit > 50)) { 
     $limit = 10; //default 
   
}


//set default if: $page is empty, non numerical, less than zero, greater than total available 
if((!$page) || (is_numeric($page) == false) || ($page < 0) || ($page > $total_items)) { 
      $page = 1; //default 
} 


//calcuate total pages 
$total_pages     = ceil($total_items / $limit); 
$set_limit          = $page * $limit - ($limit); 


//query: **EDIT TO YOUR TABLE NAME, ECT. 

$q = mysql_query("SELECT * FROM wp_posts WHERE  post_content LIKE '$search' LIMIT $set_limit, $limit"); 
  if(!$q) die(mysql_error()); 
     $err = mysql_num_rows($q); 
       if($err == 0) die("No matches met your criteria."); 


//Results per page: **EDIT LINK PATH** 
// echo("   
// <a href=result.php?cat=$cat&amp;limit=10&amp;page=1>10</a> | 
// <a href=result.php?cat=$cat&amp;limit=25&amp;page=1>25</a> | 
// <a href=result.php?cat=$cat&amp;limit=50&amp;page=1>50</a>"); 


// show data matching query: 
// while($code = mysql_fetch_object($q)) { 
//     echo("item: ".results->title."<BR>"); 
// } 



  
  
// print_r($result); die;
// echo $result;
?>
<!-- <a style="font-size:20px;" href="index.php">BWEAGLE +++</a> -->
<br><br>
<div class="leftA">
<?php
 // $i=0; 


while($row = mysql_fetch_array($q,MYSQL_ASSOC))
  {
 // if ($i== 20) 
// {
// echo "<div>";
// echo "<img src='images/bweagle.png' />";
// echo "</div>";
// }
// echo $row ;

$postdate= $row['post_date'];
$splitdatetime= explode(" ",$postdate);
$splitdate= explode("-",$splitdatetime[0]);
$urltitle=str_replace(" ","-", $row['post_title']);


// echo '<td><a href="http://www.beautifulwork.org/$splitdate[0]/$splitdate[1]/$splitdate[2]/$urltitle"> +-- 
// '.$row['post_title'].'</a></td>';
 

?>
<!-- <ul style="list-style-type:square;line-height:0.3em;"> -->
<li style="list-style-type:square;line-height:0.8em;font-family: 'Andada', serif;">
<a href="http://www.beautifulwork.org/<?php echo $splitdate[0];?>/<?php echo $splitdate[1]; ?>/<?php echo $splitdate[2]; ?>/<?php echo $urltitle; ?>"><?php echo $row['post_title']; ?></a><br><br>
<!-- http://www.beautifulwork.org/<?php echo $splitdate[0];?>/<?php echo $splitdate[1].'....'; ?> -->
<div style="font-size:14px;">
<!-- <?php echo $row[0]; ?><br> -->
<?php $string= strip_tags($row['post_content']); ?>
<?php echo substr($string,0,100); ?> <br><br>
<?php echo "comment status: ". $row['comment_status']; ?><br>
<?php echo "post status: ". $row['post_status']; ?>
</div>
</li>
<!-- </ul> -->
<?php

// $gl=$_GET["gl"];

// echo $gl;

// print_r(mysql_fetch_assoc($q));
// echo "<br>";
 // $i=$i+1;
// echo $row["post_content"] . " " . $row['post_name'];
echo "<br />";
  }
  $cat = urlencode($cat); //makes browser friendly 

//prev. page: **EDIT LINK PATH** 

$prev_page = $page - 1; 

if($prev_page >= 1) { 
  echo("<b>&lt;&lt;</b> <a href=search.php?cat=$cat&amp;limit=$limit&amp;page=$prev_page><b>Prev.</b></a>"); 
} 

//Display middle pages: **EDIT LINK PATH** 

//$low=0;
 
for($a = 1; $a <= $total_pages; $a++) 
 { 
     
    if($a == $page) { 
      echo("<b> $a</b> | "); //no link 
     } else
 { 
  echo("  <a href=search.php?cat=$cat&amp;limit=$limit&amp;page=$a> $a </a> | "); 
     } 
 } 

//next page: **EDIT THIS LINK PATH** 

$next_page = $page + 1; 
if($next_page <= $total_pages) { 
   echo("<a href=search.php?cat=$cat&amp;limit=$limit&amp;page=$next_page><b>Next</b></a> &gt; &gt;"); 
} 
  
 
?>
</div>

<?php
mysql_close($con);
?>
</body>
</html>