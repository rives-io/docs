---
sidebar_position: 5
---

# Playing sounds

This guide will help you understand how to play sounds.

## Waveforms

RIV can playing simple audio waveforms through the function `riv_waveform`,
using the `riv_waveform_desc` structure as argument, which has the following fields:

- `type` - Waveform type
- `delay` - Start delay in seconds
- `attack` - Attack duration in seconds
- `decay` - Decay duration in seconds
- `sustain` - Sustain duration in seconds
- `release` - Release duration in seconds
- `start_frequency` - Starting frequency in Hz
- `end_frequency` - Starting frequency in Hz
- `amplitude` - Maximum amplitude in range (0.0, 1.0]
- `sustain_level` - Sustain level in range (0.0, 1.0]
- `duty_cycle` - Duty cycle in range (0.0, 1.0]
- `pan` - Pan in range [-1.0, 1.0]

Where `type` can be one of:

- `RIV_WAVEFORM_SINE` - Sine wave
- `RIV_WAVEFORM_SQUARE` - Square wave
- `RIV_WAVEFORM_TRIANGLE` - Triangle wave
- `RIV_WAVEFORM_SAWTOOTH` - Sawtooth wave
- `RIV_WAVEFORM_NOISE` - Noise wave
- `RIV_WAVEFORM_PULSE` - Pulse wave

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
