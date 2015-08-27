---
title: popupCAD Design Tutorial
---

This tutorial explains how to create a device design.  This process can be used with exported .yaml files which come from a solidworks design process, outlined in the [Solidworks Design Tutorial]({{site.url}}/tutorials/solidworks-design-tutorial)

Create Sketches
---------------

At a minimum you will probably need three sketches per sub-laminate.  You will need one sketch to define where material exists.  Let's call this the "body" sketch.  You'll also need a sketch to define where joints go, called your "joints" sketch.  Finally, you may also need to define places where your body gets cut or separated.  We'll call this your "gaps" sketch.  Each of these sketches will be used in different ways.

### Body Sketch

Draw the outline of the polygon(s) which define the body material of your device.  It is unnecessary to split your device into the individual bodies which define your 

Device Design
-----------------
1. Create new sketch --> import file (ignore dialog boxes)
1. Can reuse old geometry --> autobridge triangulates
1. Use get joints to find joints (copy of original sketch) --> flexures (sketch OP)
1. Use get joints again to find gaps (copy of original sketch) --> empty spaces (sketch OP)
1. Buffer gaps to create areas to remove material (this is a dilate OP)  
1. Use placement operation to place joints (probably want to keep y-scaling at 1.0)
1. Use laminate operations to remove material and to place joints
1. Merge operation to combine hinge and holes from buffered joined sketch
1. Clean up intersection of joints (use circles --> sketch and then remove)
1. Use intersection operation to trim placed joints
1. Save file!! (this should be final device)

Manufacturing Design
--------------------
1. Sheet operation - creates the original sheet before subtraction
1. Scrap operation (select sheet and device) - creates scrap material.  

  This gives you scrap you can remove from above, below, and both
1. Support Design (laser, device) - bridges gap between support and gap
1. Merge final device, scrap, and support to get cut files
1. Cut line is your release cut, use cut area to check --> subtract from sheet
1. Identify bodies helps you check connectivity  

Export
------
1. Export svg --> 1 drawing per layer (open in inkscape)
1. Export svg --> final cut (get 5 copies)


