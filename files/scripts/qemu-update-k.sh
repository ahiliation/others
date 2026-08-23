#!/bin/sh

if [ "$(id -u)" -ne 0 ]; then
    echo "Error: This script must be run as root." >&2
    exit 1
fi

echo "Success: Running with root privileges."

mkdir /tmp/rootfs
mount -o loop rootfs.img /tmp/rootfs
make modules_install INSTALL_MOD_PATH=/tmp/rootfs/ 
umount /tmp/rootfs
