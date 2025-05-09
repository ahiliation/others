import os
import ossaudiodev

def read_from_dsp(device_path="/dev/dsp", chunk_size=1024):
    """Reads audio data from the specified /dev/dsp device.

    Args:
        device_path: The path to the /dev/dsp device (default: /dev/dsp).
        chunk_size: The number of bytes to read in each chunk (default: 1024).

    Returns:
        A generator that yields chunks of audio data read from the device.
    """
    try:
        dsp = ossaudiodev.open(device_path, 'rb')
        while True:
            chunk = dsp.read(chunk_size)
            if not chunk:
                break
            yield chunk
    except ossaudiodev.error as e:
        print(f"Error accessing {device_path}: {e}")
    finally:
        if 'dsp' in locals():
            dsp.close()


if __name__ == "__main__":
    for data_chunk in read_from_dsp():
        # Process the audio data chunk here
        # Example: print(f"Received chunk of size: {len(data_chunk)}")
        pass
