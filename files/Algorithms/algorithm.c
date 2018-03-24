/* Search API Algorithm  Copyright (c) 2012 Jeffrin Jose


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

#include<ftw.h>
#include<stdio.h>
#include<sys/stat.h>
#include<sys/types.h>
#include<pwd.h>
#include<unistd.h>
#include<string.h>
#include<errno.h>
#include<dirent.h>


int main(int argc, char *argv[]) {
int i =0;
char *p;
struct passwd *pw = getpwuid(getuid());

char *homedir = pw->pw_dir;
const char *plocation = "/.sourceinstall/packages";
/* printf("%s\n",homedir); */
const char *npath = strcat(homedir,plocation);
int value = chdir(npath);
DIR *opendirp = opendir(npath);
struct dirent *d; 
while ((d = readdir(opendirp)) != NULL )
/* for (i=0;i<=5;i++) */
{

/* printf("%d %d\n",value,errno); */
printf("%s\n",d->d_name);
} 
closedir(opendirp);


return 0;
}

