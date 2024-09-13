---
slug: doom-olympics
title: "Doom Olympics"
description: "Introducing the Rives Doom Olympics, the most intensive olympic games ever!"
image: /img/blog/doom_olympics_header.jpg
authors: [carlo]
tags: [doom olympics, rives, mainnet launch]
keywords: [rives, doom olympics, mainnet launch]
---

# Doom Olympics

<center>
![Doom Olympics header](/img/blog/doom_olympics_header.jpg)
</center>

# Intro

The Olympics are one of the oldest traditions in the world and have always been used to bring people together, display power, bring honor and elevate the athletes with highest skill to the rank of heroes. We've been building Rives for a while using the amazing technology developed by Cartesi, so, what better way to celebrate our Base mainnet launch with our community than to hold olympic games?

<!--truncate-->

As an onchain console, we are going to pay our respects to one of the most iconic games: Doom. The Doom engine was opensourced and can be found [here](https://github.com/id-Software/DOOM). Unfortunately, the assets don't really benefit from the same license, so we are going to use a community developed Doom called [Freedoom](https://github.com/freedoom/freedoom) which is based on the original engine and community made assets (monsters, levels, weapons, etc).

# How is this possible?
   Wow, this is super cool, but isn't that game too heavy to execute in a verifiable manner onchain? If you try to execute the game directly onchain on Ethereum, yes! So what do we do? We execute it inside the Cartesi Machine, which is a deterministic RISC-V emulator, which runs both in the Rives (app-specific) rollup validators and in the user machine (as we had the sizeable effort of porting the Cartesi Machine to the browser by compiling it to WebAssembly) and that allows us to execute this complex piece of art in real time in a deterministic fashion. While the user plays the game, the movements are being recorded along with the simulation tick in which they were performed and after the match is done they can be submitted onchain so the validator can verify the match, resimulating the entire game and verifying the score and other achievements.

<div align="center">
![Rives Flow](/img/blog/rives_flow.jpg)
</div>
> The flow that a gameplay goes through on Rives

# Prizes

Let's detail a bit the prizes that are available at the Doom Olympics:
- 7000 usd for the winners of the contests (For each contest: 600 for the 1st place, 300 for the 2nd and 100 for the 3rd place)
- 3500 usd spread across the top 100 players on the Doom Olympics global leaderboard
- 4500 usd for achievements, quests and more

To be eligible for the prize, you must follow RIVES on [Twitter](https://x.com/rives_io) and/or be part of the [Discord community](https://discord.gg/FQnQqKWVn8)

Rewards will be paid out in CTSI.

# The games
  
Great, what about the games? Contests will open every day for 7 days, starting September 12th 15hrs UTC, and be live for 48 hours. The 7 different modalities or "disciplines" of Doom require different styles of gameplay to thrive. The disciplines are:

###  Lightning Run - Sep 12-14 14:30 UTC

This is the very first and the easiest contest of the FreeDOOM olympics!
Take advantage of this contest to improve your skills for the upcoming ones as they will be increasingly challenging.

- Objective:
Beat the levels in the shortest time.
There's no need to kill enemies if you can dodge, time is your main enemy!
Only level completions increase the score.

### Knuckle Crusher - Sep 13-15 14:30 UTC

It's time to show off how good you got since last day,
by killing enemies with your bare hands until death!
You will play on the same levels and on the same difficulty as the first in the Lightning Run. As you must already be familiar with the levels, it should be a piece of cake, right?!

- Objective:
Kill the highest number of enemies with your bare hands in the shortest time.
Every punch hit increases the score!
The use of other weapons will not affect the score.

### Infallible Aim - Sep 14-16 14:30 UTC

It's time to show how good you are with small guns and advance to new levels.
Shoot your enemies with the pistol whenever you get the chance!

- Objective:
Kill the highest number of enemies using the pistol in the shortest time.
Every pistol hit increases the score, but every miss decreases it!
The use of other weapons will not affect the score.

### Secret Master - Sep 15-17 14:30 UTC

Do you think your eyes can see everything?
Every level has secrets, have you ever found one?
Show that you can find the secrets as we progress into new levels!
This contest takes place in the half of the Doom Olympics and you probably got skilled,
so the difficulty was also raised!

- Objective:
Beat the levels while unlocking the highest amount of secrets in the shortest time.
Every secret discovered increases the score!

### Treasure Seeker - Sep 16-18 14:30 UTC

By now you should be good at collecting resources, right?
Show that you can collect all the items as we progress into new levels!

- Objective:
Beat the levels while collecting the highest amount of items in the shortest time.
Every item collected increases the score!
The gaming session is limited to 30 minutes.

### The Completionist - Sep 17-19 14:30 UTC

By now you should find secrets, collect items and know how to kill most enemies.
So you got pretty good at clearing everything, right?!
Show off that you never leave anything behind as we progress into new levels!

- Objective:
Beat the levels while clearing them in the shortest time.
Unlock secrets, kill enemies, collect items and be quick to increase your score!


### Enemy Eradicator - Sep 18-20 14:30 UTC

Do you think by now you got pretty skilled?
I dare you to kill all the enemies and the boss in the last levels
with even more difficulty!

- Objective:
Beat the levels while wiping all enemies in the shortest time.
Every enemy killed increases your score!

<div align="center">
![Doom contests](/img/blog/freedoom_contests.jpg)
</div>
> The seven tournaments that will take place during the Doom Olympics

# See you soon at the Doom Olympics!

  Well, this wraps up the overview of our grand event to launch Rives on Base mainnet! Hope you enjoyed the article and hope to see you competing on our Doom Olympics for the ultimate onchain gaming bragging rights! Also, don't forget to join our [discord community](https://discord.gg/FQnQqKWVn8) to talk to others about that epic run or ask for tips and follow our [twitter](https://x.com/rives_io) for updates around Rives and the Doom Olympics :)

