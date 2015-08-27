---
title: popupCAD Design Tutorial
---

This tutorial explains how to create a device design.  This process can be used with exported .yaml files which come from a solidworks design process, outlined in the [Solidworks Design Tutorial]({{site.url}}/tutorials/solidworks-design-tutorial)

Create Sketches
---------------

At a minimum you will probably need three sketches per sub-laminate.  You will need one sketch to define where material exists.  Let's call this the "body" sketch.  You'll also need one or more sketches to define where joints go, called your "joints" sketch.  Finally, you may also need to define places where your body gets cut or separated.  We'll call this your "gaps" sketch.  Each of these sketches will be used in different ways.

### Body Sketch

Draw the outline of the polygon(s) which define the body material of your device.  It is unnecessary to split your device into the individual bodies which are separated by joints; this will be done later.  You may have more than one closed polygon to define your mechanism, as connections on other layers may connect everything together.  But for a single-sublaminate mechanism, you should probably have one polygon to define your body.

#### Steps:
* In the main editor, create a sketch operation
* In the sketch operation window, create a new sketch.  The sketch window will pop open.
* Create your body sketch
  * Draw polygons, circles, or squares which will define where your body is.

    or, if importing from solidworks:

  * select file->import and select the .yaml file from your exported Solidworks design.  There are several options which will pop up, which gives you control over how to import the geometries.  You may wish to dilate/erode, scale, or simplify the imported geometries.  
    * use the dilate/erode value to grow or shrink the boundary of each geometry.  this can be used to merge neighboring polygons or to create gaps between them
    * use the scale value to scale geometries.  this can be useful if you want to change your unit system, for example.
    * use the simplify value to reduce the number of points in your imported geometry.  neighboring points which are within a certain tolerance will be eliminated if larger than the value you provide.
* Once finished, hit "ok" and the sketch window will close.  You will be back at the sketch operation dialog.
* Rename your sketch using the F2 button after selecting it.  Call it something like "Sublaminate 1 Body Sketch" or just "Body Sketch" if you're designing a single-sublaminate device.
* Select the layer or layers you wish to apply the body sketch to.  In most cases, select all the layers of the sublaminate this material is going on.
* Select "ok" to create this sketch operation.

You will need to repeat this process for any other sublaminates in your design

### Joint Sketches

To create articulated motion in your laminate device, portions of the rigid layers of your composite must be removed to allow neighboring rigid links to rotate with respect to one another like a hinge.  Depending on what your layers consist of, the removal geometry may be quite different and may be distributed across differing layers.  You may use one hinge type or multiple, depending on the tolerances, ranges of motion, or properties you wish each joint to exhibit.

To facilitate reuse of one or more hinge designs, you can create a hinge sketch which allows you to copy and reposition the same hinge geometry over and over.  In general, you will need a separate hinge sketch per hinge type, and per sublaminate.  So therefore, for example, if you want two different 5-layer(1-sublaminate) hinges to be placed in a 11-layer(2-sublaminate) design, you will probably need four sketches to place both hinges onto both sublaminate layers.

Joint sketches generally just consist of sets of lines which can be used in conjunction with place or transform operations to copy, scale, and rotate reusable hinge geometries to the joint locations you desire.

#### Steps:

* Create a new transform or place operation.
* load the hinge design file you wish to reuse.
* select the specific operation within the loaded design that you wish to place.  This geometry may be additive -- that is, geometry which gets added to neighboring bodies -- or removal geometry -- geometry which you will "subtract" the hinge material from your body geometry.  Typically, removal geometry requires fewer steps, so let's assume you are using this type.
* if using the transform operation, select a locate line from the subdesign.  if one does not exist you must create it.  Typically, a locate sketch is a sketch consisting of a single line which will be translated and rotated by your place sketch.
* Create a placement sketch.  In the placement window, select new to open the sketcher.
  * Draw your sketch.  Draw one or more lines which define how your geometry gets placed.  You can draw this sketch by hand and add constraints to accurately dimension the location of each line.

    or

  * if importing from a solidworks-exported .yaml file, import the same body file you imported before, and select the "get joints" feature.  Any adjacent edges of polygons will be converted into lines.  Delete any lines which you have previously already used in other joint sketches or which represent gaps.
* select any scaling options you may want to apply.  In general, you will want to stretch your hinge geometry across the length of your placement line(this is the x-direction), but may want to retain a common hinge width in the y-direction.  In that case, select a custom y scaling factor.  A value of 1 will use the imported hinge's original y-scaling.
* Select any layer options.  Shift the geometry up or down to apply it to a different sublaminate.
* use a lamiante operation to remove or add this placed geometry from/to your body geometry.

You will need to repeat this process for each hinge design, shift values, etc.

### Gap Sketch

A Gap sketch is used to ensure that neighboring body geometries which must remain separated are actually not touching.  Generally, you should either draw or import a sketch of lines which represents those gaps.  If importing from a solidworks design, use the get joints feature to turn polygons into lines and then delete all but your gap lines.  Next, use the dilate operation to grow the 1-dimensional line into a 2-dimensional area so that you can remove that area from your body.  Finally, use a laminate operation to subtract this gap from the body geometry.

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


