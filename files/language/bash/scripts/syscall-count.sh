#!/bin/sh
# system call count

cat $1  | cut -c 39-42 | tail -n +3 | head -n -2
