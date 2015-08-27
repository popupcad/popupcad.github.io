---
title: popupCAD Design Tutorial
---

This tutorial explains how to create a device design.  This process can be used with exported .yaml files which come from a solidworks design process, outlined in the [Solidworks Design Tutorial]({{site.url}}/tutorials/solidworks-design-tutorial)

Create Sketches
---------------

At a minimum you will probably need three sketches per sub-laminate.  You will need one sketch to define where material exists.  Let's call this the "body" sketch.  You'll also need a sketch to define where joints go, called your "joints" sketch.  Finally, you may also need to define places where your body gets cut or separated.  We'll call this your "gaps" sketch.  Each of these sketches will be used in different ways.

### Body Sketch

Draw the outline of the polygon(s) which define the body material of your device.  It is unnecessary to split your device into the individual bodies which are separated by joints; this will be done later.  You may have more than one closed polygon to define your mechanism, as connections on other layers may connect everything together.  But for a single-sublaminate mechanism, you should probably have one polygon to define your body.

#### Steps:
* In the main editor, create a sketch operation
* In the sketch operation window, create a new sketch.
* Select the new sketch and use the F2 to rename it.  Call it something like "Sublaminate 1 Body Sketch" or just "Body Sketch" if you're designing a single-sublaminate device.
* Edit the new sketch by selecting "edit" or by double-clicking on the sketch.
* Create your body sketch
  * Draw polygons, circles, or squares which will define where your body is.

    or, if importing from solidworks:

  * once you have opened the body sketch, select file->import and select the .yaml file from your exported Solidworks design.  There are several options which will pop up, which gives you control over how to import the geometries.  You may wish to dilate/erode, scale, or simplify the imported geometries.  
    * use the dilate/erode value to grow or shrink the boundary of each geometry.  this can be used to merge neighboring polygons or to create gaps between them
    * use the scale value to scale geometries.  this can be useful if you want to change your unit system, for example.
    * use the simplify value to reduce the number of points in your imported geometry.  neighboring points which are within a certain tolerance will be eliminated if larger than the value you provide.



### Joint Sketch

To create articulated motion in your laminate device, portions of the rigid layers of your composite must be removed to allow neighboring rigid links to rotate with respect to one another like a hinge.  Depending on what your layers consist of, the removal geometry may be quite different and may be distributed across differing layers.  You may use one hinge type or multiple, depending on the tolerances, ranges of motion, or properties you wish each joint to exhibit.

To facilitate reuse of one or more hinge designs, you can create a hinge sketch which allows you to position the same hinge geometry over and over.  In general, you will need a separate hinge sketch per hinge type, per sublaminate.  For example, if you want two different 5-layer(1-sublaminate) hinges to be placed in a 11-layer(2-sublaminate) design, you will probably need four sketches to place both hinges onto both sublaminate layers.

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


