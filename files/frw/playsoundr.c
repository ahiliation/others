#include <ao/ao.h>
#include <stdio.h>
#include <stdlib.h>

int main() {
    ao_device *dev;
    ao_sample_format format;
    int driver;
    char *buffer;
    int size;
    FILE *fp;

    ao_initialize();

    driver = ao_default_driver_id();

    format.bits = 16;
    format.channels = 2;
    format.rate = 44100;
    format.byte_format = AO_FMT_LITTLE;

    dev = ao_open_live(driver, &format, NULL);
    if (dev == NULL) {
        printf("Error opening device.\n");
        return 1;
    }

    fp = fopen("sunzara,wav", "rb"); // Replace audio.raw with your raw audio file
     if (fp == NULL) {
        printf("Error opening file.\n");
        return 1;
    }
    
    size = 4096;
    buffer = (char *)malloc(size);
    
    while (fread(buffer, 1, size, fp) > 0) {
        ao_play(dev, buffer, size);
    }

    fclose(fp);
    free(buffer);
    ao_close(dev);
    ao_shutdown();
    return 0;
}
