# Enable Kernel Address Sanitizer (KASAN) for memory bug detection
./scripts/config --enable CONFIG_KASAN
# Enable lockdep for deadlock detection
#./scripts/config --enable CONFIG_PROT_LOCKING
#./scripts/config --ensble CONFIG_PROVE_LOCKING
./scripts/config --enable CONFIG_KASAN_INLINE
./scripts/config --enable CONFIG_CONFIGFS_FS
./scripts/config --enable CONFIG_SECURITYFS

./scripts/config --enable CONFIG_CMDLINE_BOOL
./scripts/config --set-str CONFIG_CMDLINE "net.ifnames=0"
