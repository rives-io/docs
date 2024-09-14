"use strict";(self.webpackChunkrives_docs=self.webpackChunkrives_docs||[]).push([[5273],{5772:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var r=s(4848),i=s(8453);const t={sidebar_position:2},d="Handling inputs",a={id:"riv/guides/handling-inputs",title:"Handling inputs",description:"This guide will explain how it tracks input from the gamepad or keyboard,",source:"@site/docs/riv/guides/handling-inputs.md",sourceDirName:"riv/guides",slug:"/riv/guides/handling-inputs",permalink:"/docs/riv/guides/handling-inputs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Drawing basics",permalink:"/docs/riv/guides/drawing-basics"},next:{title:"Drawing sprites",permalink:"/docs/riv/guides/drawing-sprites"}},l={},o=[{value:"The gamepad",id:"the-gamepad",level:2},{value:"Checking keys state",id:"checking-keys-state",level:2},{value:"The keyboard",id:"the-keyboard",level:2},{value:"Mouse",id:"mouse",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"handling-inputs",children:"Handling inputs"}),"\n",(0,r.jsxs)(n.p,{children:["This guide will explain how it tracks input from the gamepad or keyboard,\nand teach how to handle its events.\nSome piece of C code will be shown and you can try them manually with installed ",(0,r.jsx)(n.em,{children:"RIVEMU"}),"\nor paste and try at the ",(0,r.jsx)(n.a,{href:"/playground",children:"playground"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"the-gamepad",children:"The gamepad"}),"\n",(0,r.jsx)(n.p,{children:"The primary input device is the gamepad, consisting of 16 digital buttons.\nAlthough there are ways to enable more buttons from the keyboard,\ngames are recommended to keep using just the gamepad for its inputs because\nmakes possible to play the game with real hardware gamepads."}),"\n",(0,r.jsx)(n.p,{children:"On computers that doesn't have a real gamepad connected,\nthey gamepad buttons are mapped to the following keyboard keys:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Gamepad Button"}),(0,r.jsx)("th",{children:"Keyboard Key"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"RIV_GAMEPAD_UP"}),(0,r.jsx)("td",{children:"Up"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"RIV_GAMEPAD_DOWN"}),(0,r.jsx)("td",{children:"Down"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"RIV_GAMEPAD_LEFT"}),(0,r.jsx)("td",{children:"Left"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"RIV_GAMEPAD_RIGHT"}),(0,r.jsx)("td",{children:"Right"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"RIV_GAMEPAD_A1"}),(0,r.jsx)("td",{children:"Z"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"RIV_GAMEPAD_A2"}),(0,r.jsx)("td",{children:"X"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"RIV_GAMEPAD_A3"}),(0,r.jsx)("td",{children:"C"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"RIV_GAMEPAD_A4"}),(0,r.jsx)("td",{children:"V"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"RIV_GAMEPAD_L1"}),(0,r.jsx)("td",{children:"S"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"RIV_GAMEPAD_R1"}),(0,r.jsx)("td",{children:"D"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"RIV_GAMEPAD_L2"}),(0,r.jsx)("td",{children:"A"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"RIV_GAMEPAD_R2"}),(0,r.jsx)("td",{children:"F"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"RIV_GAMEPAD_SELECT"}),(0,r.jsx)("td",{children:"W"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"RIV_GAMEPAD_START"}),(0,r.jsx)("td",{children:"E"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"RIV_GAMEPAD_L3"}),(0,r.jsx)("td",{children:"Q"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"RIV_GAMEPAD_R3"}),(0,r.jsx)("td",{children:"R"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"You can test the gamepad buttons on this small tool:"}),"\n",(0,r.jsx)("div",{align:"center",children:(0,r.jsx)("iframe",{src:"https://emulator.rives.io/#simple=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/gamepad.sqfs",allowFullScreen:!0,className:"rivemu-frame"})}),"\n",(0,r.jsx)(n.p,{children:"If you have a real gamepad,\nnotice the analog left buttons are mapped to the directional buttons,\nso even though RIV doesn't support analog buttons yet,\nyou can still use them."}),"\n",(0,r.jsx)(n.h2,{id:"checking-keys-state",children:"Checking keys state"}),"\n",(0,r.jsxs)(n.p,{children:["Every key (and button) state can be inspected by checking the fields from the array ",(0,r.jsx)(n.code,{children:"riv->keys[key]"}),",\nwhere ",(0,r.jsx)(n.code,{children:"key"})," is its key code (e.g ",(0,r.jsx)(n.code,{children:"RIV_GAMEPAD_A1"}),")."]}),"\n",(0,r.jsx)(n.p,{children:"Every entry on that array has the following boolean fields:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"down"})," - Becomes true when the key is pressed, becomes false when released"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"up"})," - Becomes true when the key is released, becomes false when pressed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"press"})," - True ",(0,r.jsx)(n.strong,{children:"only"})," in the frame the key is pressed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"release"})," - True ",(0,r.jsx)(n.strong,{children:"only"})," in the frame the key is released"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For example, in the following you can manipulate a box position and colors based on gamepad inputs:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"#include <riv.h>\nint main() {\n    int x = 128, y = 128, col = RIV_COLOR_RED;\n    do {\n        // move position based on directional gamepad buttons\n        if (riv->keys[RIV_GAMEPAD_UP].down) y--;\n        if (riv->keys[RIV_GAMEPAD_DOWN].down) y++;\n        if (riv->keys[RIV_GAMEPAD_LEFT].down) x--;\n        if (riv->keys[RIV_GAMEPAD_RIGHT].down) x++;\n        // change color when A1 gamepad button (Z on keyboard) is pressed\n        if (riv->keys[RIV_GAMEPAD_A1].press) col = riv_rand_int(1, 32);\n        riv_clear(RIV_COLOR_BLACK); // clear screen\n        riv_draw_rect_fill(x-4, y-4, 8, 8, col); // draw square\n    } while(riv_present());\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"the-keyboard",children:"The keyboard"}),"\n",(0,r.jsx)(n.p,{children:"Inputs from every key from a 105-button QWERTY keyboard can also be tracked,\nhowever tracking for it comes disabled by default."}),"\n",(0,r.jsxs)(n.p,{children:["To enable tracking keyboard buttons,\nyou have to set true entries in the array ",(0,r.jsx)(n.code,{children:"riv->tracked_keys[key]"}),",\nwhere ",(0,r.jsx)(n.code,{children:"key"})," is a key code like ",(0,r.jsx)(n.code,{children:"RIV_KEYCODE_ENTER"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, in the following we enable tracking of ",(0,r.jsx)(n.code,{children:"RIV_KEYCODE_SPACE"}),"\nand draw red on the screen while it is being pressed:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"#include <riv.h>\nint main() {\n    riv->tracked_keys[RIV_KEYCODE_SPACE] = true;\n    do {\n        if (riv->keys[RIV_KEYCODE_SPACE].down) {\n            riv_clear(RIV_COLOR_RED); // set screen to red\n        } else {\n            riv_clear(RIV_COLOR_BLACK); // set screen to black\n        }\n    } while(riv_present());\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"mouse",children:"Mouse"}),"\n",(0,r.jsx)(n.p,{children:"Currently there is no support for mouse or analog buttons.\nFor now this is intentionally to keep tapes events small\nand also force people to make the first console cartridges around digital gamepads,\nso they can be played across many different real console hardware.\nIn the future mouse support might be added."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var r=s(6540);const i={},t=r.createContext(i);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);