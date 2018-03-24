#include <linux/kernel.h>
#include <linux/gcd.h>
#include <linux/export.h>

unsigned long gcd(unsigned long a, unsigned long b)
{

  unsigned long r;

  if ( a == b)
    {
      r = a;
         return r;
    }

  while (a != b)
    {

      if ( a == 1)
	{
	  r = 1;
	 	  return r;
	}
      if ( b == 1 )
	{
	  r = 1;
		  return r;
	}

      if ( a > b )
	{
	  a = a - b;
	}
      else
	{
	  b = b - a;
	}
    }

  r = a;
   return r;
}
EXPORT_SYMBOL_GPL(gcd);
