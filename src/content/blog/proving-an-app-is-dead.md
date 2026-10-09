---
title: "Proving an app is dead"
description: "A live app leaves evidence. A dead one leaves silence, and silence has a lot of explanations. What I learned deciding which apps we could turn off."
date: 2026-10-09
pillar: technical
draft: false
---

Over the last few weeks I took on a question that sounds simple: which of our apps can we turn off?

Every platform collects apps that outlive their purpose. Someone builds a thing, the need changes, the team moves on, and the thing keeps running. It still gets patched, planned, and watched. So I went through every app in our infrastructure code and asked each one the same question: is anyone using you?

The answer was harder to get than I expected. A live app leaves evidence. A dead app leaves silence, and silence has a lot of explanations.

## Missing isn't zero

The first trap was treating "no data" as "no use."

If the load balancer has a target for an app, and that target reports zero requests for 90 days, that's evidence. The meter exists, and it reads zero. But if an app doesn't show up in the monitoring tool at all, that tells you nothing. It may never have been set up to report.

Some folders in the repo can't report anything, because they don't run anything. They hold a DNS record, a sign-in group, or the settings for a code repository. Calling those "dead" because they're quiet is just noise. They get judged by their purpose and their git history, not by traffic.

And every kind of app needs its own meter. Two apps that looked dead were alive. One served its pages from a hosting service that reports traffic under a different tag than everything else. The other had moved off our platform entirely. So now, for every app, I write down two things: did each source see the app at all, and what did it report?

## Logs aren't traffic

The second trap was log volume. One quiet app wrote hundreds of thousands of log lines a month, which looked busy. Then I read them. The database writes its own logs under the app's tag, and almost all of them were the database's monitoring agent logging in to check on itself. When I counted only real web requests, a month of "activity" came down to a few dozen requests on a single day.

Health checks fooled me the same way. The load balancer pings each app every few seconds, and those pings don't count as requests. So an app can write a log line every three seconds and still show zero traffic. That isn't a contradiction. It's a load balancer asking "are you there?" and the app saying yes.

One of the apps I turned off had not reached its database in months. Nothing alerted, because its health check only asked if it was running. It never asked if it could do its job.

## Quiet has other reasons

Even real zero traffic doesn't mean unwanted.

That same quiet app with all the database logs wasn't abandoned. It wasn't launched yet. A comment in its config reserved its web address for launch day, and its AI feature still pointed at a fake provider used for testing. No metric could see that. Only the code said it.

Other quiet things had good reasons too, such as test environments that only run during work hours, or a conference app that sits at zero most of the year and wakes up for one event. Before I call something idle, I read its own config first.

## Turn it off before you tear it down

Two apps passed every check: no requests, no real logs, no callers. Even then, I didn't delete them. I scaled them to zero and waited two weeks. Scaling down is easy to undo. Deleting isn't. Nobody called, and nothing broke.

The hardest part wasn't technical. It was finding someone who could say yes. The first person I asked hadn't worked on these apps and pointed me to someone who had. That person approved it in one line and added the history I couldn't find anywhere else: what the apps had been for, and what replaced them.

## Archived isn't safe

The teardown had one trap I almost missed. Our Terraform archives a repository on destroy instead of deleting it, so I wrote "archived, not deleted" in my notes and moved on. I hadn't checked.

The same code also manages a branch in that repository, and it removes the branch before it archives the repo. One repo's branch held 26 commits that existed nowhere else. An AI reviewer that I run on every change, before I open it, caught that before anything was applied. That miss was mine. We kept the branch, archived the repo, and now I compare branches before any teardown.

The code also only knows what the code made. These apps held logins in other systems that our infrastructure code never managed. Retiring those took a short list and a message to each system's owner, and a couple of them are still in progress.

## Start from the source

One more small lesson. My first list of empty Terraform folders came from a copy on my laptop that was hundreds of commits behind. It listed things that were already gone and missed newer ones. I rebuilt the list from the main branch, proved each folder was empty with a plan, and only then deleted them, in a separate change.

## Knowing when to stop

After the first two apps, I looked at test environments that sat at zero while production ran fine. Most had a reason. Some were off on purpose, such as an example app other teams copy. Some were in use in ways the metrics didn't show. Only a few were real candidates, and each one needed time from its owners. I closed that task without tearing anything down and wrote the candidates on it for later.

Money wasn't the reason for any of this. The apps I removed cost very little to run. The payoff was a broken service gone, its failure logs gone, and less code for every future change to plan against. When the payoff is that small, other people's time is the bigger cost.

## The checklist

What I'd hand to anyone doing the same work:

- **Separate "not measured" from "zero."** Write down whether each source saw the app at all.
- **Read the logs before you count them.** Know whose logs they are.
- **Read the app's own config.** It knows about launch days and schedules that no metric can see.
- **Turn it off and wait.** Scale to zero first. Delete after a quiet stretch.
- **Find someone who can say yes,** and ask them what it was for.
- **Check what "archived" really keeps.**
- **Stop when the payoff is small.** Write down what you found and move on.

A dead app doesn't announce itself. It just goes quiet, and so do a lot of live ones. The work is telling them apart.
