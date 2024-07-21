"use strict";(self.webpackChunkrives_docs=self.webpackChunkrives_docs||[]).push([[603],{5369:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=a(4848),o=a(8453);const n={slug:"rives-tech-overview",title:"RIVES technical overview",description:"RIVES overview from an onchain perspective",image:"/img/blog/cookie-powered-pc.png",authors:["carlo"],tags:["cartesi","rives","technology"],keywords:["rives","tecnhical overview","onchain","cartesi"]},r="Rives: a technical overview and sneak peak under the hood",s={permalink:"/blog/rives-tech-overview",source:"@site/blog/2024-07-03-rives-tech-overview.md",title:"RIVES technical overview",description:"RIVES overview from an onchain perspective",date:"2024-07-03T00:00:00.000Z",tags:[{label:"cartesi",permalink:"/blog/tags/cartesi"},{label:"rives",permalink:"/blog/tags/rives"},{label:"technology",permalink:"/blog/tags/technology"}],readingTime:10.355,hasTruncateMarker:!0,authors:[{name:"carlo",title:"Rives core-team",url:"https://x.com/carlofragni",imageURL:"https://pbs.twimg.com/profile_images/1763277099274498048/hIdXKiRo_400x400.jpg",key:"carlo"}],frontMatter:{slug:"rives-tech-overview",title:"RIVES technical overview",description:"RIVES overview from an onchain perspective",image:"/img/blog/cookie-powered-pc.png",authors:["carlo"],tags:["cartesi","rives","technology"],keywords:["rives","tecnhical overview","onchain","cartesi"]},unlisted:!1,nextItem:{title:"Jam #1 recap",permalink:"/blog/jam1recap"}},h={authorsImageUrls:[void 0]},c=[{value:"The web2 game development way",id:"the-web2-game-development-way",level:2},{value:"Onchain games",id:"onchain-games",level:2},{value:"The ZK games",id:"the-zk-games",level:2},{value:"The OR games",id:"the-or-games",level:2},{value:"The sharded approach",id:"the-sharded-approach",level:2},{value:"Rives approach",id:"rives-approach",level:2},{value:"The RIV API",id:"the-riv-api",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",h2:"h2",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{align:"center",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Cookies powering pc",src:a(9281).A+"",width:"256",height:"256"})})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"TL;DR; Rives is powered by delicious magical chocolate chip cookies."}),"\n",(0,i.jsx)(t.p,{children:"\u2014 The Oracle"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Gaming is hard. Grinding to make that perfect run and someone else claims your glory. Servers that are shutdown from your favorite game because they are no longer profitable. Developer nerfs that character you put hundreds of hours grinding to level up. Does that ring a bell? To bring fun back to games (both for players and developers) we are building Rives. Rives is the first onchain fantasy console. Every single game in Rives is verifiable, validated in a Cartesi Rollup and secured by the blockchain consensus."}),"\n",(0,i.jsx)(t.h2,{id:"the-web2-game-development-way",children:"The web2 game development way"}),"\n",(0,i.jsx)(t.p,{children:"Ok, great! But how is that possible? In traditional web2 games the most common model is having a client-server architecture. Players have their interface rendering the graphics, receiving the player inputs that are relayed to the server and receiving updates from the server with the current game state. The server is the authority and dictates what is the truth of that game. You trust the server will not censor you nor cheat you in any way (like tempering with a random number that might change the outcome of a battle or the rarity of that loot you are getting at the end of a quest). Since everyone needs to trust the server there is not much that can be done. There are no guarantees the server will do the right thing, there is no transparency and if something fishy is going on there is really no way to dispute it and make things right."}),"\n",(0,i.jsx)(t.h2,{id:"onchain-games",children:"Onchain games"}),"\n",(0,i.jsxs)(t.p,{children:["Onchain games, on the other hand, are built differently. Verifiability is at the center of the narrative. The game logic is generally built on smart contracts in which the execution is performed by a very large number of nodes. Want to temper with a random number on a game running on Ethereum? Good luck colluding with hundreds of thousands of nodes to make it happen. You can independently run the game logic yourself and check that everything works as intended, no one tempering with the game state or lying about their epic achievements. The system is built with programmatic and economic mechanisms that makes it either impossible or just bad business to cheat on a game. That is great! But what is the catch? Well, onchain logic is slow and expensive. At the time of writing this article, Ethereum max gas per block is 30M gas and the cheapest useful instructions cost 3 gas (add/subtract/not and others - ",(0,i.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/evm/opcodes/",children:"check the EVM OPCODES table"}),"). A block is produced every ",(0,i.jsx)(t.a,{href:"https://ycharts.com/indicators/ethereum_average_block_time",children:"12s on average"}),". That means that the best case scenario is, with monopoly of the network, to process around 50M instructions per minute. That is really not a lot. Now let's take a look at the costs. Checking a ",(0,i.jsx)(t.a,{href:"https://etherscan.io/gastracker#chart_gasprice",children:"gas price tracker"})," the entire 30M gas of a block would cost around 900 USD (Ethereum price 3,305.06 USD and gas price 9 gwei), so that would be around 4500USD per minute. That is pretty expensive!"]}),"\n",(0,i.jsx)(t.h2,{id:"the-zk-games",children:"The ZK games"}),"\n",(0,i.jsxs)(t.p,{children:["Modern onchain games want to break the latency, cost and processing limitations that they are faced with. The onchaing gaming community is currently bubbling with multiple different approaches with different trade-offs to tackle these issues. Some games are taking advantage of Zero-Knowledge (ZK) to run logic outside the blockchain scope. The logic executed outside has a ZK circuit that generates a proof of the correct execution of that code. The generated proof can later be verified so that the outcome of that computation can be applied and known to be correct. For a crash course on Zero Knowledge Proofs (ZKPs) you might want to ",(0,i.jsx)(t.a,{href:"https://medium.com/coinmonks/zero-knowledge-proofs-um-what-a092f0ee9f28",children:"check this article"}),". ZKPs have a number of nice things, like allowing you to perform larger computations, still secured, outside of the blockchain and also privacy properties since you can make verifiable assertions over data you don't reveal, but they also have some drawbacks. Computing the proof of a computation grows exponentially with the size of the computation you want to prove, which imposes a steep overhead for the actual computation, limiting the feasibility of performing very large computations both from a financial and from hardware point of view. Most ZKP solution providers offer incentivized or altruistic services with clusters of supercomputers to make it practical to generate ZKPs of computations in a short time. Though that is nice, it also harms decentralization as it's not possible for a random person with consumer hardware to be a validator themselves."]}),"\n",(0,i.jsx)(t.h2,{id:"the-or-games",children:"The OR games"}),"\n",(0,i.jsx)(t.p,{children:"Others rely on solutions that are known as Optimistic Rollups (ORs). In ORs, the validators of a computation perform it outside of the blockchain and periodically make a claim on the base blockchain about the state of that computation, generally a hash of the computation state or the VM that is executing it. Other validators check that claim and if they find it to be incorrect, engage in a dispute with a different protocol depending on the OR solution. ORs also have a number of great properties and drawbacks. A good property of ORs is that they add very little overhead on the computation they secure: validators execute the computation once if they agree with the claim and at most less than twice in case of a dispute for most dispute protocols. The main disadvantage of ORs is the delay of finality: you need to wait after a claim is made so other validators have time to check it and dispute it in case it's incorrect. If you wait a small period to consider the claim undisputed you get faster finality but weaker security and if you wait a large amount of time you gain on security but delay finality."}),"\n",(0,i.jsx)(t.h2,{id:"the-sharded-approach",children:"The sharded approach"}),"\n",(0,i.jsx)(t.p,{children:"Some onchain game solutions are taking another approach that trades security for speed: they basically make an application or even session specific blockchain with a very small set of validators, enabling fast consensus and a high block production frequency (one per second or even more). That enables a lot of interesting games, even real time ones but at the expense of security - a rather small number of nodes can settle on an incorrect state as colluding with small numbers becomes very practical."}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)("iframe",{src:"https://emulator.rives.io/#simple=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/jam1/realninjachallenge.sqfs",allowFullScreen:!0,className:"rivemu-frame"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Ok, care for a break? Here is a nice Rives minigame. Just press the white play button. Controls: Press Z to begin. Use the arrow keys to slash the fruits appearing on screen"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"rives-approach",children:"Rives approach"}),"\n",(0,i.jsxs)(t.p,{children:["In Rives we value a very high standard for decentralization and security. We want anyone to be able to verify that a match outcome matches the claim and we want that to happen even if the honest player is surrounded by opponents colluding. The way we handle this is quite different from other approaches. At the base of our technology we use Cartesi Rollups: Cartesi Rollups are an OR solution that creates a rollup per application and with an execution environment called the Cartesi Machine. The Cartesi Machine is a deterministic RISC-V Linux-enabled emulator capable of executing traditional (web2) software stacks and enabling computations multiple orders of magnitude larger than what the base layer allows, with reasonable costs. Remember the computation capacity and costs for Ethereum presented earlier in this article? Just booting a lean Ubuntu distro with no graphical interface takes under a second on a Cartesi Machine in a regular laptop, and that accounts for over 3B RISC-V instructions. That alone would take the processing power of over an hour of the Ethereum network and cost over 270k USD. The tech is pretty amazing and if you want to read more about it you can do so on ",(0,i.jsx)(t.a,{href:"https://cartesi.io",children:"their site"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Leveraging the power of the Cartesi technology we did something pretty interesting: we ported the Cartesi Machine to webassembly. Because of that, we can run Cartesi computations in the browser, directly on the client with no need for any special setups on the user machine (and yes, we have a full Linux distro running in there). Why did we do that? We want both players and developers to have a good experience with Rives. If we had games in which the client would basically render the interface and relay the player inputs to the blockchain, retrieving the updated game state for it, we would have high latency and that would severely limit the kind of games that could be developed (should be delay tolerant games, like turn based games). By having games running directly on the user browser we can have highly interactive games and latency is not an issue. Ok, but you could develop games directly on the browser, why the Cartesi Machine? Great question! The answer is pretty simple: when you have a decentralized game, you need the game logic to be deterministic in order to have others verifying it and reach consensus and it's pretty difficult to write deterministic software as there are so many sources of entropy: unspecified hardware behavior (like for floating point operations), wall clocks, different versions of runtime environment components, etc. Using a Cartesi Machine on the browser instantly makes any game running inside it deterministic! The game developer can focus on building their game without having to worry about making their code deterministic."}),"\n",(0,i.jsxs)(t.p,{children:["The basic flow in Rives today is:\nThe user enters ",(0,i.jsx)(t.a,{href:"https://rives.io",children:"our site"})," and selects a game. When they do that, they download to their computer our fantasy console (RIV) and the cartridge containing the game they want to play (both downloaded from the Rives Cartesi Rollup node and verifiable on chain).\nThe user then executes the game locally and has a smooth experience - plays the game in real time, hopefully has some fun :) - and while that is happening, RIV logs all the player actions and the tick in the game simulation in which they happened.\nAfter they are done, this log is submitted onchain to the Rives Cartesi Rollup in a very efficient compact format. When that happens, a Rives validator will download the gameplay and reproduce the entire game simulation, validating the score, achievements and any other relevant outcome of that gaming session. Periodically Rives validators submit a claim on chain about the state of the Rives application. The current model is authority based but we\xb4ll migrate to a decentralized model in which if a wrong claim is submitted a single honest validator is enough to enforce the right state (security guarantee inherited from the Cartesi Rollups, checkout ",(0,i.jsx)(t.a,{href:"https://cdn.sanity.io/files/zg5gx8g4/production/80a9e273750ef765a011a0ccc822b49f797fd7fd.pdf",children:"the whitepaper"})," and the ",(0,i.jsx)(t.a,{href:"https://arxiv.org/abs/2212.12439",children:"scientific paper"})," for the future version that converges faster in case of multiple disputes)."]}),"\n",(0,i.jsx)(t.h2,{id:"the-riv-api",children:"The RIV API"}),"\n",(0,i.jsxs)(t.p,{children:["To make it easy for developers to create their games without a steep learning curve, RIV has a powerful and simple API. The API is available in C but you can easily code in your preferred language with a simple wrapper for it. There are multiple examples in different languages available ",(0,i.jsx)(t.a,{href:"https://github.com/rives-io/riv/tree/main/demos",children:"here"}),", and we have a comprehensive documentation for you to get started available ",(0,i.jsx)(t.a,{href:"https://docs.rives.io",children:"here"}),". Recently we had ",(0,i.jsx)(t.a,{href:"https://docs.rives.io/blog/jam1recap",children:"our first game jam"})," and most developers were able to get started on Rives, read the documentation and develop their own game within one or two days. Our focus with Rives is making retro style games a joy, fast and easy to develop and publish. Currently the focus is on single-player or local co-op games, but we are working on different approaches to enable co-op games over network and later adversarial games (which are particularly challenging to protect from bad behavior on a decentralized setup - but that is a topic to explore in a future article :) ). RIV currently runs a custom Linux distro called RIV OS based on Alpine Linux and gives a lot of flexibility and nice tooling to make developing a Rives game an enjoyable experience."]}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)("div",{class:"rivemu-compact-frame pixelated",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Space cookies invasion",src:a(1710).A+"",width:"256",height:"256"})})})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"A space cookie invaders might be the next game you want to make"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Ok, that was a pretty long article, so thank you for taking the time to read it and making it this far. If you were interested you are most likely a perfect person to join our community. Our Discord is super friendly and all kinds and levels of questions are encouraged, so ",(0,i.jsx)(t.a,{href:"https://discord.gg/YwAw9BxtVn",children:"here is your invite to join"}),". Hope to see your next game soon on Rives!"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},9281:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/cookie-powered-pc-f1244edc302da79bfc3f9bac6ec4fbd5.png"},1710:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/space_cookies_invasion-b7ab4fb031a4acffcdf305f56c0a8f12.png"},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>s});var i=a(6540);const o={},n=i.createContext(o);function r(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);