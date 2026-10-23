---
title: "Tuning my own piano"
description: "I built a tuning app for people who have never tuned a piano, then used it on mine. The math was the easy part. Calm and safe were the hard parts."
date: 2026-10-23
pillar: projects
draft: false
---

I own an old Baldwin spinet. It had drifted flat, and I wanted to tune it myself. I had never tuned anything.

So I built a tuner. Claude wrote the code. I made the calls, and I was the first user. That last job turned out to be the most useful of the three.

## Why a piano is hard to tune

A piano string isn't a perfect string. It's a stiff steel wire, and the stiffness pushes its overtones a little sharp. The overtones of low notes land on the notes above them. Tune every key to its textbook pitch, and those overtones clash. The piano sounds dull.

Tuners fix this with stretch. The bass goes a little flat and the treble goes a little sharp, so the overtones line up. How much stretch a piano needs depends on how stiff its strings are, and that is different on every piano.

The app listens to each key, measures how stiff that string really is, and builds a stretch curve for that one piano. It isn't a table from a book. It's a curve from your own strings.

## The math wasn't the hard part

The goal from day one was simple: a person who has never tuned a piano should be able to tune their own. That made the step-by-step guide the main path, not an extra.

The first real tuning, back in August, worked. Most of the piano came up to the pitch I aimed for. I tuned A to 438 instead of the usual 440, on purpose. An old piano that sits flat is safer brought up a little than pulled up a lot.

The measuring held up too. When I measured the piano again after the tuning, the stiffness numbers came back within about 5% of the first time. That told me the app measured the same piano the same way twice.

The screen was another story.

- The numbers flickered. Each new reading replaced the last one before I could read it.
- Buttons jumped. A message would appear, the layout would shift, and the button I was reaching for moved.
- The spinning display was hard to read at a glance, and a glance is all you get when one hand is on the tuning lever.

None of these were math bugs. They were calm bugs. The fix was a display that holds still. Readings are smoothed, so the number and the verdict stay put long enough to read. The reading area has a fixed size, so nothing moves. Two checkered bands slide right when a string is sharp, slide left when it's flat, and freeze when it's in tune. You can see that out of the corner of your eye.

Calm turned out to be a feature. Maybe the main one.

## Four seats at the table

This week I asked for a bigger review. Claude ran four reviews of the whole app, each from a different seat:

- **Accuracy:** do the measuring and the math hold up?
- **Engineering:** is the code safe to change, and is my data safe?
- **A working piano tech:** does this match how the job is really done?
- **A first-timer:** what goes wrong for someone who has never done this?

None of the four were real people. They were AI reviewers, each told to sit in one seat and stay there. They still found different things, and that was the point.

The accuracy seat found that Record analyzed the oldest part of the sound. Press Record, then strike the key, and the app could measure the silence before the strike. Now Record waits for the strike.

The engineering seat found that the app could say IN TUNE about a string it hadn't heard yet. After one string locked in, the first quick reading of the next string borrowed that lock. Now a new strike has to earn its own.

The piano tech seat said a very flat piano needs a pitch raise. That means a rough first pass, then the fine pass. On the first pass, you pull each string a little past its target, because raising the tension on later strings lets the earlier ones drop back. Now the app does that. It also shows a red STOP when a string goes too sharp, so you stop before it breaks.

The first-timer seat found the simplest one. Before you turn a pin, make sure it's the right pin. Strike the key while you barely move the lever. If the pitch doesn't move, you're on the wrong pin, and you're tightening a string you aren't listening to. Stop. That is now a step in the guide.

## The same danger, twice

One finding stuck with me.

After a pitch raise, the app could forget the raise had happened. It would look at the old, flat readings and offer the raise again. On a real piano, that means pulling strings that were already pulled, a second time, past their target. That is how strings break.

A review caught it, and we fixed it. Then the fix round made a new bug: a string tuned right on its target could read as "wrong key." We fixed that. Then the final review found a second path to the first danger. If you measured a key again in the middle of a raise, before that key had been raised, the app counted it as an "after the raise" reading. It could still offer the full raise again. We fixed that too.

The lesson wasn't that the first fix was bad. It was that one fix closes one door. When a bug can break something real, a fresh review has to go looking for the other doors.

## Where it stands

The app has close to a thousand automated tests. It runs on my Mac, and it's private for now.

For transparency: the newest build hasn't been in front of the piano yet. The tests say it works. The piano gets the last word. [Green isn't proof](/blog/green-isnt-proof/), and that applies to my own projects too.

The piano was the easy customer. It doesn't care what the screen looks like. The person holding the lever does, and that person has never done this before. Every hard part of this project came from taking them seriously.
