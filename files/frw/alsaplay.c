#include <alsa/asoundlib.h>
#include <stdio.h>

int main() {
    int rc;
    snd_pcm_t *handle;
    snd_pcm_hw_params_t *params;
    unsigned int val;
    int dir;
    snd_pcm_uframes_t frames;
    char *buffer;
    int size;
    FILE *fp;

    // Open PCM device for playback
    rc = snd_pcm_open(&handle, "default", SND_PCM_STREAM_PLAYBACK, 0);

    // Allocate hardware parameters object
    snd_pcm_hw_params_alloca(&params);

    // Set all parameters to default
    snd_pcm_hw_params_any(handle, params);

    // Set sample format
    snd_pcm_hw_params_set_format(handle, params, SND_PCM_FORMAT_S16_LE);

    // Set access type (interleaved)
    snd_pcm_hw_params_set_access(handle, params, SND_PCM_ACCESS_RW_INTERLEAVED);

    // Set sample rate
    val = 44100;
    snd_pcm_hw_params_set_rate_near(handle, params, &val, &dir);

    // Set number of channels
    snd_pcm_hw_params_set_channels(handle, params, 2);

    // Apply parameters
    rc = snd_pcm_hw_params(handle, params);

    // Get period size (frames)
    snd_pcm_hw_params_get_period_size(params, &frames, &dir);

    // Calculate buffer size in bytes
    size = frames * 4; // 2 bytes/sample * 2 channels

    // Allocate buffer
    buffer = (char *)malloc(size);

   // Open audio file
    fp = fopen("sunzara.wav", "rb"); // Replace audio.pcm with your raw audio file
    if (fp == NULL) {
        perror("Error opening audio file");
        return 1;
    }

    // Read data and play
    while ((rc = fread(buffer, 1, size, fp)) > 0) {
        snd_pcm_writei(handle, buffer, frames);
    }

    fclose(fp);
    free(buffer);
    snd_pcm_drain(handle);
    snd_pcm_close(handle);
    return 0;
}
