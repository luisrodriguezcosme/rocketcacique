---
title: "Green isn't proof"
description: "A test run that tested nothing still exits 0. Check the count, not the check mark."
date: 2026-09-25
pillar: technical
draft: false
---

Three times in the last two weeks I looked at a green result and moved on. Every time, the green was telling the truth about the wrong thing.

The tool wasn't lying. It was answering a narrower question than the one I was asking.

## Zero tests, zero failures

The first one is a classic. A test suite ran in CI, finished fast, and went green. The run was fast because it ran nothing. A path had changed, the test runner found no files that matched, and it reported the honest result: 0 examples, 0 failures.

RSpec exits 0 in that case. Zero failures is a pass, as far as the exit code goes. pytest makes the opposite choice: it exits with code 5 when it collects no tests, so a CI job fails loudly. Neither choice is wrong. But if you only ever look at the check mark, one of them will hide an empty run from you for weeks.

The fix wasn't a smarter test. It was a smarter question. I now read the count before I read the color. If a suite that normally runs a few hundred examples reports 12, or 0, that's the finding, green or not.

## "Cleaned," but not really

The second one was quieter. I ran a package manager's cache clean command, it exited 0, and I assumed the cache was gone. It wasn't. Another process on the machine held a lock on the cache. The clean command waited, gave up, and still exited 0.

From the outside, "cleaned the cache" and "couldn't touch the cache" looked the same. The only difference was a line in the output that I didn't read, because the exit code had already told me what I wanted to hear.

## The plan that was too clean

The third one came from infrastructure code review. A change added a resource by importing something that already existed. The plan came back with no changes, which looks like the best possible outcome. It wasn't. An import that works always shows up in the plan as something to import. A plan with no changes meant the import block never took effect. The "clean" plan was the bug.

This is the one that changed how I review. On a change that is supposed to add something, "nothing to do" is not reassurance. It's a question.

## The pattern

Every one of these has the same shape. A tool reports success on the thing it checked. The thing it checked wasn't the thing I cared about.

- The test runner checked "did anything fail?" I cared about "did the tests run?"
- The cache command checked "did I crash?" I cared about "is the cache empty?"
- The plan checked "is there a difference?" I cared about "did my change register?"

An exit code is one bit of information. It is a useful bit, and it's the one every pipeline is built around. But it answers a yes-or-no question that the tool author picked, not the one in your head.

## What I do now

None of this needs a new tool. It needs a few habits.

**Know what "normal" looks like.** How many tests does this suite usually run? How long does the job usually take? A run that is five times faster than normal deserves a look, even when it's green.

**Read the count, not the color.** Most tools print a summary line. "0 examples." "0 to add, 0 to change." "Skipped: lock held." That line is the real result. The color is a summary of the summary.

**Ask what should have changed.** Before I look at a result, I say out loud what I expect it to show. If I expect a plan to import one thing, then a plan with zero imports is a failure, even if the tool is happy about it.

**Make empty fail.** Where I can, I make "nothing happened" a hard error. A minimum test count in CI. A check that the cache directory is actually gone. It's a few lines of shell, and it turns a silent pass into a loud failure.

**Be suspicious of fast.** Fast and green together are the most comfortable result, and the one I now trust the least.

## The real lesson

It wasn't that the tools were bad. It was that I let them answer a question I never asked them. A green check mark means "the thing this tool measures looks fine." It is up to me to know what that thing is, and whether it's the thing I care about.

Green isn't proof. It's a claim. Check it.
