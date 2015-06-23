---
layout: post
title:  "Enabling DXF Output"
author: Dan
foregroundcolor: fff
backgroundcolor: 82ccc8
date:   2015-01-26 13:42:40
category: blog
published: true
sitemap:
  lastmod: 2015-04-23
  priority: 0.7
  changefreq: 'monthly'
---

Right now, direct dxf export only works in Windows, and requires the installation and setup of some external programs:<!--more-->

1.  Download and install the following
    *   inkscape
    *   pstoedit(64-bit) - select the full install
    *   ghostscript(32-bit)
2.  Add the path of both to the system path
    1.  in file browser go to computer->properties->advanced system settings->environment variables->system variables->path
    2.  select edit, scroll to the end of the field, add a semicolon, and the path to each program, respectively.
3.  Make sure the path to pstoedit is correct in popupcad preferences(File->Preferences).

This should enable the dxf option in File->export... to work.
