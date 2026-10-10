---
title: "Little Lights: Bible lessons kids can see, hear, sign, and do"
description: "A playable mockup of a picture-first Bible learning tool for kids with Down syndrome. It's here so people can try it and tell me what to change."
date: 2026-10-10
pillar: projects
draft: false
---

Most kids' Bible apps move fast. They use a lot of words, they play a buzzer when you get something wrong, and they assume a child can read the screen. Many kids with Down syndrome learn best a different way: by seeing, by doing, and by doing it again. For those kids, a fast app with a buzzer isn't a lesson. It's a wall.

Little Lights is my attempt at something better. It teaches one big idea at a time, such as sharing or telling the truth, through a short Bible story, a picture, a hand sign, and a simple game. Then it hands the lesson to parents, so kids practice it for real at home.

It isn't an app yet. It's a playable mockup, built to get feedback before anything real gets built. You can [try it here](/demos/little-lights/).

## Four lessons, one routine

The first version has four lessons:

- **Tell the truth:** young Samuel tells Eli what God said (1 Samuel 3).
- **Be kind:** the Good Samaritan (Luke 10).
- **Love others:** Jesus welcomes the children (Mark 10).
- **Share:** a boy shares his lunch of bread and fish (John 6).

Every lesson follows the same four steps in the same order: watch the story, learn the word and its sign, play two short games, then do it at home. The routine is the point. When the steps never change, a child always knows what comes next, and so does the parent.

## The rules behind every screen

A few rules shaped every screen.

**Show it, then say it.** Every word has a picture, and every line is read out loud. Story words light up as they are read.

**No losing.** There are no timers, no red X's, and no buzzers. A wrong tap fades a little, the right answer glows, and Lumi, a lamb who guides kids through every lesson, says why. Every round ends in success. Teachers call this errorless learning.

**Give time.** If a child waits, nothing happens for six seconds. Then Lumi asks again. After six more, the right answer glows. Nothing moves on by itself.

**Sign it too.** Many kids with Down syndrome understand more than they can say. Each lesson teaches one ASL sign for its key word, so a child has a way to answer without speaking.

**Levels by skill, not age.** A 12-year-old can start at Level 1, and that's fine. Level 1 is tap only, with one or two big choices. Level 3 asks a child to follow numbers, such as "give Mia two bread rolls."

**Kids see themselves.** The kids in the pictures include children with Down syndrome, a child with glasses, and a child who uses a wheelchair.

The demo also switches between English and Spanish, because many families who need this speak Spanish at home.

## Drawing the signs

The signs took the most care. I wanted pictures I had every right to use, so I started by searching for sign drawings with no copyright. Free, modern drawings of these four signs didn't turn up. What did turn up was a sign language manual from 1918 that is now in the public domain. Two of its photos, TRUE and KIND, match the signs used today. Its LOVE sign is an older form, and SHARE isn't in it at all.

So we drew our own. A kids' sign chart gave me the style I wanted: one clear picture per sign, a friendly face, and bold yellow arrows that show the motion. We didn't copy it. Each sign has its own child, wearing that lesson's color, with hands drawn finger by finger so the handshape is easy to read. A signing teacher still needs to check all four before any child learns from them.

## How it was built

Claude wrote the code and drew every picture as code. There are no image files in the demo. I made the calls: what to teach, what to cut, and what had to change after I played it.

The best fixes came from playing it like a kid would. The share game's kids were too small. A story picture had blank bands above and below it. One step said "Home" when it meant "At home." Each took a minute to fix, and each would have been easy to miss without tapping through it.

One more thing came from that care. My first version read every line in a Mac voice, but Apple's license doesn't allow those voices to be shared in public. The demo now uses Kokoro, a free and open voice model. Heart reads the English, and Dora reads the Spanish. Out of the box, Dora had an accent from Spain and said "corazón" with a "th" sound. One setting gave her a Latin American accent, which fits the families this is for. The real app will use recorded human voices.

## Try it, then tell me

[Play the Little Lights demo](/demos/little-lights/). It works best full screen on a tablet or laptop.

- Pick a story, then follow Lumi.
- Switch **Level 1, 2, 3** in the top bar. The share game changes the most.
- Switch to **ES** to hear and see it in Spanish.
- Open **About this demo** for notes on each screen.
- To reach the Grown-up corner, press and hold the dashed button for one second.

I'm looking for feedback from parents, teachers, therapists, and people who sign. What helps? What gets in the way? What would your child do on each screen? Send me a message on LinkedIn.

## Ownership

Little Lights is a work in progress. The name, the characters, the art, the lessons, and the demo are © 2026 Luis Rodriguez Cosme. All rights reserved. They're shared here for review and feedback only. Please don't copy, share, or adapt them without written permission.

The 1918 sign manual used for reference is in the public domain. The Bible stories are simple retellings for young learners. Voices made with Kokoro-82M by hexgrad (Apache 2.0).
