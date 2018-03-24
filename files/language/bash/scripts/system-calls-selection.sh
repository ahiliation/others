#!/bin/sh
# system call names selection 

cat $1  | cut -c 52-66 | tail -n +3 | head -n -2
