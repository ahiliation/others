import os

def stream_kmsg():
    # /dev/kmsg requires root privileges to open
    try:
        fd = os.open("/dev/kmsg", os.O_RDONLY | os.O_NONBLOCK)
    except PermissionError:
        print("Error: You must run this script with sudo / root privileges.")
        return
    except FileNotFoundError:
        print("Error: /dev/kmsg not found. Are you on a Linux system?")
        return

    print("Successfully opened /dev/kmsg. Streaming logs...\n")
    
    # Track position manually because normal file operations do not apply
    while True:
        try:
            # Each read returns exactly one distinct kernel log record
            # 8192 bytes is safe as standard max record limit is smaller
            data = os.read(fd, 8192)
            if not data:
                continue
                
            # Decode to string for parsing
            record = data.decode('utf-8', errors='replace')
            
            # The format is: priority,sequence,timestamp,flag;message
            # Example: 4,512,1234567,-;eth0: Link is Up
            metadata, _, message = record.partition(';')
            meta_fields = metadata.split(',')
            
            if len(meta_fields) >= 3:
                priority = int(meta_fields[0])
                sequence = meta_fields[1]
                # Timestamp is in microseconds since system boot
                timestamp_us = int(meta_fields[2])
                timestamp_secs = timestamp_us / 1000000.0
                
                # Isolate facility and level from priority field
                facility = priority >> 3
                level = priority & 7
                
                print(f"[{timestamp_secs:12.6f}] (Lvl {level}/Fac {facility}) Seq:{sequence} -> {message.strip()}") 
                
        except BlockingIOError:
            # Raised due to os.O_NONBLOCK when there are no new records available
            import time
            time.sleep(0.1)
        except KeyboardInterrupt:
            print("\nStopping kmsg stream.")
            break
        except OSError as e:
            # Handle buffer overruns (if a reader falls too far behind the kernel ring buffer)
            if e.errno == 61:  # ENODATA or system-specific overrun error
                print("[Warning] Log buffer overrun occurred; some messages were skipped.")
            else:
                raise

    os.close(fd)

if __name__ == "__main__":
    stream_kmsg()
