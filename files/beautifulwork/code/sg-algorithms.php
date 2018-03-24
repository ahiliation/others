<html>
<body>

<?php 
require( '../wp-load.php' ); 
?>
 

<?php
global $wpdb;
$mylink = $wpdb->get_row("SELECT ID FROM  wp_posts  WHERE post_title LIKE  sort ");
// print_r($mylink);
echo $mylink->ID;

$post_id = $mylink->ID;
$queried_post = get_post($post_id);
$title = $queried_post->post_title;
echo $title;
echo $queried_post->post_content;
?>

 

 






</body>
</html>
