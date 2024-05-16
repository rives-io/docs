---
sidebar_position: 5
---

# Playing sounds

This guide will help you understand how to play sounds.

## Waveforms

RIV can playing simple audio waveforms through the function `riv_waveform`,
which has the following waveform description struct as argument:

```cpp
typedef struct riv_waveform_desc {
  uint64_t id;                 // Sound id (filled automatically)
  riv_waveform_type type;      // Waveform type
  float delay;                 // Start delay in seconds
  float attack;                // Attack duration in seconds
  float decay;                 // Decay duration in seconds
  float sustain;               // Sustain duration in seconds
  float release;               // Release duration in seconds
  float start_frequency;       // Starting frequency in Hz
  float end_frequency;         // Starting frequency in Hz
  float amplitude;             // Maximum amplitude in range (0.0, 1.0]
  float sustain_level;         // Sustain level in range (0.0, 1.0]
  float duty_cycle;            // Duty cycle in range (0.0, 1.0]
  float pan;                   // Pan in range [-1.0, 1.0]
} riv_waveform_desc;
```

Where `riv_waveform_type` can be one of:

- RIV_WAVEFORM_SINE
- RIV_WAVEFORM_SQUARE
- RIV_WAVEFORM_TRIANGLE
- RIV_WAVEFORM_SAWTOOTH
- RIV_WAVEFORM_NOISE
- RIV_WAVEFORM_PULSE

You can define a sound effect configuration and play during an event like this:

```cpp
// Shoot sound configuration
riv_waveform_desc shoot_sfx = {
    .type = RIV_WAVEFORM_PULSE,
    .attack = 0.050, .decay = 0.050, .sustain = 0.150, .release = 0.075,
    .start_frequency = 880, .end_frequency = 220,
    .amplitude = 0.15, .sustain_level = 0.25,
    .duty_cycle = 0.65, .pan = 0.0,
};
// Play the sound
riv_waveform(&shoot_sfx);
```

<!--
## Waveform parameters
-->

## Waveform editor

The following is a tool to help you find new waveform configurations,
the idea is to discover new sounds and its parameters with the tool,
to later copy them into your game.

<div align="center"><iframe src="https://emulator.rives.io/#simple=true&cartridge=cartridges/waveform.sqfs" allowFullScreen className="rivemu-frame"></iframe></div>

You can view the code for this example at
[waveform.c](https://github.com/rives-io/riv/blob/main/demos/tools/waveform.c).

For example, the *JUMP* preset can be replicated with:

```cpp
riv_waveform_desc jump_sfx = {
    .type = RIV_WAVEFORM_TRIANGLE,
    .attack = 0.025, .decay = 0.1, .sustain = 0.075, .release = 0.025,
    .start_frequency = 327, .end_frequency = 702,
    .amplitude = 0.25, .sustain_level = 0.05,
    .duty_cycle = 0.5, .pan = 0.0,
};
riv_waveform(&jump_sfx);
```

<!--
## Sound files

RIV also supports playing WAV/OGG/FLAC/MP3 sound files,
but we recommend using simple waveforms so your cartridge can be small.
-->
