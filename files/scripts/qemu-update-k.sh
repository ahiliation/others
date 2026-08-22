#!/bin/sh
mkdir /tmp/rootfs
sudo mount -o loop rootfs.img /tmp/rootfs
make modules_install INSTALL_MOD_PATH=/tmp/rootfs/ 
sudo umount /tmp/rootfs
