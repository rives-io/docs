---
sidebar_position: 1
---

# Drawing basics

This guide will introduce and explain the color *palette*, the *framebuffer*,
and teach how to draw basic shapes.
Some piece of C code will be shown and you can try them manually with installed *RIVEMU*
or paste and try at the [playground](/playground).

## The color palette

RIV can display up to 256 colors on screen per frame.
The color *palette* is stored in memory in the `riv->palette` field
as 32-bit RGB values that can be changed at any time.

By default the palette comes with 32 predefined with colors
of high contrast, range, and saturation.
The default color palette was chosen to suits most use case
of pixel art games, but can be customized.
You can visualize the default color palette in the following:

<div align="center"><iframe src="https://emulator.rives.io/?-no-audio&-stop-frame=1#nocontrols=true&autoplay=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/palette.sqfs" allowFullScreen className="rivemu-compact-frame"></iframe></div>

The remaining colors from 32-255 are defined as black (#000000) and you can customize it freely.
As a recommended guideline, the color 0 should be defined as the darkest black and color 1 to be brightest white.

### Modifying the palette

You can modify or append new colors in the color palette by setting `riv->palette` directly, for example:

```cpp
#include <riv.h>
int main() {
    riv->palette[32] = 0xff0000; // set color 32 to blue (actually #0000ff in HTML color code convention)
    riv_clear(32); // clear the framebuffer with the blue color
    riv_present(); // present the framebuffer to the screen only once
}
```

Notice we have to swap byte order relative to standard HTML color codes (e.g #123456 becomes 0x563412),
because RIV stores the color table in the optimal memory model format for rendering.

It's also possible to load a color palette from color-indexed PNG images
with the method `riv_load_palette`,
useful when needing to load a sprite sheet color palette before actually loading the sprites images.

## The framebuffer

The RIV *framebuffer* is a buffer responsible for storing pixels to be drawn in the screen, it has the following properties:
- It can store up to 2MB pixels where each pixel is a byte that indexes a color in the *palette*.
- Its size is by default 256x256
- Its refresh rate is by default 60 times per second, this is also the maximum.
- Both size and refresh rate can be changed at any moment, even between frames.
- Its pixels are stored in memory in the `riv->framebuffer` field and can be viewed and accessed at any moment.
- Its pixels persists across frames.
- It is flushed to screen every `riv_present` call.
- It can be cleared with `riv_clear` call.
- It initializes filled with zeros, meaning it's initialized to black color from the default palette.

### Customizing the framebuffer

You can modify the framebuffer size and target refresh rate by setting
`riv->width`, `riv->height` and `riv->target_fps`.

For example:

```cpp
#include <riv.h>
int main() {
    riv->width = 128; // set framebuffer width to 128
    riv->height = 128; // set framebuffer height to 128
    riv->target_fps = 30; // set target frame rate to 30 frames per second
    do {
        riv_clear(1); // clear the framebuffer with white color
    } while(riv_present()); // keep presenting the framebuffer to the screen
}
```

Although you could set a high resolution in the framebuffer,
you should avoid using high resolutions,
otherwise the performance will be low.
It's recommended to keep resolution near the default 256x256 one and aspect ratio 1:1.

If your game can use lower frame rate than 60, it's recommended to lower it,
so it can be more lightweight.

The `riv->target_fps` is the desirable refresh rate,
in case a frame is too heavy to process the actual refresh rate could be low.

### Direct framebuffer access

The `riv->framebuffer` can be accessed to draw directly, for example:

```cpp
#include <riv.h>
int main() {
    int x = 128, y = 64; // pixel position
    riv->framebuffer[riv->width*y + x] = 1; // set pixel to white
    riv_present(); // present the framebuffer to the screen only once
}
```

Although you can draw almost anything this way,
RIV has a high level API to make easy to draw many shapes,
drawing directly in the framebuffer makes only sense when you want to do
some advanced graphic effects, for example:

<div align="center"><iframe src="https://emulator.rives.io/?-stop-frame=300#cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/lines.sqfs&simple=true" allowFullScreen className="rivemu-frame"></iframe></div>

```cpp
#include <riv.h>
int main() {
    do {
        uint64_t frame = riv->frame; // frame counter, incremented at every frame
        uint8_t *framebuffer = riv->framebuffer; // array to the frame buffer
        // animate diagonal lines filled with the color palette
        for(uint64_t y = 0; y < 256; y++) {
            for(uint64_t x = 0; x < 256; x++) {
                framebuffer[((y * 256) + x)] = ((((frame + x) + y) / 8) % 32);
            }
        }
    } while(riv_present()); // keep presenting the framebuffer to the screen
}
```

You can notice in the above code that we assign every pixel in the framebuffer to an index
from the color palette. All the RIV drawing shaping functions are implemented this way.

## Drawing shapes

Although you can draw in the framebuffer directly,
this would be very tedious for drawing simple stuff like rectangles, triangles, text and sprites.
To make easy to draw stuff on the screen, RIV comes with an opinionated high level drawing API.

For example you can draw a rectangle with:

```cpp
#include <riv.h>
int main() {
    riv_draw_rect_fill(64, 64, 128, 128, 1);  // draw a white rectangle in the framebuffer center
    riv_present(); // present the framebuffer to the screen only once
}
```

And here a demonstration of all shapes RIV high level API can draw:

<div align="center"><iframe src="https://emulator.rives.io/#cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/shapes.sqfs" allowFullScreen className="rivemu-frame"></iframe></div>

You can view the code for this example at
[shapes.c](https://github.com/rives-io/riv/blob/main/demos/tools/shapes.c).

You can check all shape drawing functions at the
[RIV API](https://github.com/rives-io/riv/blob/main/libriv/riv.h).
