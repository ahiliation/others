#include <fcntl.h>
#include <unistd.h>
#include <sys/ioctl.h>
#include <linux/soundcard.h> 
#include <stdio.h>
#include <stdlib.h>

#define BUFFER_SIZE 1024

int main(int argc, char *argv[])
{  
    int fd;
    int format = AFMT_S16_LE;
    int channels = 1;
    int speed = 44100;
    char buffer[BUFFER_SIZE];
    ssize_t bytes_read;

    fd = open("/dev/dsp1", O_RDONLY);
    if (fd == -1) {
        perror("Error opening /dev/dsp");
        return 1;
    }

    if (ioctl(fd, SNDCTL_DSP_SETFMT, &format) == -1) {
        perror("Error setting audio format");
        close(fd);
        return 1;
    }

   if (ioctl(fd, SNDCTL_DSP_CHANNELS, &channels) == -1) {
        perror("Error setting number of channels");
        close(fd);
        return 1;
    }

    if (ioctl(fd, SNDCTL_DSP_SPEED, &speed) == -1) {
        perror("Error setting sample rate");
        close(fd);
        return 1;
    }


    while ((bytes_read = read(fd, buffer, BUFFER_SIZE)) > 0) {
        write(STDOUT_FILENO, buffer, bytes_read);
      
    }

    if (bytes_read == -1) {
        perror("Error reading from /dev/dsp");
        close(fd);
        return 1;
    }

    close(fd);
    return 0;
}
