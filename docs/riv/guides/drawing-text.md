---
sidebar_position: 4
---

# Drawing text

RIV comes with two monospaced fonts, one small font and a big font.
You can use them for drawing text on the screen.

## How to draw text

To draw a text, it is simple as:
```cpp
riv_draw_text("hello world!", RIV_SPRITESHEET_FONT_5X7, RIV_CENTER, 128, 128, 2, RIV_COLOR_WHITE);
```

This will draw text in the screen center.

Let's break down the arguments:

- `"hello world!"` - The text to be drawn
- `RIV_SPRITESHEET_FONT_5X7` - The sprite sheet for the font
- `RIV_CENTER` - Text anchor relative position to the text bounding box
- `128, 128` - The x, y coordinates for the text anchor point
- `2` - Scale factor of the text, 2 will draw in double size
- `RIV_COLOR_WHITE` - Text color

## Text anchor point

It's common to need to position a text of unknown size aligned relative to another point,
because of this the `riv_draw_text` API allows you to specify
an anchor position relative to the text bounding box,
and the `x, y` coordinates is actually the anchor position.

In the following cartridge, this is illustrated better
with all possible anchor relative positions:

<div align="center"><iframe src="https://emulator.rives.io/?-no-audio#simple=true&autoplay=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/text-anchor.sqfs" allowFullScreen className="rivemu-frame"></iframe></div>

Notice the red dot is the text position, it always stays in the middle of the screen,
what is varying is the anchor relative position.

You can view the code for this example at
[text-anchor.c](https://github.com/rives-io/riv/blob/main/demos/tools/text-anchor.c).

## Text visualizer

The following cartridge display all characters of the default fonts.
It also allows you to type in a text box to experiment writing your own text.

<div align="center"><iframe src="https://emulator.rives.io/#simple=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/text.sqfs" allowFullScreen className="rivemu-frame"></iframe></div>

You can view the code for this example at
[text.c](https://github.com/rives-io/riv/blob/main/demos/tools/text.c).
