<?

/* Author : Jeffrin Jose */
/* License : GPL */

$main[1]="Learning";
$main[2]="Algorithms";
/* $main[3]="Kernel"; */
/* $main[4]="Math"; */
$lm[1]="Learning Model I";
$lm[2]="Learning Model II";
$lm[3]="Learning Model III";
$lm[4]="Learning Model IV";
$lm[5]="Learning Model V";

$level[1]= "Starter";
$level[2]= "Intermediate";
$level[3]= "Advanced";

$algoc[1] = "Learning And Development";
$algoc[2] = "Programming Languages";


$work1 = rand(1,2);

$result= $main[$work1];

if ($result == $main[1] )
{
$work2 = rand(1,5);
$work3 = rand(1,3);
?>
<u> LEARNING </u>
<?
echo "\n $level[$work3]";
echo "\n";
echo "\n $lm[$work2]";
echo "\n";

/* echo $work; */
}
else
{
$work4 = rand(1,2)
?>
<u>ALGORITHMS</u>
<?
echo "\n $algoc[$work4]";
}

?>
