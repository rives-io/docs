"use strict";(self.webpackChunkrives_docs=self.webpackChunkrives_docs||[]).push([[178],{845:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=o(4848),a=o(8453);const n={slug:"doom-deep-dive",title:"Going deeper on the challenges for having Doom onchain",description:"Doom runs everywhere, from PCs to home appliances, so what's the big deal on bringing it onchain?",image:"/img/blog/doom_everywhere.jpg",authors:["carlo"],tags:["doom olympics","doom","rives","mainnet launch"],keywords:["rives","doom","under the hood","doom olympics","mainnet launch"]},r="Going deeper on the challenges for having Doom onchain",s={permalink:"/blog/doom-deep-dive",source:"@site/blog/2024-09-11-doom-deep-dive.md",title:"Going deeper on the challenges for having Doom onchain",description:"Doom runs everywhere, from PCs to home appliances, so what's the big deal on bringing it onchain?",date:"2024-09-11T00:00:00.000Z",tags:[{inline:!0,label:"doom olympics",permalink:"/blog/tags/doom-olympics"},{inline:!0,label:"doom",permalink:"/blog/tags/doom"},{inline:!0,label:"rives",permalink:"/blog/tags/rives"},{inline:!0,label:"mainnet launch",permalink:"/blog/tags/mainnet-launch"}],readingTime:6.82,hasTruncateMarker:!0,authors:[{name:"carlo",title:"Rives core-team",url:"https://x.com/carlofragni",imageURL:"https://pbs.twimg.com/profile_images/1763277099274498048/hIdXKiRo_400x400.jpg",key:"carlo",page:null}],frontMatter:{slug:"doom-deep-dive",title:"Going deeper on the challenges for having Doom onchain",description:"Doom runs everywhere, from PCs to home appliances, so what's the big deal on bringing it onchain?",image:"/img/blog/doom_everywhere.jpg",authors:["carlo"],tags:["doom olympics","doom","rives","mainnet launch"],keywords:["rives","doom","under the hood","doom olympics","mainnet launch"]},unlisted:!1,nextItem:{title:"Doom Olympics",permalink:"/blog/doom-olympics"}},h={authorsImageUrls:[void 0]},c=[];function l(e){const t={a:"a",blockquote:"blockquote",h1:"h1",img:"img",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("center",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Doom deep dive header",src:o(6221).A+"",width:"1280",height:"720"})})}),"\n",(0,i.jsx)(t.h1,{id:"intro",children:"Intro"}),"\n",(0,i.jsxs)(t.p,{children:["Doom is a super iconic game. The legion of fans keep up a true cult around it and there are all sorts of groups involved with the game. One of my favorite groups is the one that ports Doom everywhere. Some crazy examples include home appliances like a ",(0,i.jsx)(t.a,{href:"https://www.reddit.com/r/itrunsdoom/comments/1budbid/doom_on_the_new_samsung_allinone_washer/",children:"washing machine"})," or a ",(0,i.jsx)(t.a,{href:"https://www.reddit.com/r/itrunsdoom/comments/1b2lgxw/doom_runs_on_wifi_toothbrush_without_hardware_mods/",children:"smart toothbrush"})]}),"\n",(0,i.jsx)(t.p,{children:"But there was still a barrier for Doom to break: the blockchain."}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Doom on a washing machine",src:o(6432).A+"",width:"1024",height:"1365"})})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"No idea how to input commands in there"}),"\n"]}),"\n",(0,i.jsx)(t.h1,{id:"blockchain-computational-capability-limitations",children:"Blockchain computational capability limitations"}),"\n",(0,i.jsx)(t.p,{children:"Blockchain is an amazing technology and has come a long way in a really small amount of time. From just a ledger and payment system on the initial Bitcoin release up to the current environment with hundreds of different projects pushing the barrier of what is possible. Taking a look at Ethereum, it's easy to understand why putting Doom onchain is such a daunting task."}),"\n",(0,i.jsx)(t.p,{children:"Currently the Ethereum Blockchain has a maximum amount of gas per block of 30M, which is enough to compute at most 10M instructions (optimistically, considering the cheapest useful instructions cost 3 gas, like ADD or SUB). Considering the average time of 12s per block that gives us less than a million operations per second (or less than 1MHz) for the \u201cWorld Computer\u201d CPU, as Ethereum is known. And that is what the entire network with everyone in the world has available, so executing Doom directly on Ethereum is a no go."}),"\n",(0,i.jsx)(t.h1,{id:"bringing-doom-onchain",children:"Bringing Doom onchain"}),"\n",(0,i.jsxs)(t.p,{children:["In the past a 1st approach of ",(0,i.jsx)(t.a,{href:"https://blockworks.co/news/play-doom-bitcoin",children:"storing a Doom like game as data onchain"})," was performed and people could read it from the ledger and play the game. It's a nice step, but gives you no consensus over the result achieved (everyone just plays locally and no one else verifies anything) thus doesn't really give many advantages over just running a copy of the game you downloaded from a server on your machine (besides having downloaded it from a decentralized ledger)."]}),"\n",(0,i.jsx)(t.p,{children:"We were way bolder: we wanted to have a playable Doom that can be verified onchain (though that is super complex as Doom requires a LOT of CPU power by the blockchain standards). This was all born last year when one of our devs accepted a bold challenge: executing Doom in a verifiable manner in real time. In order to do that he used the Cartesi Machine (a deterministic RISC-V virtual machine) and delivered on that."}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Eduardo&#39;s tweet on bringing Doom to the Cartesi Machine",src:o(7024).A+"",width:"740",height:"1280"})})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Eduardo\u2019s triumphant tweet displaying Doom executing in real time inside the Cartesi Machine"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["From there it was a matter of putting that onchain: turning the Doom execution inside a Cartesi Machine into a DApp using ",(0,i.jsx)(t.a,{href:"https://docs.cartesi.io/cartesi-rollups/1.5/core-concepts/optimistic-rollups/#cartesi-rollups",children:"Cartesi Rollups"})," solution (which is an app chain framework that turns Cartesi Machine computations into Optimistic Rollups fully verifiable)."]}),"\n",(0,i.jsx)(t.p,{children:"The final touch is making it easy for the user to execute (and also for developer to develop games). How do we achieve that? We execute the Cartesi Machine both in the validator nodes and in the user machine (as we had the sizeable effort of porting the Cartesi Machine to the browser by compiling it to WebAssembly) and that allows us to execute this complex piece of art in real time in a deterministic fashion - without the burden of adapting the code to make it deterministic, thanks Cartesi Machine. While the user plays the game, the movements are being recorded along with the simulation tick in which they were performed and after the match is done they can be submitted onchain so the validator can verify the match, resimulating the entire game and verifying the score and other achievements."}),"\n",(0,i.jsxs)(t.p,{children:["Nice, but was that all that was needed? No! Freedoom expects to draw on the screen using the native graphical interface as well as play audio using the native audio device, we also had to change it to use the ",(0,i.jsx)(t.a,{href:"https://github.com/rives-io/riv/blob/main/libriv/riv.h",children:"RIV Api"})," to accomplish those tasks. Once that was done, Freedoom was ready to become a ",(0,i.jsx)(t.a,{href:"https://github.com/rives-io/cartridge-freedoom",children:"RIV cartridge"})," and enter the world of Rives!"]}),"\n",(0,i.jsxs)(t.p,{children:["This is quite a breakthrough, let\u2019s dive a bit on the details. A 30 min session of Freedoom takes around ",(0,i.jsx)(t.a,{href:"https://rives.io/docs/riv/introduction#console-specs",children:"96B RISC-V CPU cycles"}),". Going back to the Ethereum network capacity of optimistically executing 10M instructions per 12s or around 50M instructions per minute, at that rate, to execute 96B instructions it would take 32 hours with monopoly over the entire network capacity - something that is not practical and would cost way more than anyone is willing to pay to verify a Freedoom match."]}),"\n",(0,i.jsx)(t.h1,{id:"other-approaches-to-bring-doom-onchain",children:"Other approaches to bring Doom onchain"}),"\n",(0,i.jsx)(t.p,{children:"Other projects have taken different approaches to achieve similar objectives."}),"\n",(0,i.jsxs)(t.p,{children:["Risc Zero has ",(0,i.jsx)(t.a,{href:"https://www.risczero.com/blog/when-the-doom-music-kicks-in",children:"proven a 1m28s demo of Doom"})," using a different approach: they took a Doom implementation that is meant to be executed without an OS (ours is executing on top of an Alpine Linux inside the Cartesi Machine) and ported it to execute directly inside their RISC V VM. Then they have used their prover to generate a ZK proof of the gameplay. To do that on a timely fashion they used a cluster of 250 g4dn.xlarge instances on Amazon (which cost on demand $0.526 per hour). It took them about 33 mins with the 250 g4dn.xlarge instances to generate the proof of the 1min 28s gameplay (which is a fantastic technological feat, but not very practical). They also did another demo without the rendering, just the core game logic that drastically diminishes the number of CPU cycles of the computation (over 70 times) and were able to generate the proof in under 2 minutes."]}),"\n",(0,i.jsxs)(t.p,{children:["Another recent approach was taken by the Cardano Hydra team that executed ",(0,i.jsx)(t.a,{href:"https://github.com/cardano-scaling/hydra-doom",children:"Doom on a Hydra L2"}),", which is basically a state channel that goes back to the Cardano L1. It is an interesting approach but the lack of data availability of the player moves outside the state channel renders the verification of the game by other parties not feasible, plus the trust assumptions for a global leaderboard are not met."]}),"\n",(0,i.jsx)(t.h1,{id:"the-doom-olympics-and-the-rives-rules-feature",children:'The Doom Olympics and the Rives "rules" feature'}),"\n",(0,i.jsx)(t.p,{children:"Ok, so a after this long tour explaining the technical difficulties about bringing Doom onchain and various approaches that were tried with this objective in mind, here comes an invitation:  come celebrate Rives mainnet launch with our Doom Olympics starting September 12th 2024. A new contest starts everyday and lasts 48hrs. There are seven different modalities of Doom that require different styles of gameplay to thrive. The modalities are: Lightning Run, Knuckle Crusher, Infallible Aim, Secret Master, Treasure Seeker, The Completionist and Enemy Eradicator! Each modality forces the player to have a completely different playstile ranging from running superfast to the end of the level without caring for enemies or items up to taking every step and shot cautiously and being as precise as possible."}),"\n",(0,i.jsx)(t.p,{children:"We are able to make these completely different ways to play Doom due to a very nice Rives feature: rules. In this feature, anyone can set up a rule for a game and to customize the experience, parameters can be provided for the game (like manipulating the starting level, available items, number of lives or any other thing the game developer provides) and also a formula to evaluate the score (considering the metrics provided by the developer as outputs, like time, number of lives at the end of the match, level reached, items used/collected, etc). These input parameters are part of what we call incard while the output metrics are part of what we call outcard. You can also setup a time period for a rule to be played (which is what we are doing for the 7 contests of the Doom Olympics)."}),"\n",(0,i.jsx)(t.h1,{id:"see-you-at-the-doom-olympics",children:"See you at the Doom Olympics!"}),"\n",(0,i.jsxs)(t.p,{children:["Well, this wraps up this article! Hope you enjoyed it and waiting to see you competing in our Doom Olympics (more details ",(0,i.jsx)(t.a,{href:"/blog/doom-olympics",children:"here"}),") for the ultimate onchain gaming bragging rights! Also, don't forget to join our ",(0,i.jsx)(t.a,{href:"https://discord.gg/FQnQqKWVn8",children:"discord community"})," to talk to others about that epic run or ask for tips and follow our ",(0,i.jsx)(t.a,{href:"https://x.com/rives_io",children:"twitter"})," for updates around Rives and the Doom Olympics :)"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},6221:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/doom_everywhere-5f93e2e10f853a48a43ea41fcec314cf.jpg"},6432:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/doom_on_washing_machine-b69a009ecc38c519c7c15225e4820879.jpg"},7024:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/doom_tweet-3c60ec4c1eab92cef40babec30641d23.jpg"},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>s});var i=o(6540);const a={},n=i.createContext(a);function r(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);