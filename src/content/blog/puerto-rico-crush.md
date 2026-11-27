---
title: "Puerto Rico Crush: a game about my real day"
description: "A Friday Fun Day game about working remotely from Puerto Rico while helping my parents. Claude wrote the code. The design call that mattered most wasn't about code."
date: 2026-11-27
pillar: projects
draft: false
---

Lately my days have had two lists. One is on my laptop: Slack, pull requests, standup, on-call. The other is everything else. I've been working remotely from Puerto Rico and helping Papi y Mami. That means feeding the chickens, picking up the eggs, watering the plants, cleaning, cooking, and doing the dishes. It also means a running war with the mosquitoes, fought with an electric zapper.

Our team has a Friday Fun Day tradition. People build small browser games and add them to a shared arcade. When my turn came, I didn't have to look far for a theme. I asked Claude to build a game about my day.

The idea and the day are mine. Claude wrote the code. You can [play it here](/games/puerto-rico-crush/).

## Forty minutes from idea to a playable day

Claude didn't start with code. It looked through the team arcade first, then came back with three questions. What kind of game? What should the parents be called? Should scores go on a team leaderboard? I picked a walk-around day, "Papi y Mami," and yes to the leaderboard. Then I remembered the most honest part of my day and added the mosquito zapper.

Before any building, I asked for mockups so I could pick a look. The first round was too rough, and I said so. I asked for an island feel and a name: Puerto Rico Crush. "Crush" is the name only. There's no match-3 puzzle. You crush your to-do list. I picked a soft pastel look in Old San Juan colors and asked for the cozy, rounded feel of a life-sim game. The design doc wrote down a rule I was glad to see: the look is our own, and nothing is copied from any other game.

From my first message to a full playable day took about 40 minutes.

## What a day looks like

One run is one day, 6:00 AM to 9:00 PM, in about five minutes of real time. You walk around a little casita and its yard and juggle three kinds of tasks at once.

- **Work** pings from the laptop: a quick question in chat ("it is never quick"), a pull request review, the daily standup, an on-call page ("Prod is on fire. Okay, a small fire."), and a Friday deploy ("What could go wrong?").
- **Casa** chores: feed the hens, pick up the eggs, cook breakfast with those eggs, make arroz con habichuelas, wash the dishes, water the garden, sweep the leaves.
- **Papi y Mami** ask for help: a cafecito for Mami, Papi's glasses (he just had them), a TV remote that stopped working again.

The island adds its own surprises. At 1:00 PM, se va la luz, and work pauses until you start the planta. An aguacero waters the garden for you but brings more mosquitoes. An iguana shows up and eats the plants. The rooster starts the day, and the coquís end it. The mosquitoes are worst at dawn and dusk, the same as in real life. Zap them in a row for a combo.

At the end of the day you get a grade and a title in Spanish. The top grade earns "Leyenda de la Brega." A rough day gets "Mañana Será Otro Día." Zap 60 mosquitoes and you're "Matamosquitos Supremo," no matter what else happened. My best day so far is 7,150 points, an A, and that last title. That says a lot about where my afternoons go.

## The design call that mattered

The hardest part of this game wasn't the code. It was how to put my parents in it.

A time-management game turns everything into a task with a timer. That works for dishes and deploys. It's the wrong way to show Papi y Mami. So the design doc has one line under anti-goals: Papi y Mami are shown with warmth, never as a burden or a joke.

Claude turned that line into rules. Helping them fills a hearts meter. The top grade needs 95 percent of the day done and the hearts meter at 80 or more, so you can't reach it on work alone. And the longest task in the game isn't the deploy. It comes at 8:00 PM, when Mami calls you to sit down for the novela with them. It's worth more hearts than anything else in the day.

I didn't set those numbers. Claude did, from that one line. When I read them back, they said what I wanted the game to say.

## Making it public

The first version was built for our team. Its leaderboard used our work sign-in, and the work pings named real tools we use. Before it could go on this site, it had to stand on its own.

So the public copy changes a few things. The team leaderboard is now "Your best days," a top five that stays in your own browser. The work pings use plain names, such as "Team chat" and "Plan bot." The blackout no longer names the power company. The jokes stayed.

The testing followed the same approach that paid off in [Barnyard Dogfight](/blog/barnyard-dogfight/). A small script plays a full day by tapping and pressing keys, the way a person would, instead of moving the player into place. On the public copy, it played two full days with no errors: an A, then an S. Logic tests check the clock, the scoring, and the grades.

## Why this one stays with me

Most of the games in our arcade are about something fun. This one is about an ordinary day, and that was the point. The game wasn't about time management. It was about this season: the laptop pinging, the eggs in the nest, and the novela at night.

I'm grateful for this season, mosquitoes and all.

## Play it

[Play Puerto Rico Crush](/games/puerto-rico-crush/). It runs in the browser, and one day takes about five minutes.

- Walk with the arrow keys or WASD, or tap where you want to go.
- Stand at a task to do it. Some tasks need an item first: eggs from the nest, water from the barrel, cafecito from the kitchen.
- **Space** or the Zap button swings the zapper. **P** pauses. **M** turns the sound off.

The game was built with Claude, which wrote the code. All of the art and sound is drawn and made in code, with no image or audio files. The original team leaderboard followed the pattern a teammate used in their own arcade game.
