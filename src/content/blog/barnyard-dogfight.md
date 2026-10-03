---
title: "Barnyard Dogfight: one small ask at a time"
description: "A tiny browser flight game grew into flying pigs, jet fighters, and a transforming robot. The most useful part was how it got tested."
date: 2026-10-03
pillar: projects
draft: false
---

It started as one HTML file: a small flight game built as a Claude artifact. You fly a yellow plane over farmland, drop supplies through a barn, and land back on the runway. My first question was simple. How does this work?

The answer surprised me. There are no image files and no 3D models in it. A 3D library draws simple shapes, a bit of math noise builds the hills, and the browser makes every sound on the fly. The whole game, graphics and all, is a few hundred kilobytes of code.

One afternoon later, it's a different game. It's called Barnyard Dogfight, and you can [play it here](/games/barnyard-dogfight/).

## Making it stand on its own

The original was made for a work setting. It had a company logo on the hangar, real grocery store names in town, and a multiplayer mode that only works inside Claude's artifact viewer. Before I could share it, it had to stand on its own.

So the first changes were removals. The logo became a plain "VALLEY FIELD" sign on the hangar. The stores got made-up names. The multiplayer went away, and the game became a single page that runs in any browser.

## One ask at a time

Everything after that came from small requests. Computer-flown enemies for a dogfight. A difficulty setting. Ammo options, because snowballs were fun but bullets felt right too, and then pigs, roosters, cows, sheep, and eggs, because why not. A jet fighter, with enemy jets to match. An attack helicopter. Background music. A volume mixer.

Each ask got a short design before any code. That step paid off more than I expected. When I asked for a jet that transforms like the Robotech Veritech, the design came back with a note: that look belongs to its owners, and a public site is the wrong place to borrow it. We built our own instead. The Shifter flies as a jet, hovers with its legs down, and stands up as a robot that walks, jumps, and aims its own gun.

The same care showed up in smaller places. I looked for free Veritech sprites, and none were safe to use. The transformation sounds came from a free CC0 pack on OpenGameArt instead. The music was made with Suno, whose rules depend on the plan you're on, so that got a look before it went public too.

## Fly it, don't fake it

The part I want to remember is the testing.

Early on, the checks moved the plane into position and looked at the result. That proves the code runs. It doesn't prove the game plays. So I asked for a different approach: fly the plane the way a player does. Claude wrote a small test pilot that only presses keys: power, nose up, bank left, fire. It reads the instruments and steers.

That change found real problems.

- The first jet left the runway after 77 meters. A jet shouldn't do that, so it got less push while its wheels are on the ground. It now rolls about 150 meters.
- The helicopter shot down nine enemies in 75 seconds. The jet managed three in 90. Hovering and spinning in place made it too strong, so it now turns slower in a hover and enemies take one extra hit. Same test, five kills.
- The robot had three seconds of jump-jet fuel. Switch to robot mode high up and it could never land safely. Now the jets always slow a fall, even when they're empty.

The test pilot also found a bug in itself. The game lets go of every held key when the window loses focus, which keeps keys from getting stuck. The pilot didn't know that, and it kept "holding" power that the game had already dropped. It wasn't a game bug. It was a test that trusted itself too much.

## The last bug came from looking

After all of that, the bug that would have hurt the most came from me opening the game and looking at it. The start screen showed my health at zero. The game had reopened in a dogfight, and the enemies attacked while the story card was still up.

No test had caught it, because no test sat on the start screen and waited. It took one screenshot to find and a few lines to fix. The game now holds still until you close the card.

Scripted tests are good at the questions you think to ask. A person playing the game is good at the ones you didn't.

## Play it

[Play Barnyard Dogfight](/games/barnyard-dogfight/). It runs in the browser and needs a keyboard.

- Hold **R** for power. **K** and **I** pull the nose up and push it down. **J** and **L** bank.
- **Space** fires. **1** through **7** change the ammo.
- Pick **Shifter** under Plane and press **T** to transform.
- For a fight, click **Start** next to Snowball fight, then pick **Dogfight**.

Built with Claude and three.js. Music made with Suno. Transformation sounds by Mekaal (CC0).
