<?php
// Create the canvas
$canvas = imagecreate( 150, 80 );
// First colour - this will be the default colour for the canvas
$light_blue = imagecolorallocate( $canvas, 176, 226, 255 );
// The second colour - to be used for the text
$black = imagecolorallocate( $canvas, 0, 0, 0 );
// Path to the font you are going to use
$font = "verdana.ttf";
// Text to write
$text = "Text";
// Font size
$size = "40";
// Add the text to the canvas
imageTTFText( $canvas, $size, 0, 15, 60, $black, $font, $text );
// Save as Text.jpg
imagejpeg( $canvas, "Text.jpg" );
// Clear the memory of the tempory image 
ImageDestroy( $canvas );
?>
