#!/usr/bin/perl 
# http://www.daniweb.com/code/snippet216858.html

use strict; 
use warnings; 
use File::Find; 

my $startdir = '/home/jeffrin/Books'; 
my $find = '|'; 
my $replace = '$\mid$'; 
my $doctype = 'tex';  

print qq~Finding "$find" and replacing it with "$replace"\n~; 

find( 
   sub{ 
      return unless (/\.$doctype$/i); 
      local @ARGV = $_; 
      local $^I = '.bac'; 
      while( <> ){ 
         if( s/$find/$replace/ig ) { 
            print; 
         } 
         else { 
            print; 
         } 
      } 
}, $startdir);

print "Finished";
