1, Execute perf Internal Subsystem Self-Tests
Run all tests:
   sudo perf test

Run specific test suites:
   sudo perf test BPF
   sudo perf test "Track kmem alloc"


sudo perf stat -B dd if=/dev/zero of=/dev/null count=1000000
sudo perf stat -e cpu-cycles,page-faults,context-switches -a sleep 10
sudo perf trace --summary sleep 10
sudo perf trace -e openat,read,write --duration 10.0

