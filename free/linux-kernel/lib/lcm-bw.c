#include <linux/kernel.h>
#include <linux/export.h>
#include <linux/lcm.h>

unsigned long lcm(unsigned long a, unsigned long b) 
{

  int  r = 1;
  int  i = 2;
  int flag;

  while  ( (a != 1) &&  (b != 1))
    {
      flag = 0;
      if (( a % i) == 0) {                                                                                                   
	a = a/i;                                                                                                      
	flag = 1;                                                                                                       
      }                                                                                                          
      if ( (b % i) ==  0) {                                                                                                 
	b = b/i;                                                                                                      
	flag = 1;                                                                                                       
      }                                                                                                        
                                                                                                                            
      if ( flag == 1 ) {                                                                                                   
	r = r * i;                                                                                                      
      }
      else
	{                                                                                                                   
	  i = i + 1;                                                                                                      
	}                                                                                                           
    }                                                                                                            
  r = r * a * b;

  return r;

}

EXPORT_SYMBOL_GPL(lcm);
