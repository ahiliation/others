/* File Reading   Copyright (c) 2012 Jeffrin Jose


 This program is free software; you can redistribute it and/or modify
     it under the terms of the GNU General Public License as published by
 the Free Software Foundation; either version 3 of the License, or
     (at your option) any later version.

 This program is distributed in the hope that it will be useful,
     but WITHOUT ANY WARRANTY; without even the implied warranty of
     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
     GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
     along with this program (look for the file called COPYING);
     if not, write to the Free Software Foundation, Inc.,
         51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

     You can contact the author (Jeffrin Jose) by sending a mail
     to jeffrin@rocketmail.com
*/

#include<string.h>
#include<stdio.h>
#include<errno.h>
main()
{
FILE *point;
int fs;
int i=0;
char ch;
const char *fpath="/home/jeffrin/.sourceinstall/packages/htop-0.9";
/* printf("%s\n",fpath);*/
point=fopen(fpath,"r");
/* while ( fscanf(point,"") != NULL)*/
while (ch != EOF) 
/* for(i=0;i<=5;i++) */
{
ch = fgetc(point);
fputc(ch,stdout);
/* fscanf(point,"%s","%s");
   fprintf(stdout,"%s","%s");
*/
}
printf("\n");
fclose(point);
}
