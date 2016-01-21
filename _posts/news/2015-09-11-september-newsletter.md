---
title: September Newsletter
date: 2015-09-11
sitemap:
  lastmod: 2015-09-11
  priority: 0.7
  changefreq: 'monthly'
---
![]({{site.url}}/assets/images/2015-09-11-september-newsletter/image1.jpeg)

Design Challenge Updates
=======================
Fall is arriving and we are getting ready to open registration for the popup challenge! We’ve posted a new information document outlining the structure of the challenge. You can find it here:

<{{site.url}}/challenge-wrapup>

Get Free Tools!
---------------
Apply for a Fabrication Grant to get an electronic cutter to speed up your fabrication.  Apply by registering your team and passing your first checkpoint!

Registration & Deadlines
---------------
We have updated the website with registration forms and deadlines for participating.  

popupCAD Updates
================

DXF Support
-----------

popupCAD now imports .dxf files from a wide range of programs. Learn more [here]({{site.url}}/tutorials/dxf-files/)!

Easier Installation
-------------------

We have tested and checked popupCAD installation and have updated the install instructions for Mac and Linux to make it easier for you to install on other systems.

Auto-Upgrade & Backup
---------------------

popupCAD files will never get old! When you load a popupCAD file, it will convert any old data structures and operation types to the newest format, ensuring that your files don’t break just by sitting still. We are also implementing a standalone file updater to update an entire directory all at once (please stay tuned)

In addition, did you know that your files get backed up whenever they are upgraded, as well as periodically during use? Look at (user directory)/popupCAD\_files/backup to retrieve it!

User-Defined Material Types
---------------------------

You can now create and define your own material types, with their own material properties, thicknesses, and view settings. Visit [{{site.url}}/docs/custom-materials-in-popupcad/]({{site.url}}/docs/custom-materials-in-popupcad/)

New operations
--------------

There are a variety of new operations available in popupCAD

- Sub-operation: define custom functions and encapsulate sets of steps using the sub-operation.
- New transform operations which let you reuse geometries internally from your own operation list or externally from other design files.
- A code operation which gives you full python scripting access (including the popupCAD API) from within the popupCAD editor
- An automatic hole generator which creates holes at nodes where joint material might overlap and must be removed

GUI Improvements
----------------

We are always trying to make the GUI work better. This is a slow
process, but we have made progress on a variety of things:

![]({{site.url}}/assets/images/2015-09-11-september-newsletter/image2.png)

- 3D Viewer improvements: faster layer explode, controllable
    translucence
- Faster constraint solving and interacting.
- Improved 2D zoom in the sketcher.
- Grouped icons and shortcut keys

Script-based Interaction
------------------------

You can do some advanced things with the codebase. As the documentation matures we hope you will try to experiment with some of the things you can do scripting with popupcad, including automated generation of sketches, designs, and manufacturing files, design merging / splitting, etc.

![]({{site.url}}/assets/images/2015-09-11-september-newsletter/image3.png)