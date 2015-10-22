---
title: October Newsletter
layout: post
author: Dan
date: 2015-10-22
category: news
published: true
sitemap:
  lastmod: 2015-10-22
  priority: 0.7
  changefreq: 'monthly'
permalink: news/october-newsletter
---

Contest
========

## Deadlines

The **Nov 1** deadline for applying for ***free fabrication tools*** is coming soon!  To qualify, you must do these things:

* [Register](http://www.popupcad.org/contest/register/) your team
* Submit a [Checkpoint](http://www.popupcad.org/contest/team-checkpoint/)
* Request a [Fabrication Grant](http://www.popupcad.org/contest/fabrication-grant/)

This will put you up for consideration for fabrication tools that you might need to complete your project.

## The "Pop-up Cup"

<img src="{{site.baseurl}}/assets/images/2015-10-22-october-newsletter/popup-cup.jpg" height="300" />

One of the prizes of the competition is the "Pop-up Cup".  Stay tuned to hear more about its progress!

# Outreach

The past month has been quite eventful.  It seems like I've been everywhere, from IROS2015 in Hamburg, Germany, speaking with fellow roboticists, to Masconomet High School in Boxford, MA to speak with high school students about origami inspired devices.  Here are some highlights of past and upcoming events:

## Online Q&A, October 28, 2015

Dan Aukes will be hosting an hour-long [Q&A session](https://plus.google.com/u/0/events/cfr9rsrh3fu9lv8hmc4l0tknk6k?authkey=CJKWkeegxcf8UQ) regarding popupCAD, the pop-up challenge, and any questions you might have about designing laminate robotic devices on *October 28, 2015*.  Please email in advance any questions you might have (danaukes at seas.harvard.edu) and I will do my best to answer them for you online.  Hope to see you there!﻿

## popupCAD in the Globe

We were recently [featured](http://www.popupcad.org/news/2015/popupcad-in-the-globe/) in the Boston Globe!  

# Software

Yes, I've found time to make some nice additions to the software as well.  Here's a short overview:

* ***Faster reprocessing***  
If you have a large file, and add an operation to the bottom of the list, it used to reprocess each operation, taking needless time to repeat steps unnecessarily..  Now it does not.  That was a nice little bug fix!
* ***Curvy text***  
<img src="{{site.baseurl}}/assets/images/2015-10-22-october-newsletter/text.png" height="200" />  
Finally! Though the text feature in the sketcher has been there for a long time, it looked like fonts had been carved out of stone.  Now popupCAD interpolates the font files better, interpolating between points so that it looks much smoother
* *** Spliny DXF's***  
In  addition to curvy fonts, you can now import DXF spline elements.  There are still several features of .dxf files which do not work, but we're closing the gap so that you have to jump through fewer hoops.
<img src="{{site.baseurl}}/assets/images/2015-10-22-october-newsletter/wings.png" height="200" />  
* ***High-functioning scripts***  
Merge two designs; split operations of a design into a sub-operation; test your file; programmatically add or remove operations.  The possibilities are growing thanks to the API scripts now included with the popupCAD source code, found in popupcad/api_examples

# Design of the Month

The students in Informal Robotics are making some interesting popup-inspired devices!  I put together a video of highlights.  [Check it out](https://youtu.be/R5hGiN0Q5Qs)!
<section>
<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; margin-left: 10%; margin-right: 10%} .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%;}</style>
<div class='embed-container'>
  <iframe src="https://www.youtube.com/embed/R5hGiN0Q5Qs?rel=0" frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</section>
