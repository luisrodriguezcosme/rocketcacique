---
title: "Little Lights: Bible lessons kids can see, hear, sign, and do"
description: "A playable mockup of a picture-first Bible learning tool for kids with Down syndrome. It's here so people can try it and tell me what to change."
date: 2026-10-10
pillar: projects
draft: false
---

*Updated October 14, 2026: the demo has grown from four lessons to seven, and a lot more changed. See [what's new](#whats-new).*

Most kids' Bible apps move fast. They use a lot of words, they play a buzzer when you get something wrong, and they assume a child can read the screen. Many kids with Down syndrome learn best a different way: by seeing, by doing, and by doing it again. For those kids, a fast app with a buzzer isn't a lesson. It's a wall.

Little Lights is my attempt at something better. It teaches one big idea at a time, such as sharing or telling the truth, through a short Bible story, a picture, a hand sign, and a simple game. Then it hands the lesson to parents, so kids practice it for real at home.

It isn't an app yet. It's a playable mockup, built to get feedback before anything real gets built. You can [try it here](/demos/little-lights/).

## Seven lessons, one routine

The demo has seven lessons:

- **Tell the truth:** young Samuel tells Eli what God said (1 Samuel 3).
- **Be kind:** the Good Samaritan (Luke 10).
- **Love others:** Jesus welcomes the children (Mark 10).
- **Share:** a boy shares his lunch of bread and fish (John 6).
- **Say thank you:** one man comes back to thank Jesus (Luke 17).
- **Ask for help:** Peter calls out, "Jesus, help me!" (Matthew 14).
- **Say sorry:** the lost son comes home (Luke 15).

Every lesson follows the same four steps in the same order: watch the story, learn the word and its sign, play two short games, then do it at home. The routine is the point. When the steps never change, a child always knows what comes next, and so does the parent. A small picture strip at the top of each screen shows it: first this, then that.

## The rules behind every screen

A few rules shaped every screen.

**Show it, then say it.** Every word has a picture, and every line is read out loud. Story words light up as they are read.

**No losing.** There are no timers, no red X's, and no buzzers. A wrong tap fades a little, the right answer glows, and Lumi, a lamb who guides kids through every lesson, says why. Every round ends in success. Teachers call this errorless learning.

**Give time.** If a child waits, nothing happens for six seconds. Then Lumi asks again. After six more, the right answer glows. Nothing moves on by itself.

**Sign it too.** Many kids with Down syndrome understand more than they can say. Each lesson teaches one ASL sign for its key word, so a child has a way to answer without speaking.

**Levels by skill, not age.** A 12-year-old can start at Level 1, and that's fine. Level 1 is tap only, with one or two big choices. Level 2 adds more rounds and lets kids drag. Level 3 asks real questions, such as "What would you do?" or "Give Mia two bread rolls."

**Kids see themselves.** The kids in the pictures include children with Down syndrome, a child with glasses, a child with hearing aids, and a child who uses a wheelchair.

The demo also switches between English and Spanish, because many families who need this speak Spanish at home.

## Drawing the signs

The signs took the most care. I wanted pictures I had every right to use, so I started by searching for sign drawings with no copyright. Free, modern drawings of the first four signs didn't turn up. What did turn up was a sign language manual from 1918 that is now in the public domain. Two of its photos, TRUE and KIND, match the signs used today. Its LOVE sign is an older form, and SHARE isn't in it at all.

So we drew our own. A kids' sign chart gave me the style I wanted: one clear picture per sign, a friendly face, and bold yellow arrows that show the motion. We didn't copy it. Each sign has its own child, wearing that lesson's color, with hands drawn finger by finger so the handshape is easy to read. The three new signs, THANK YOU, HELP, and SORRY, follow the same style. A signing teacher still needs to check all seven before any child learns from them.

## What's new

I added these in four rounds of changes, testing each one before it went live.

**For kids**

- **Three new lessons:** say thank you, ask for help, and say sorry.
- **A night sky.** Each finished lesson adds a star to Lumi's sky. Twelve stars make a heart, and then a new sky begins. There's no score and nothing to lose.
- **A feelings check-in.** Once a day, Lumi asks, "How do you feel today?" A child taps one of five faces, and Lumi answers kindly. Nothing about the answer is saved.
- **Pick a buddy.** A child picks one of seven kids to be their buddy. The buddy shows up on the home screen and in the night sky.
- **Again!** The end of each story has an Again! button, because many kids want to hear it one more time.
- **Lumi moves.** Lumi hops when a child gets it right and points at the next step. A grown-up can turn motion down.

**Levels that really change**

Every game now plays differently at each level. At Level 3, a child answers a question about the story by finding the right picture, picks "What would you do?" in the kindness game, and brings a named friend to Jesus in the love game.

**For grown-ups**

- **Grown-up tips.** Turn them on, and each screen shows one short tip, such as "Point to each picture as it is read. Let your child point too."
- **Your child's name.** Type it in the Grown-up corner, and the home screen says hi to your child. It stays on your device.
- **Both languages at once.** English and Spanish can show together, for homes that use both.
- **Printables for every lesson.** Story cards and a 10-minute parent guide for each lesson, plus word and sign cards and a sticker chart. [Download the printables](/demos/little-lights/little-lights-printables.pdf) (PDF, 18 pages, letter size).

**For classes and tablets**

- **Big screen.** One button makes everything larger for a class or a TV. The arrow keys turn the story pages, so a clicker works too.
- **Works without internet.** On a tablet, you can add Little Lights to the home screen. After the first visit, it plays with no internet at all.

## How it was built

Claude wrote the code and drew every picture in the lessons as code. I made the calls: what to teach, what to cut, and what had to change after I played it.

The best fixes came from playing it like a kid would. The share game's kids were too small. A story picture had blank bands above and below it. One step said "Home" when it meant "At home." In the love game, Jesus greeted each child in Spanish with "Bienvenido," which only fits a boy. Now he says "¡Qué bueno que viniste!" ("I'm so glad you came!"), which fits every child. Each took a minute to fix, and each would have been easy to miss without tapping through it.

One more thing came from that care. My first version read every line in a Mac voice, but Apple's license doesn't allow those voices to be shared in public. The demo now uses Kokoro, a free and open voice model. Heart reads the English, and Dora reads the Spanish. Out of the box, Dora had an accent from Spain and said "corazón" with a "th" sound. One setting gave her a Latin American accent, which fits the families this is for. The real app will use recorded human voices.

## Try it, then tell me

[Play the Little Lights demo](/demos/little-lights/). It works best full screen on a tablet or laptop.

- Pick a story, then follow Lumi.
- Switch **Level 1, 2, 3** in the top bar. Every game changes.
- Switch to **ES** to hear and see it in Spanish.
- Tap the face next to "Hi, Sam!" to pick a buddy.
- To reach the Grown-up corner, press and hold the dashed button for one second. Turn on tips and type a name there.
- Try **Big screen** if you teach a class.
- On an iPad, tap Share, then Add to Home Screen, to play it without internet.
- Open **About this demo** for notes on each screen.

I'm looking for feedback from parents, teachers, therapists, and people who sign. What helps? What gets in the way? What would your child do on each screen? Send me a message on LinkedIn.

## Ownership

Little Lights is a work in progress. The name, the characters, the art, the lessons, and the demo are © 2026 Luis Rodriguez Cosme. All rights reserved. They're shared here for review and feedback only. Please don't copy, share, or adapt them without written permission.

The 1918 sign manual used for reference is in the public domain. The Bible stories are simple retellings for young learners. Voices made with Kokoro-82M by hexgrad (Apache 2.0), which was trained in part on Koniwa (CC BY 3.0) and SIWIS (CC BY 4.0).
