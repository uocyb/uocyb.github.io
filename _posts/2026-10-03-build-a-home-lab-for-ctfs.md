---
layout: post
title: "Build a Home Lab for CTFs"
date: 2026-10-03
author: UO Cybersecurity Club
description: A recap of Nate's home lab night on Oct 1, with a six-step checklist to build your own lab and practice for CTFs.
---

Our first General Meeting of the fall, on Thursday, Oct 1, was all about one idea: build a place where you can safely try things. Nate walked the club through building a home lab in the Visualization Lab, using Jeff McJunkin's slides, [Building Your Own Kickass Home Lab](https://docs.google.com/presentation/d/1V-mWiyaJ3I6HhXRxH1M5ityWYRqb5PoNHwvWSZaOr_E/edit?usp=sharing){:target="_blank" rel="noopener"}. Jeff's slides are open to anyone, and the credit for the ideas below goes to him.

Life is full of interesting questions, like whether a payload can get past your filtering, whether an attacker can hop from one server to another, or whether you can spot timestomping. A lab gives you somewhere to find out. Jamie's GOAD for Active Directory practice was part of the night too.

A lab is also one of the best ways to get ready for CTFs like BSidesPDX, because you can practice the same moves on your own time. Here is a checklist to build yours.

## Set up your lab

1. **Pick one question.** Decide what you want to find out, then build the smallest lab that can answer it. Two or three VMs on the same network will answer a lot.
2. **Check your computer.** You do not need a rack, and you probably do not need dedicated hardware. Plan for plenty of RAM, and avoid running VMs from a spinning disk.
3. **Install a hypervisor.** VMware Workstation works fine for most people. VirtualBox works too, but pre-built appliances are more often made for VMware.
4. **Add an attacker machine.** A Kali VM is a good start. Set up SSH key login so getting into it is quick.
5. **Add targets made to be broken.** Try Metasploitable 2, a TurnKey Linux app, a VulnHub machine (most come with walkthroughs), or a lab from the SEED Project. Keep them on your own lab network.
6. **Take a snapshot before you break something.** Then you can revert in a minute instead of rebuilding.

## Then put it to work

Break into one machine, find your way to the next, and pull out what you find. Try a walkthrough machine without help first, then read the walkthrough to see what you missed. Keep notes on what you tried so the next attempt starts faster.

## Stay in bounds

Practice only on systems you own, on labs and CTFs the club provides, or on systems where you have written permission. Do not scan, probe, or access UO systems, classmates' devices, or anyone else's systems without written authorization from the owner. Unauthorized access can violate UO policy and US law.

Questions or stuck on a step? Find us in [the club Discord](https://discord.com/invite/wn4T3byxh4){:target="_blank" rel="noopener"}, and keep an eye on the [calendar](https://uosec.org/calendar.html){:target="_blank" rel="noopener"} for what's next.
