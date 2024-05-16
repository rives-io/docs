"use strict";(self.webpackChunkrives_docs=self.webpackChunkrives_docs||[]).push([[5771],{8091:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=i(4848),t=i(8453);const r={sidebar_position:5},a="Playing sounds",o={id:"riv/guides/playing-sounds",title:"Playing sounds",description:"This guide will help you understand how to play sounds.",source:"@site/docs/riv/guides/playing-sounds.md",sourceDirName:"riv/guides",slug:"/riv/guides/playing-sounds",permalink:"/docs/riv/guides/playing-sounds",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Drawing text",permalink:"/docs/riv/guides/drawing-text"},next:{title:"Cheatsheet",permalink:"/docs/riv/cheatsheet"}},l={},d=[{value:"Waveforms",id:"waveforms",level:2},{value:"Waveform editor",id:"waveform-editor",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"playing-sounds",children:"Playing sounds"}),"\n",(0,s.jsx)(n.p,{children:"This guide will help you understand how to play sounds."}),"\n",(0,s.jsx)(n.h2,{id:"waveforms",children:"Waveforms"}),"\n",(0,s.jsxs)(n.p,{children:["RIV can playing simple audio waveforms through the function ",(0,s.jsx)(n.code,{children:"riv_waveform"}),",\nwhich has the following waveform description struct as argument:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"typedef struct riv_waveform_desc {\n  uint64_t id;                 // Sound id (filled automatically)\n  riv_waveform_type type;      // Waveform type\n  float delay;                 // Start delay in seconds\n  float attack;                // Attack duration in seconds\n  float decay;                 // Decay duration in seconds\n  float sustain;               // Sustain duration in seconds\n  float release;               // Release duration in seconds\n  float start_frequency;       // Starting frequency in Hz\n  float end_frequency;         // Starting frequency in Hz\n  float amplitude;             // Maximum amplitude in range (0.0, 1.0]\n  float sustain_level;         // Sustain level in range (0.0, 1.0]\n  float duty_cycle;            // Duty cycle in range (0.0, 1.0]\n  float pan;                   // Pan in range [-1.0, 1.0]\n} riv_waveform_desc;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Where ",(0,s.jsx)(n.code,{children:"riv_waveform_type"})," can be one of:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"RIV_WAVEFORM_SINE"}),"\n",(0,s.jsx)(n.li,{children:"RIV_WAVEFORM_SQUARE"}),"\n",(0,s.jsx)(n.li,{children:"RIV_WAVEFORM_TRIANGLE"}),"\n",(0,s.jsx)(n.li,{children:"RIV_WAVEFORM_SAWTOOTH"}),"\n",(0,s.jsx)(n.li,{children:"RIV_WAVEFORM_NOISE"}),"\n",(0,s.jsx)(n.li,{children:"RIV_WAVEFORM_PULSE"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can define a sound effect configuration and play during an event like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"// Shoot sound configuration\nriv_waveform_desc shoot_sfx = {\n    .type = RIV_WAVEFORM_PULSE,\n    .attack = 0.050, .decay = 0.050, .sustain = 0.150, .release = 0.075,\n    .start_frequency = 880, .end_frequency = 220,\n    .amplitude = 0.15, .sustain_level = 0.25,\n    .duty_cycle = 0.65, .pan = 0.0,\n};\n// Play the sound\nriv_waveform(&shoot_sfx);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"waveform-editor",children:"Waveform editor"}),"\n",(0,s.jsx)(n.p,{children:"The following is a tool to help you find new waveform configurations,\nthe idea is to discover new sounds and its parameters with the tool,\nto later copy them into your game."}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsx)("iframe",{src:"https://emulator.rives.io/#simple=true&cartridge=cartridges/waveform.sqfs",allowFullScreen:!0,className:"rivemu-frame"})}),"\n",(0,s.jsxs)(n.p,{children:["You can view the code for this example at\n",(0,s.jsx)(n.a,{href:"https://github.com/rives-io/riv/blob/main/demos/tools/waveform.c",children:"waveform.c"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, the ",(0,s.jsx)(n.em,{children:"JUMP"})," preset can be replicated with:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"riv_waveform_desc jump_sfx = {\n    .type = RIV_WAVEFORM_TRIANGLE,\n    .attack = 0.025, .decay = 0.1, .sustain = 0.075, .release = 0.025,\n    .start_frequency = 327, .end_frequency = 702,\n    .amplitude = 0.25, .sustain_level = 0.05,\n    .duty_cycle = 0.5, .pan = 0.0,\n};\nriv_waveform(&jump_sfx);\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);