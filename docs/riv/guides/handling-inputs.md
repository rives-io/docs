---
sidebar_position: 2
---

# Handling inputs

This guide will explain how it tracks input from the gamepad or keyboard,
and teach how to handle its events.
Some piece of C code will be shown and you can try them manually with installed *RIVEMU*
or paste and try at the [playground](/playground).

## The gamepad

The primary input device is the gamepad, consisting of 16 digital buttons.
Although there are ways to enable more buttons from the keyboard,
games are recommended to keep using just the gamepad for its inputs because
makes possible to play the game with real hardware gamepads.

On computers that doesn't have a real gamepad connected,
they gamepad buttons are mapped to the following keyboard keys:

<table>
    <thead>
        <tr><th>Gamepad Button</th><th>Keyboard Key</th></tr>
    </thead>
    <tbody>
        <tr><td>RIV_GAMEPAD_UP</td><td>Up</td></tr>
        <tr><td>RIV_GAMEPAD_DOWN</td><td>Down</td></tr>
        <tr><td>RIV_GAMEPAD_LEFT</td><td>Left</td></tr>
        <tr><td>RIV_GAMEPAD_RIGHT</td><td>Right</td></tr>
        <tr><td>RIV_GAMEPAD_A1</td><td>Z</td></tr>
        <tr><td>RIV_GAMEPAD_A2</td><td>X</td></tr>
        <tr><td>RIV_GAMEPAD_A3</td><td>C</td></tr>
        <tr><td>RIV_GAMEPAD_A4</td><td>V</td></tr>
        <tr><td>RIV_GAMEPAD_L1</td><td>S</td></tr>
        <tr><td>RIV_GAMEPAD_R1</td><td>D</td></tr>
        <tr><td>RIV_GAMEPAD_L2</td><td>A</td></tr>
        <tr><td>RIV_GAMEPAD_R2</td><td>F</td></tr>
        <tr><td>RIV_GAMEPAD_SELECT</td><td>W</td></tr>
        <tr><td>RIV_GAMEPAD_START</td><td>E</td></tr>
        <tr><td>RIV_GAMEPAD_L3</td><td>Q</td></tr>
        <tr><td>RIV_GAMEPAD_R3</td><td>R</td></tr>
    </tbody>
</table>

You can test the gamepad buttons on this small tool:

<div align="center"><iframe src="https://emulator.rives.io/#simple=true&cartridge=cartridges/gamepad.sqfs" allowFullScreen className="rivemu-frame"></iframe></div>

If you have a real gamepad,
notice the analog left buttons are mapped to the directional buttons,
so even though RIV doesn't support analog buttons yet,
you can still use them.

## Checking keys state

Every key (and button) state can be inspected by checking the fields from the array `riv->keys[key]`,
where `key` is its key code (e.g `RIV_GAMEPAD_A1`).

Every entry on that array has the following boolean fields:
- `down` - Becomes true when the key is pressed, becomes false when released
- `up` - Becomes true when the key is released, becomes false when pressed
- `press` - True **only** in the frame the key is pressed
- `release` - True **only** in the frame the key is released

For example, in the following you can manipulate a box position and colors based on gamepad inputs:

```cpp
#include <riv.h>
int main() {
    int x = 128, y = 128, col = RIV_COLOR_RED;
    do {
        // move position based on directional gamepad buttons
        if (riv->keys[RIV_GAMEPAD_UP].down) y--;
        if (riv->keys[RIV_GAMEPAD_DOWN].down) y++;
        if (riv->keys[RIV_GAMEPAD_LEFT].down) x--;
        if (riv->keys[RIV_GAMEPAD_RIGHT].down) x++;
        // change color when A1 gamepad button (Z on keyboard) is pressed
        if (riv->keys[RIV_GAMEPAD_A1].press) col = riv_rand_int(1, 32);
        riv_clear(RIV_COLOR_BLACK); // clear screen
        riv_draw_rect_fill(x-4, y-4, 8, 8, col); // draw square
    } while(riv_present());
}
```

## The keyboard

Inputs from every key from a 105-button QWERTY keyboard can also be tracked,
however tracking for it comes disabled by default.

To enable tracking keyboard buttons,
you have to set true entries in the array `riv->tracked_keys[key]`,
where `key` is a key code like `RIV_KEYCODE_ENTER`.

For example, in the following we enable tracking of `RIV_KEYCODE_SPACE`
and draw red on the screen while it is being pressed:

```cpp
#include <riv.h>
int main() {
    riv->tracked_keys[RIV_KEYCODE_SPACE] = true;
    do {
        if (riv->keys[RIV_KEYCODE_SPACE].down) {
            riv_clear(RIV_COLOR_RED); // set screen to red
        } else {
            riv_clear(RIV_COLOR_BLACK); // set screen to black
        }
    } while(riv_present());
}
```

## Mouse

Currently there is no support for mouse or analog buttons.
For now this is intentionally to keep tapes events small
and also force people to make the first console cartridges around digital gamepads,
so they can be played across many different real console hardware.
In the future mouse support might be added.
