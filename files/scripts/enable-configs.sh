# Enable Kernel Address Sanitizer (KASAN) for memory bug detection
./scripts/config --enable CONFIG_KASAN
# Enable lockdep for deadlock detection
./scripts/config --enable CONFIG_PROT_LOCKING
./scripts/config --enable CONFIG_PROVE_LOCKING
