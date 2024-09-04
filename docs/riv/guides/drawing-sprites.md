---
sidebar_position: 4
---

# Drawing sprites

This guide will explain how to draw images, sprites and tile maps using standard RIV APIs.

This guide assumes that you have basic RIV knowledge and already completed the [creating a game tutorial](/docs/riv/creating-a-game.md).

## Downloading an sprite sheet

Before we show how to drawn an image, first you need to have a PNG file of the image.
PNG images are the only supported format by RIV, any other image format is not supported.

For this guide, we will use the free [simple dungeon crawler 16x16 pixel art asset pack](https://o-lobster.itch.io/simple-dungeon-crawler-16x16-pixel-pack) from [itch.io](https://itch.io).
This website has many sprite assets packs, in case you don't have sprites for you game idea
it's a nice website to search for free sprites.

This guide will use a slighly modified version of the original asset pack,
with the following main changes:
1. Removed some duplicated sprites
2. Reorganized the sprite sheet to make it smaller
3. Converted its color mode to 96 indexed color palette using [GIMP](https://www.gimp.org/)
4. Finally optimized the PNG file compression using [oxipng](https://github.com/shssoichiro/oxipng) (available in the RIV SDK).

All the mentioned changes is a good practice to do on your cartridge images,
to make cartridges smaller and more efficient.

The resulting image ended having 4975 bytes with 256x256 resolution:

<center class="pixelated img-512 checkboard-pattern">
![simple_dungeon_crawler_16x16.png](/img/guides/simple_dungeon_crawler_16x16.png)
</center>

You will need to download [this image](/img/guides/simple_dungeon_crawler_16x16.png)
before continuing to the next chapters.

## Drawing an image

Having `simple_dungeon_crawler_16x16.png`, create `sprites.c` with the following contents:
```c
#include <riv.h>

int main() {
    // Load the image from a file
    int img_id = riv_make_image("simple_dungeon_crawler_16x16.png", 255);
    // Main loop
    do {
        // Draw red background
        riv_clear(RIV_COLOR_LIGHTGREEN);
        // Draw the entire image
        riv_draw_image_rect(img_id,
            0, 0,     // screen coordinates x, y
            256, 256, // image source width, height
            0, 0,     // image source coordinates x, y
            1, 1      // multiply width, height
        );
    } while(riv_present());
    return 0;
}
```

In this code, `riv_make_image` is used to load the image file `simple_dungeon_crawler_16x16.png`
and the image can be referred in RIV APIs with its `img_id` id.
Notice this function has a second `color_key` argument, which we set to `255`,
this is only relevant for images that has fully transparent pixels,
any fully transparent pixel of the image will be set to this color index.
Recall that RIV color palette has at most 256 colors, 255 is the very last color index in the palette,
it's a common practice to use the last color as color key of PNG images,
but you are free to use another color index.

In the main loop, first we clean the background with green color,
then we draw the entire image using `riv_draw_image_rect`,


Run it with:

```sh
rivemu -workspace -exec riv-jit-c sprites-1.c
```

<div align="center"><iframe src="https://emulator.rives.io/?-stop-frame=0#simple=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/sprites-1.sqfs" allowFullScreen className="rivemu-frame"></iframe></div>

## Drawing an image using its color palette

Notice the image colors of the previous chapter looks different from the original image,
this is because the image was converted to the nearest colors
on the current RIV color palette, which by default comes with only 32 colors.
However the original image has 96 colors,
to fix this we have to load the original image color palette before actually loading it,
we can do this by using the `riv_load_palette` function:

```c
#include <riv.h>

int main() {
    // Load the image color palette starting into drawing color palette at index 32
    riv_load_palette("simple_dungeon_crawler_16x16.png", 32);
    // Load the image from a file
    int img_id = riv_make_image("simple_dungeon_crawler_16x16.png", 255);
    // Main loop
    do {
        // Draw red background
        riv_clear(RIV_COLOR_LIGHTGREEN);
        // Draw the entire image
        riv_draw_image_rect(img_id, 0, 0, 256, 256, 0, 0, 1, 1);
    } while(riv_present());
    return 0;
}
```

In this code we first load `simple_dungeon_crawler_16x16.png` color palette (which has 96 colors)
filling every new color not available yet in the current color palette
into color indexes starting at index `32`, meaning that it may set color indexes `32-127`.
Recall that the color indexes `0-31` are reserved to the standard RIV color palette,
and we are not modifying it by setting .

Now the image colors looks correct:

<div align="center"><iframe src="https://emulator.rives.io/?-stop-frame=0#simple=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/sprites-2.sqfs" allowFullScreen className="rivemu-frame"></iframe></div>

Keep in mind that the color palette can have at most 255 colors,
so you will be not be able to load multiple different color palette from multiple images,
you have to load at most a set of 255 different colors.

## Drawing an image section

You may want to draw just a section of an image, and even draw it bigger,
by modifying the arguments to `riv_draw_image_rect` you can do this.

The first 2 arguments of this function determines where to drawn in the screen,
the next 4 arguments determines the region from the image to draw,
and finally the last 2 arguments determines how much to multiply the drawing size.
The multiplier arguments can be negative, useful for flipping images.

```c
#include <riv.h>

int main() {
    // Load the image color palette starting into drawing color palette at index 32
    riv_load_palette("simple_dungeon_crawler_16x16.png", 32);
    // Load the image from a file
    int img_id = riv_make_image("simple_dungeon_crawler_16x16.png", 255);
    // Main loop
    do {
        // Draw red background
        riv_clear(RIV_COLOR_LIGHTGREEN);
        // Draw the a section of the image
        riv_draw_image_rect(img_id,
            112, 112, // screen coordinates x, y
            16, 16,   // image source width, height
            0, 128,   // image source coordinates x, y
            -2, 2     // multiply width, height
        );
    } while(riv_present());
    return 0;
}
```

Notice the sprite is flipped to the right and bigger:

<div align="center"><iframe src="https://emulator.rives.io/?-stop-frame=0#simple=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/sprites-3.sqfs" allowFullScreen className="rivemu-frame"></iframe></div>

## Drawing a sprite

Although you could draw many image sections to make a game,
RIV has an API to make drawing sprites easier,
a sprite is basically a section of a sprite sheet image.

Sprites from a sprite sheet are divided by fixed size sections,
in our example image the sprite size is 16x16 pixels.
Each sprite is identified by an index in the sprite sheet,
starting at 0 in the top left and growing to the right and bottom,
a picture make this more clear:

<center class="pixelated img-512 checkboard-pattern">
![sprite indexes](/img/guides/sprite_numbers.png)
</center>

We want to draw sprite `128` (the knight) from our sprite sheet,
in order to do this we first load the sprite sheet from an image using `riv_make_spritesheet`
and later draw the sprite using `riv_draw_sprite`:

```c
#include <riv.h>

int main() {
    // Load the image color palette starting into drawing color palette at index 32
    riv_load_palette("simple_dungeon_crawler_16x16.png", 32);
    // Load the image from a file
    int img_id = riv_make_image("simple_dungeon_crawler_16x16.png", 255);
    // Create a sprite sheet of 16x16 sprites from an image
    int sps_id = riv_make_spritesheet(img_id, 16, 16);
    // Main loop
    do {
        // Draw red background
        riv_clear(RIV_COLOR_LIGHTGREEN);
        // Draw the knight sprite
        riv_draw_sprite(128, sps_id, 112, 112, 1, 1, -2, 2);
    } while(riv_present());
    return 0;
}
```

<div align="center"><iframe src="https://emulator.rives.io/?-stop-frame=0#simple=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/sprites-4.sqfs" allowFullScreen className="rivemu-frame"></iframe></div>

Notice the result is the same as the previous chapter,
however it is easy now to draw different sprites based on its sprite index inside the sprite sheet.

## Animating sprites

With a sprite sheet loaded, it's now easy to animate sprites on the sprite sheet
by just looping its sprite index, for example we can animate the knight based on elapsed time:

```c
#include <riv.h>

int main() {
    // Load the image color palette starting into drawing color palette at index 32
    riv_load_palette("simple_dungeon_crawler_16x16.png", 32);
    // Load the image from a file
    int img_id = riv_make_image("simple_dungeon_crawler_16x16.png", 255);
    // Create a sprite sheet from an image
    int sps_id = riv_make_spritesheet(img_id, 16, 16);
    // Player direction
    int dir = 1;
    // Main loop
    do {
        // Change player direction
        if (riv->keys[RIV_GAMEPAD_LEFT].press) dir = -1;
        if (riv->keys[RIV_GAMEPAD_RIGHT].press) dir = 1;
        // Draw red background
        riv_clear(RIV_COLOR_LIGHTGREEN);
        // Compute animation frame
        int anim = (riv->frame / 4) % 6;
        // Draw the player sprite animated
        riv_draw_sprite(128 + anim, sps_id, 112, 112, 1, 1, 2*dir, 2);
    } while(riv_present());
    return 0;
}
```

Notice that the drawn sprite changes every frame because `anim` depends on `riv->frame`.
The `anim` will loop values from `0-5` every `4` frames.

Also notice in the code that if you press LEFT or RIGHT,  you can have the knight face different directions,
this is done by using negative multiplier for the sprite width.

<div align="center"><iframe src="https://emulator.rives.io/#simple=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/sprites-5.sqfs" allowFullScreen className="rivemu-frame"></iframe></div>

## Drawing a sprite bounding box

It's often needed to compute a bounding box for a given sprite in games
to perform collision detection or do some graphic effects.
For this RIV has the auxiliary API `riv_get_sprite_bbox` that search for opaque pixels
in a sprite and returns its bounding box.
In the last of this guide, we will use this function to detect collision in a simple coin collecting game.

```c
#include <riv.h>

int main() {
    // Load the image color palette starting into drawing color palette at index 32
    riv_load_palette("simple_dungeon_crawler_16x16.png", 32);
    // Load the image from a file
    int img_id = riv_make_image("simple_dungeon_crawler_16x16.png", 255);
    // Create a sprite sheet from an image
    int sps_id = riv_make_spritesheet(img_id, 16, 16);
    // Define player bounding box
    riv_recti bbox = riv_get_sprite_bbox(128, sps_id, 1, 1);
    // Main loop
    do {
        // Draw red background
        riv_clear(RIV_COLOR_BLACK);
        // Draw the standard sprite bounding box
        riv_draw_rect_fill(120, 120, 16, 16, RIV_COLOR_LIGHTGREEN);
        // Draw the player sprite
        riv_draw_sprite(128, sps_id, 120, 120, 1, 1, 1, 1);
        // Draw the sprite bounding box
        riv_draw_rect_line(120 + bbox.x, 120 + bbox.y, bbox.width, bbox.height, RIV_COLOR_WHITE);
    } while(riv_present());
    return 0;
}
```

<div align="center"><iframe src="https://emulator.rives.io/?-stop-frame=0#simple=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/sprites-6.sqfs" allowFullScreen className="rivemu-frame"></iframe></div>

Notice the bounding box in white is smaller than the standard 16x16 sprite size.

## Drawing tile maps

To create 2D games, we often organize game objects into tile maps,
which is basically a grid of tiles where sprites are draw.
We can define a very simple tile map by a multi dimensional array of LxWxH sprites indexes.
Then in the game logic we can draw it by just looping and drawing each sprite,
here is a full example:

```c
#include <riv.h>

enum {
    TILE_SIZE = 16,
    MAP_SIZE = 16,
    MAP_LAYERS = 2,
};

// The game map
uint16_t map[MAP_LAYERS][MAP_SIZE][MAP_SIZE] = {
    { // layer 0 - grounds
        {  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0},
        {  0,  9, 27,  9, 27,  9, 27,  9, 27,  9, 27,  9, 27,  9, 27,  0},
        {  0, 53, 36, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37,  0},
        {  0, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 50, 53, 37,  0},
        {  0, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37,  0},
        {  0, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37,  0},
        {  0, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37,  0},
        {  0, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37,  0},
        {  0, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37,  0},
        {  0, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37,  0},
        {  0, 53, 37, 53, 37, 53, 37, 52, 37, 53, 37, 53, 37, 53, 37,  0},
        {  0, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 35, 53, 37,  0},
        {  0, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37,  0},
        {  0, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37,  0},
        {  0, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37,  0},
        {  0, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37, 53, 37,  0},
    },
    { // layer 1 - objects
        { 14, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 13},
        { 30,150,  0,  4,  0,  0,  0,  4,  0,  0,  0,  0,  3,  0,150, 29},
        { 30,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 29},
        { 30,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 29},
        { 30,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 29},
        { 30,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 29},
        { 30,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0, 29},
        { 30,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 29},
        { 30,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 29},
        { 30,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 29},
        { 30,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 29},
        { 30,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0, 29},
        { 30,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0, 29},
        { 30,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 29},
        { 30,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0, 29},
        { 46, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 45},
    },
};

int main() {
    // Load the image color palette starting into drawing color palette at index 32
    riv_load_palette("simple_dungeon_crawler_16x16.png", 32);
    // Load the image from a file
    int img_id = riv_make_image("simple_dungeon_crawler_16x16.png", 255);
    // Create a sprite sheet from an image
    int sps_id = riv_make_spritesheet(img_id, TILE_SIZE, TILE_SIZE);
    // Main loop
    do {
        // Draw black background
        riv_clear(RIV_COLOR_BLACK);
        // Draw map
        for (int l=0;l<MAP_LAYERS;++l) { // For each layer
            for (int y=0;y<MAP_SIZE;++y) { // For each row
                for (int x=0;x<MAP_SIZE;++x) { // For each column
                    int spr = map[l][y][x];
                    if (spr != 0) { // Draw tile sprite
                        riv_draw_sprite(spr, sps_id, x*TILE_SIZE, y*TILE_SIZE, 1, 1, 1, 1);
                    }
                }
            }
        }
    } while(riv_present());
    return 0;
}
```

<div align="center"><iframe src="https://emulator.rives.io/?-stop-frame=0#simple=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/sprites-7.sqfs" allowFullScreen className="rivemu-frame"></iframe></div>

Cool, right? By organizing sprite indexes into multi dimensional arrays you can create
complex game maps based on the sprite sheet.
Designing maps by hand for simple games is fine,
however you could use a professional map editor to assist the tedious work,
usually tile map editor software offers a way to export the map into a multidimensional arrays.
For a good open source map editor, I recommended using [Tiled](https://www.mapeditor.org/),
for instance it was used to create maps for the [Bladebomber](https://github.com/edubart/bladebomber)
game that is featured on RIVES.

## Making a simple tiled game

Now for the ultimate result of this guide, we will make a small coin collecting game using
most APIs explained in this guide:

<div align="center"><iframe src="https://emulator.rives.io/#simple=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/sprites-8.sqfs" allowFullScreen className="rivemu-frame"></iframe></div>

You can view the full code for this example at
[sprites-8.c](https://github.com/rives-io/riv/blob/main/demos/guide-sprites/sprites-8.c).
