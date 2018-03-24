.global start
[extern _k_main] ; 

_start:
  call _k_main

  cli  ; 
  hlt ; 
