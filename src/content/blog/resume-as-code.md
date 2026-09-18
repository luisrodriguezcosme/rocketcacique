---
title: "A resume as code"
description: "Markdown sources of truth, pandoc builds, and four targeted versions — no more resume_final_v7.docx."
date: 2026-09-18
pillar: projects
draft: false
---

My resume hadn't been touched in years, and when I finally sat down to fix it I made the
same mistake most engineers make: I opened a word processor. Twenty minutes in, I realized
I was hand-formatting the same work history four times — once per version I wanted — and
that this is exactly the problem we solve at work every day. Repetition with small
variations isn't an editing problem. It's a build problem.

So the resume became a repo.

## The shape

Four Markdown files are the source of truth, one per audience: a core DevOps/platform
version, an AI-infrastructure version, an SRE version, and a neutral chronological one.
They share the same history — the bullets and emphasis shift per audience. Everything
else is generated:

- **HTML** with a small print stylesheet — open in a browser, print to PDF.
- **Word** for the recruiters and applicant tracking systems that want .docx.
- **LaTeX** for when typesetting matters, built on Overleaf.

One `build.sh` and pandoc do all of it. Edit a bullet in one Markdown file, run the
script, and every format is current. The repo is private; the outputs are committed so
each version is one click away.

## What it wasn't

This wasn't about the tooling being clever — pandoc has done Markdown-to-anything for
years. It was about applying the discipline we already trust: a single source of truth,
diffs instead of guessing what changed, and review before anything ships. When a recruiter
asks "what changed since the version you sent in March," `git log` answers.

Two deliberate choices worth stealing:

**Placeholders for contact info.** The committed sources say `[YOUR-EMAIL]` and
`[YOUR-PHONE]`. Personal contact details don't belong in git history, even private git
history — repos get transferred, cloned, and shared more casually than documents do. Fill
them in at send time.

**Comments as TODO markers.** The eras of my career I couldn't document well yet carry an
HTML comment in the source — invisible in every build, loud in every edit. The resume
ships while the backlog stays honest.

## The payoff

Four tailored resumes that stay in sync cost me one afternoon to set up and now cost
nothing to maintain. The next update is a pull request against my own history — reviewed,
built, and versioned like everything else I ship.
