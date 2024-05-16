---
sidebar_position: 4
---

# Drawing text

RIV comes with two monospaced fonts, one small font and a big font.
You can use them for drawing text on the screen.

## Drawing anchored text

To draw a text, it is simple as:
```cpp
riv_draw_text("hello world!", RIV_SPRITESHEET_FONT_5X7, RIV_CENTER, 128, 128, 2, RIV_COLOR_WHITE);
```

## Text visualizer

The following cartridge display all characters of the default fonts.
It also allows you to type in a text box to experiment writing your own text.

<div align="center"><iframe src="https://emulator.rives.io/#simple=true&cartridge=cartridges/text.sqfs" allowFullScreen className="rivemu-frame"></iframe></div>

You can view the code for this example at
[text.c](https://github.com/rives-io/riv/blob/main/demos/tools/text.c).
