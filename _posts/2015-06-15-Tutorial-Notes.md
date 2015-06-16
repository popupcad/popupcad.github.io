---
layout: post
title: Tutorial Notes
date: 2015-06-15
categories: 
---

Solidworks Design 
1) sketch outline of robot/dimension 
2) make folds and cuts out of construction lines
3) make a planar surface (under surfaces)
4) Convert entities onto surface (in new sketch)
5) Use curve split line to separate faces 
Note: have to do 5+6 multiple times -- need continuous lines from edge to edge that doesn't intersect any other split line. Make sure to select all bodies. 
6) Use offset surface function to create independent surfaces from faces of original body
Note: Hit enter to repeat operations 
7) Use thicken feature to thicken each feature (deselect merge) 
8) Save file!! 
9) Solid bodies folder --> auto assign names and create an assembly from different thickened rigid bodies. Save bodies in part to separate files and import them into assembly
10) Unfix all but 1 part 
11) Create mates to define kinematics (either top or midplane --> more realistic)
          a) edge constraint to define axis
           b) point constraint to define translation 
12) Re-flatten before export --> coincident faces between neighboring bodies (fully define robot) 
12) Create drawing --> drag in top view (don't include sheet format)
13) Use macro (assembly of parts, flatten, create and select view). Goes from solidworks --> yaml --> popupcad

In popupCAD

A) Device Design 
1) Create new sketch --> import file (ignore dialog boxes) 
          can also do manually --> define a sketch op
2) Can reuse old geometry --> autobridge triangulates 
2) Use get joints to find joints (copy of original sketch) --> flexures (sketch OP) 
3) Use get joints again to find gaps (copy of original sketch) --> empty spaces (sketch OP)
4) Buffer gaps to create areas to remove material (this is a dilate OP)  
5) Use placement operation to place joints (probably want to keep y-scaling at 1.0) 
6) Use laminate operations to remove material and to place joints 
7) Merge operation to combine hinge and holes from buffered joined sketch 
8) Clean up intersection of joints (use circles --> sketch and then remove)
9) Use intersection operation to trim placed joints 
10) Save file!! (this should be final device)

B) Manufacturing and support layers 
1) Sheet operation - creates the original sheet before subtraction
2) Scrap operation (select sheet and device) - creates scrap material 
        gives you scrap you can remove from above, below, and both 
3) Support Design (laser, device) - bridges gap between support and gap
4) Merge final device, scrap, and support to get cut files
5) Cut line is your release cut, use cut area to check --> subtract from sheet          
6) Identify bodies helps you check connectivity  

C) Export
1) Export svg --> I drawing per layer (open in inkscape)
2) Export svg --> final cut (get 5 copies)

