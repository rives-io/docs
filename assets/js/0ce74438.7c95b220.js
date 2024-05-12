"use strict";(self.webpackChunkrives_docs=self.webpackChunkrives_docs||[]).push([[3365],{1891:(e,n,r)=>{r.r(n),r.d(n,{default:()=>l});var i=r(9201),t=r(6540),s=r(1070),d=r(2144),a=r(9135),c=r(9469),o=r(4848);function l(){const[e,n]=t.useState('//riv-jit-c (DO NOT REMOVE THIS LINE)\n#include <riv.h>\nvoid main() { // entry point\n  int x = 128, y = 128; // red dot position\n  do { // main loop\n    // handle inputs\n    if (riv->keys[RIV_GAMEPAD_UP].down) y--;\n    if (riv->keys[RIV_GAMEPAD_DOWN].down) y++;\n    if (riv->keys[RIV_GAMEPAD_LEFT].down) x--;\n    if (riv->keys[RIV_GAMEPAD_RIGHT].down) x++;\n    // draw screen\n    riv_clear(RIV_COLOR_BLUE); // clear screen\n    riv_draw_rect_fill(0, 200, 256, 56, RIV_COLOR_PEACH); // draw beach\n    riv_draw_circle_fill(x, y, 8, RIV_COLOR_RED); // draw red dot\n    if (y >= 202) { // check if red dot reached the beach\n      riv_draw_text("MAX IS AT THE BEACH\\nYOU SAVED HIM", RIV_SPRITESHEET_FONT_5X7,\n                    RIV_CENTER, 128, 128, 2, RIV_COLOR_YELLOW); // draw end screen\n      riv->quit = true; // end game\n    } else if (y <= 32) {\n      riv_clear(RIV_COLOR_BLACK); // clear screen\n      riv_draw_text("MAX WAS LOST AT\\nTHE DEEP OCEAN", RIV_SPRITESHEET_FONT_5X7,\n                    RIV_CENTER, 128, 128, 2, RIV_COLOR_RED); // draw text\n      riv->quit = true; // end game\n    } else {\n      riv_draw_text("THE RED DOT IS MAX\\nTAKE HIM TO THE BEACH", RIV_SPRITESHEET_FONT_5X7,\n                    RIV_CENTER, 128, 64, 1, RIV_COLOR_WHITE); // draw text\n    }\n  } while(riv_present()); // refresh screen and wait next frame\n}'),r=t.useCallback(((e,r)=>{n(e)}),[]);return(0,o.jsx)(i.A,{title:"Playground",description:"Code cartridges directly in the browser",children:(0,o.jsx)("main",{children:(0,o.jsx)("div",{className:"container margin-vert--sm",children:(0,o.jsxs)("div",{className:"row row--no-gutters",children:[(0,o.jsx)("div",{className:"col col--6",children:(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("iframe",{id:"rivemu",allowFullScreen:!0,className:"rivemu-frame"})})}),(0,o.jsxs)("div",{className:"col col--6",children:[(0,o.jsx)(s.Ay,{value:e,height:"548px",theme:c.f$,onChange:r,onCreateEditor:()=>{let n=document.getElementById("rivemu"),r=n.contentWindow;window.addEventListener("message",(n=>{n.data.rivemuLoaded&&r.postMessage({rivemuRunCode:!0,code:e},"*")}),!1),n.src="https://emulator.rives.io/#simple=true&editor=true"},extensions:[(0,a.I)({}),d.w4.of([{key:"Shift-Enter",run:()=>(document.getElementById("rivemu").contentWindow.postMessage({rivemuRunCode:!0,code:e,start:!0},"*"),!0)},{key:"Ctrl-Shift-Enter",run:()=>{let n=document.getElementById("rivemu");return n.contentWindow.postMessage({rivemuRunCode:!0,code:e,start:!0},"*"),n.focus(),n.contentWindow.focus(),!0}}])]}),(0,o.jsxs)("small",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"SHIFT + Enter"}),": Run."]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"CTRL + SHIFT + Enter"}),": Run and focus canvas."]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"CTRL + SHIFT + I"}),": Open console output to see syntax errors."]}),(0,o.jsx)("div",{children:"If the screen is stuck while loading, means the cartridge has syntax errors or crashed."})]})]})]})})})})}}}]);