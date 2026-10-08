---
title: "Barnyard Dogfight, round two: phones, a real helicopter, and a Barn Owl"
description: "A week of changes to my remix of a co-worker's flight game: phone controls, a real helicopter, repairs in a dogfight, and an original helicopter with its own theme song. The test pilot found the bug I could only feel."
date: 2026-10-08
pillar: projects
draft: false
---

Last week I wrote about [Barnyard Dogfight](/blog/barnyard-dogfight/), my remix of a co-worker's browser flight game. The original game and the idea are theirs. The remix is a stack of small requests I made to Claude, which wrote the code. This post covers what changed since then, and what the changes taught me.

## It had to work on a phone

The first real feedback came from my own phone. The game didn't fill the screen, and there was no way to fly it without a keyboard.

So the remix picked up an on-screen joystick (on the left or the right, so it works for left- and right-handed players), a FIRE button, and a full-screen mode. iPhone Safari can't go full screen from a web page, so the game now shows how to add it to the Home Screen, where it opens without the browser bars. It also gained a Novice level for people who have never flown anything.

The phone found a bug no desktop test would have. In a dogfight, the music played twice, an echo of the same song a beat apart. iPhones ignore a web page's volume setting, so the fade from one song to the next never finished. The fix sends the music through the browser's own audio mixer, where volume does work. The same pass added a playlist with a Next song button and a mix that keeps the music under the engine and the hits.

## The helicopter got real

I asked for the helicopter to fly like a real one, and now it does. The left stick tilts the rotor, which sets where the helicopter speeds up, not how fast it goes, so it keeps drifting after you let go. The lift control stays where you leave it. The pedals turn the nose. Easy keeps a few helpers: it slows itself to a hover and holds its height. Medium and Hard take the helpers away, and Hard adds torque, so adding power twists the nose.

On a phone that meant two sticks, like a remote-control helicopter. The left one tilts, and the right one handles lift and the pedals.

Then I flew it and something felt wrong. I couldn't turn the nose in place. The first tests said it worked: 180 degrees in under four seconds. The difference was that the test hovered perfectly still, and I never do. The test pilot, a script that presses the same touch controls a player does, flew the same turn while drifting at 20 knots, and the nose stopped at about 35 degrees. The tail fin acts like a weathervane, and it was beating the pedals at speeds where a real tail rotor still wins. Now the pedals win up to about 40 knots, and the fin takes over at cruise speed.

The test wasn't wrong. It was answering an easier question than the one I was asking.

## Fights got fairer, both ways

A helicopter hovering low was almost untouchable, because the enemy planes refused to fly below about 100 meters. Once they could go lower, they still couldn't hit it. They circled it forever, because a plane can't turn tight enough to point its nose at something sitting inside its turn. Real pilots solve that by flying out and coming back for a strafing run, and now the enemy planes do too. A helicopter that just sits there now gets shot down in about 20 seconds.

To balance that, you can repair in the middle of a fight. Pop a balloon for one point of health, or fly through the barn, in one door and out the other, for a full repair. After that, the barn needs 30 seconds before it will fix you again.

And because this is a barnyard game, getting hit now depends on what hit you. An egg splats across the screen with yolk and drips. A rooster bursts into feathers that float down like a pillow fight.

## The Barn Owl, and the things we didn't borrow

My favorite addition is a new helicopter. I asked for one based on the Bell 222 and Airwolf, the 1980s TV show. What came back was the Barn Owl: a sleek twin-engine helicopter in midnight blue over silver, with amber owl-eye lights on the nose, wheels that tuck up in flight, and a turbo that dashes it to about 260 knots for five seconds.

It isn't Airwolf, and that's on purpose. That look and that name belong to the show's owners, and the Bell 222 is a real aircraft whose maker protects its names. It's the same call we made with the transforming jet in the first post: build our own.

The music was a harder call, because I wanted it. I found a copy of the real Airwolf theme and asked if we could change it until it was ours. The research said no. A changed version is still a derivative work, there's no safe number of notes to change, and a game needs a license the owner can refuse. What anyone can use is a style. So I gave Suno a prompt that described a sound instead of a song (a slow, spooky opening, then a synth bass line that never stops) and kept my favorite result. It plays whenever you fly the Barn Owl.

## Cleaning up

Two leftovers from the original game survived the first pass. The tower still used the original game's call sign for the Cub, because the code that swaps call signs covered every aircraft except the default one. The settings panel still carried the original game's name. Both are fixed, and the check I run before every publish now looks for them.

## Play it

[Play Barnyard Dogfight](/games/barnyard-dogfight/). On a phone, turn it sideways. Pick Barn Owl under Plane, push the right stick up to lift off, and tap Turbo.

The original game, its flight model, and its farm world are my co-worker's work, shared here with their OK. The remix was built with Claude and three.js. Music made with Suno.
