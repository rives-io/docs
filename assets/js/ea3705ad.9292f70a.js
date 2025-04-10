"use strict";(self.webpackChunkrives_docs=self.webpackChunkrives_docs||[]).push([[1665],{8127:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"riv/guides/drawing-basics","title":"Drawing basics","description":"This guide will introduce and explain the color palette, the framebuffer,","source":"@site/docs/riv/guides/drawing-basics.md","sourceDirName":"riv/guides","slug":"/riv/guides/drawing-basics","permalink":"/docs/riv/guides/drawing-basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Guides","permalink":"/docs/category/guides"},"next":{"title":"Handling inputs","permalink":"/docs/riv/guides/handling-inputs"}}');var i=n(4848),a=n(8453);const s={sidebar_position:1},l="Drawing basics",o={},c=[{value:"The color palette",id:"the-color-palette",level:2},{value:"Modifying the palette",id:"modifying-the-palette",level:3},{value:"The framebuffer",id:"the-framebuffer",level:2},{value:"Customizing the framebuffer",id:"customizing-the-framebuffer",level:3},{value:"Direct framebuffer access",id:"direct-framebuffer-access",level:3},{value:"Drawing shapes",id:"drawing-shapes",level:2}];function d(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"drawing-basics",children:"Drawing basics"})}),"\n",(0,i.jsxs)(r.p,{children:["This guide will introduce and explain the color ",(0,i.jsx)(r.em,{children:"palette"}),", the ",(0,i.jsx)(r.em,{children:"framebuffer"}),",\nand teach how to draw basic shapes.\nSome piece of C code will be shown and you can try them manually with installed ",(0,i.jsx)(r.em,{children:"RIVEMU"}),"\nor paste and try at the ",(0,i.jsx)(r.a,{href:"/playground",children:"playground"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"the-color-palette",children:"The color palette"}),"\n",(0,i.jsxs)(r.p,{children:["RIV can display up to 256 colors on screen per frame.\nThe color ",(0,i.jsx)(r.em,{children:"palette"})," is stored in memory in the ",(0,i.jsx)(r.code,{children:"riv->palette"})," field\nas 32-bit RGB values that can be changed at any time."]}),"\n",(0,i.jsx)(r.p,{children:"By default the palette comes with 32 predefined with colors\nof high contrast, range, and saturation.\nThe default color palette was chosen to suits most use case\nof pixel art games, but can be customized.\nYou can visualize the default color palette in the following:"}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)("iframe",{src:"https://emulator.rives.io/?-no-audio&-stop-frame=1#nocontrols=true&autoplay=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/palette.sqfs",allowFullScreen:!0,className:"rivemu-compact-frame"})}),"\n",(0,i.jsx)(r.p,{children:"The remaining colors from 32-255 are defined as black (#000000) and you can customize it freely.\nAs a recommended guideline, the color 0 should be defined as the darkest black and color 1 to be brightest white."}),"\n",(0,i.jsx)(r.h3,{id:"modifying-the-palette",children:"Modifying the palette"}),"\n",(0,i.jsxs)(r.p,{children:["You can modify or append new colors in the color palette by setting ",(0,i.jsx)(r.code,{children:"riv->palette"})," directly, for example:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-cpp",children:"#include <riv.h>\nint main() {\n    riv->palette[32] = 0xff0000; // set color 32 to blue (actually #0000ff in HTML color code convention)\n    riv_clear(32); // clear the framebuffer with the blue color\n    riv_present(); // present the framebuffer to the screen only once\n}\n"})}),"\n",(0,i.jsx)(r.p,{children:"Notice we have to swap byte order relative to standard HTML color codes (e.g #123456 becomes 0x563412),\nbecause RIV stores the color table in the optimal memory model format for rendering."}),"\n",(0,i.jsxs)(r.p,{children:["It's also possible to load a color palette from color-indexed PNG images\nwith the method ",(0,i.jsx)(r.code,{children:"riv_load_palette"}),",\nuseful when needing to load a sprite sheet color palette before actually loading the sprites images."]}),"\n",(0,i.jsx)(r.h2,{id:"the-framebuffer",children:"The framebuffer"}),"\n",(0,i.jsxs)(r.p,{children:["The RIV ",(0,i.jsx)(r.em,{children:"framebuffer"})," is a buffer responsible for storing pixels to be drawn in the screen, it has the following properties:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["It can store up to 2MB pixels where each pixel is a byte that indexes a color in the ",(0,i.jsx)(r.em,{children:"palette"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"Its size is by default 256x256"}),"\n",(0,i.jsx)(r.li,{children:"Its refresh rate is by default 60 times per second, this is also the maximum."}),"\n",(0,i.jsx)(r.li,{children:"Both size and refresh rate can be changed at any moment, even between frames."}),"\n",(0,i.jsxs)(r.li,{children:["Its pixels are stored in memory in the ",(0,i.jsx)(r.code,{children:"riv->framebuffer"})," field and can be viewed and accessed at any moment."]}),"\n",(0,i.jsx)(r.li,{children:"Its pixels persists across frames."}),"\n",(0,i.jsxs)(r.li,{children:["It is flushed to screen every ",(0,i.jsx)(r.code,{children:"riv_present"})," call."]}),"\n",(0,i.jsxs)(r.li,{children:["It can be cleared with ",(0,i.jsx)(r.code,{children:"riv_clear"})," call."]}),"\n",(0,i.jsx)(r.li,{children:"It initializes filled with zeros, meaning it's initialized to black color from the default palette."}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"customizing-the-framebuffer",children:"Customizing the framebuffer"}),"\n",(0,i.jsxs)(r.p,{children:["You can modify the framebuffer size and target refresh rate by setting\n",(0,i.jsx)(r.code,{children:"riv->width"}),", ",(0,i.jsx)(r.code,{children:"riv->height"})," and ",(0,i.jsx)(r.code,{children:"riv->target_fps"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"For example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-cpp",children:"#include <riv.h>\nint main() {\n    riv->width = 128; // set framebuffer width to 128\n    riv->height = 128; // set framebuffer height to 128\n    riv->target_fps = 30; // set target frame rate to 30 frames per second\n    do {\n        riv_clear(1); // clear the framebuffer with white color\n    } while(riv_present()); // keep presenting the framebuffer to the screen\n}\n"})}),"\n",(0,i.jsx)(r.p,{children:"Although you could set a high resolution in the framebuffer,\nyou should avoid using high resolutions,\notherwise the performance will be low.\nIt's recommended to keep resolution near the default 256x256 one and aspect ratio 1:1."}),"\n",(0,i.jsx)(r.p,{children:"If your game can use lower frame rate than 60, it's recommended to lower it,\nso it can be more lightweight."}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"riv->target_fps"})," is the desirable refresh rate,\nin case a frame is too heavy to process the actual refresh rate could be low."]}),"\n",(0,i.jsx)(r.h3,{id:"direct-framebuffer-access",children:"Direct framebuffer access"}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"riv->framebuffer"})," can be accessed to draw directly, for example:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-cpp",children:"#include <riv.h>\nint main() {\n    int x = 128, y = 64; // pixel position\n    riv->framebuffer[riv->width*y + x] = 1; // set pixel to white\n    riv_present(); // present the framebuffer to the screen only once\n}\n"})}),"\n",(0,i.jsx)(r.p,{children:"Although you can draw almost anything this way,\nRIV has a high level API to make easy to draw many shapes,\ndrawing directly in the framebuffer makes only sense when you want to do\nsome advanced graphic effects, for example:"}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)("iframe",{src:"https://emulator.rives.io/?-stop-frame=300#cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/lines.sqfs&simple=true",allowFullScreen:!0,className:"rivemu-frame"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-cpp",children:"#include <riv.h>\nint main() {\n    do {\n        uint64_t frame = riv->frame; // frame counter, incremented at every frame\n        uint8_t *framebuffer = riv->framebuffer; // array to the frame buffer\n        // animate diagonal lines filled with the color palette\n        for(uint64_t y = 0; y < 256; y++) {\n            for(uint64_t x = 0; x < 256; x++) {\n                framebuffer[((y * 256) + x)] = ((((frame + x) + y) / 8) % 32);\n            }\n        }\n    } while(riv_present()); // keep presenting the framebuffer to the screen\n}\n"})}),"\n",(0,i.jsx)(r.p,{children:"You can notice in the above code that we assign every pixel in the framebuffer to an index\nfrom the color palette. All the RIV drawing shaping functions are implemented this way."}),"\n",(0,i.jsx)(r.h2,{id:"drawing-shapes",children:"Drawing shapes"}),"\n",(0,i.jsx)(r.p,{children:"Although you can draw in the framebuffer directly,\nthis would be very tedious for drawing simple stuff like rectangles, triangles, text and sprites.\nTo make easy to draw stuff on the screen, RIV comes with an opinionated high level drawing API."}),"\n",(0,i.jsx)(r.p,{children:"For example you can draw a rectangle with:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-cpp",children:"#include <riv.h>\nint main() {\n    riv_draw_rect_fill(64, 64, 128, 128, 1);  // draw a white rectangle in the framebuffer center\n    riv_present(); // present the framebuffer to the screen only once\n}\n"})}),"\n",(0,i.jsx)(r.p,{children:"And here a demonstration of all shapes RIV high level API can draw:"}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)("iframe",{src:"https://emulator.rives.io/#cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/shapes.sqfs",allowFullScreen:!0,className:"rivemu-frame"})}),"\n",(0,i.jsxs)(r.p,{children:["You can view the code for this example at\n",(0,i.jsx)(r.a,{href:"https://github.com/rives-io/riv/blob/main/demos/tools/shapes.c",children:"shapes.c"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["You can check all shape drawing functions at the\n",(0,i.jsx)(r.a,{href:"https://github.com/rives-io/riv/blob/main/libriv/riv.h",children:"RIV API"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>l});var t=n(6540);const i={},a=t.createContext(i);function s(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);