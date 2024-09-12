---
slug: doom-deep-dive
title: "Going deeper on the challenges for having Doom onchain"
description: "Doom runs everywhere, from PCs to home appliances, so what's the big deal on bringing it onchain?"
image: /img/blog/doom_everywhere.jpg
authors: [carlo]
tags: [doom olympics, doom, rives, mainnet launch]
keywords: [rives, doom, under the hood, doom olympics, mainnet launch]
---

# Going deeper on the challenges for having Doom onchain

<center>
![Doom deep dive header](/img/blog/doom_everywhere.jpg)
</center>

# Intro

Doom is a super iconic game. The legion of fans keeps up a true cult around it and there are all sorts of groups involved with the game. One of my favorite groups is the one that ports Doom everywhere. Some crazy examples include home appliances like a [washing machine](https://www.reddit.com/r/itrunsdoom/comments/1budbid/doom_on_the_new_samsung_allinone_washer/)
Or a [smart toothbrush](https://www.reddit.com/r/itrunsdoom/comments/1b2lgxw/doom_runs_on_wifi_toothbrush_without_hardware_mods/) 

But there was still a barrier for Doom to break: the blockchain.

<!--truncate-->

<div align="center">
![Doom on a washing machine](/img/blog/doom_on_washing_machine.jpg)
</div>
> No idea how to input commands in there

# Blockchain computational capability limitations

Blockchain is an amazing technology and has come a long way in a really small amount of time. From just a ledger and payment system on the initial Bitcoin release up to the current environment with hundreds of different projects pushing the barrier of what is possible. Taking a look at Ethereum, it's easy to understand why putting Doom onchain is such a daunting task. 

Currently the Ethereum Blockchain has a maximum amount of gas per block of 30M, which is enough to compute at most 10M instructions (optimistically, considering the cheapest useful instructions cost 3 gas, like ADD or SUB). Considering the average time of 12s per block that gives us less than a million operations per second (or less than 1MHz) for the “World Computer” CPU, as Ethereum is known. And that is what the entire network with everyone in the world has available, so executing Doom directly on Ethereum is a no go. 

# Bringing Doom onchain

In the past a 1st approach of [storing a Doom like game as data onchain](https://blockworks.co/news/play-doom-bitcoin) was performed and people could read it from the ledger and play the game. It's a nice step, but gives you no consensus over the result achieved (everyone just plays locally and no one else verifies anything) thus doesn't really give many advantages over just running a copy of the game you downloaded from a server on your machine (besides having downloaded it from a decentralized ledger).

We were way bolder: we wanted to have a playable Doom that can be verified onchain (though that is super complex as Doom requires a LOT of CPU power by the blockchain standards). This was all born last year when one of our devs accepted a bold challenge: executing Doom in a verifiable manner in real time. In order to do that he used the Cartesi Machine (a deterministic RISC-V virtual machine) and delivered on that.

<div align="center">
![Eduardo's tweet on bringing Doom to the Cartesi Machine](/img/blog/doom_tweet.jpg)
</div>
> Eduardo’s triumphant tweet displaying Doom executing in real time inside the Cartesi Machine

From there it was a matter of putting that onchain: turning the Doom execution inside a Cartesi Machine into a DApp using [Cartesi Rollups](https://docs.cartesi.io/cartesi-rollups/1.5/core-concepts/optimistic-rollups/#cartesi-rollups) solution (which is an app chain framework that turns Cartesi Machine computations into Optimistic Rollups fully verifiable). 

The final touch is making it easy for the user to execute (and also for developer to develop games). How do we achieve that? We execute the Cartesi Machine both in the validator nodes and in the user machine (as we had the sizeable effort of porting the Cartesi Machine to the browser by compiling it to WebAssembly) and that allows us to execute this complex piece of art in real time in a deterministic fashion - without the burden of adapting the code to make it deterministic, thanks Cartesi Machine. While the user plays the game, the movements are being recorded along with the simulation tick in which they were performed and after the match is done they can be submitted onchain so the validator can verify the match, resimulating the entire game and verifying the score and other achievements.

Nice, but was that all that was needed? No! Freedoom expects to draw on the screen using the native graphical interface as well as play audio using the native audio device, we also had to change it to use the [RIV Api](https://github.com/rives-io/riv/blob/main/libriv/riv.h) to accomplish those tasks. Once that was done, Freedoom was ready to become a [RIV cartridge](https://github.com/rives-io/cartridge-freedoom) and enter the world of Rives!

This is quite a breakthrough, let’s dive a bit on the details. A 30 min session of Freedoom takes around [96B RISC-V CPU cycles](https://rives.io/docs/riv/introduction#console-specs). Going back to the Ethereum network capacity of optimistically executing 10M instructions per 12s or around 50M instructions per minute, at that rate, to execute 96B instructions it would take 32 hours with monopoly over the entire network capacity - something that is not practical and would cost way more than anyone is willing to pay to verify a Freedoom match.

# Other approaches to bring Doom onchain

Other projects have taken different approaches to achieve similar objectives. 

Risc Zero has [proven a 1m28s demo of Doom](https://www.risczero.com/blog/when-the-doom-music-kicks-in) using a different approach: they took a Doom implementation that is meant to be executed without an OS (ours is executing on top of an Alpine Linux inside the Cartesi Machine) and ported it to execute directly inside their RISC V VM. Then they have used their prover to generate a ZK proof of the gameplay. To do that on a timely fashion they used a cluster of 250 g4dn.xlarge instances on Amazon (which cost on demand $0.526 per hour). It took them about 33 mins with the 250 g4dn.xlarge instances to generate the proof of the 1min 28s gameplay (which is a fantastic technological feat, but not very practical). They also did another demo without the rendering, just the core game logic that drastically diminishes the number of CPU cycles of the computation (over 70 times) and were able to generate the proof in under 2 minutes. 

Another recent approach was taken by the Cardano Hydra team that executed [Doom on a Hydra L2](https://github.com/cardano-scaling/hydra-doom), which is basically a state channel that goes back to the Cardano L1. It is an interesting approach but the lack of data availability of the player moves outside the state channel renders the verification of the game by other parties not feasible, plus the trust assumptions for a global leaderboard are not met.

# The Doom Olympics and the Rives "rules" feature

Ok, so a after this long tour explaining the technical difficulties about bringing Doom onchain and various approaches that were tried with this objective in mind, here comes an invitation:  come celebrate Rives mainnet launch with our Doom Olympics starting September 12th 2024. A new contest starts everyday and lasts 48hrs. There are seven different modalities of Doom that require different styles of gameplay to thrive. The modalities are: Lightning Run, Knuckle Crusher, Infallible Aim, Secret Master, Treasure Seeker, The Completionist and Enemy Eradicator! Each modality forces the player to have a completely different playstile ranging from running superfast to the end of the level without caring for enemies or items up to taking every step and shot cautiously and being as precise as possible.

We are able to make these completely different ways to play Doom due to a very nice Rives feature: rules. In this feature, anyone can set up a rule for a game and to customize the experience, parameters can be provided for the game (like manipulating the starting level, available items, number of lives or any other thing the game developer provides) and also a formula to evaluate the score (considering the metrics provided by the developer as outputs, like time, number of lives at the end of the match, level reached, items used/collected, etc). These input parameters are part of what we call incard while the output metrics are part of what we call outcard. You can also setup a time period for a rule to be played (which is what we are doing for the 7 contests of the Doom Olympics).

# See you at the Doom Olympics!

Well, this wraps up this article! Hope you enjoyed it and waiting to see you competing in our Doom Olympics (more details [here](2024-09-04-doom-olympics.md)) for the ultimate onchain gaming bragging rights! Also, don't forget to join our [discord community](https://discord.gg/FQnQqKWVn8) to talk to others about that epic run or ask for tips and follow our [twitter](https://x.com/rives_io) for updates around Rives and the Doom Olympics :)


