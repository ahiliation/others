/* Word Match   Copyright (c) 2012 Jeffrin Jose


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
#include<regex.h>
#include<stdbool.h>

main()
{
FILE *sfile;
char buffer[200];
char *sword = "usr";
bool found = false;

const char *fpath="/home/jeffrin/.sourceinstall/packages/htop-0.9";
/* printf("%s\n",fpath);*/
sfile=fopen(fpath,"r");
while (!found && (fgets(buffer, sizeof(buffer), sfile ) != 0))
{
found = strstr(buffer,sword );
}
printf("%d\n",found);
fclose(sfile);
}
