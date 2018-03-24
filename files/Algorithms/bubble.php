<?php
/* bubble.php by detour@metalshell.com
 *
 * Generate random numbers then sort them.
 *
 * http://www.metalshell.com/
 *
 */

/* When You double the array size,then double $max from rand($min,$max) */
 
 
$array_size = 8000;
 
// If you use v4.2.0 or lower uncomment this
// srand((double)microtime()*1000000);
 
// Generate $array_size random numbers to be sorted.
for($x = 0; $x < $array_size; $x++)
$ran[$x] = rand(0, 1600);
 
/* The bubble sort method.  If you don't know how it works it's very
 * simple, values are switched one at a time for each element. */
for($x = 0; $x < $array_size; $x++) {
  for($y = 0; $y < $array_size; $y++) {
    if($ran[$x] < $ran[$y]) {
      $hold = $ran[$x];
      $ran[$x] = $ran[$y];
      $ran[$y] = $hold;
    }
  }
}
 
// for($x = 0; $x < $array_size; $x++)
//  print $ran[$x] . "<br>";
// echo "\n $ran[$x]";
// echo "\n";
 
 
?>
