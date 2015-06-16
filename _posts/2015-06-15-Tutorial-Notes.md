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

Jack's notes
===============

Popup CAD Tutorial – 6/15/15 Notes
How to Download:
Go to popupcad.org and install 64-bit download.
How to convert from Solidworks to Popup CAD:
1). Go to Solidworks
2). Make a source part that defines all the folds
3). Define centerlines for folds
4). Extrude surface from sketch
5). Turn original sketch back on
6). Create new sketch on plane and convert entities to convert the centerline cut from the previous sketch into a solid line on the new sketch
	1). Pick a cut that goes from one edge of the surface to another edge of the surface
	Note: cuts cannot cross over each other
7). Use split line to select all the faces and divide the surface up
8). Turn surface body into multiple surface bodies by using offset surface on each face
	Shortcut: Hit enter to reapply previous function
9). Thicken each surface body 
	Note: Uncheck merge result box
	Shortcut: Alt-R
10). Go to Solid Bodies folder and right click to save bodies
11). New assembly will be created and unfix each part
12). Check for Kinematics by mating each part
Note: mating between vertices at mid-plane of each face for more accurate kinematic representation
13). Re-flatten part by adding constraints
14). Make drawing and drag top view
15). Go to Macro
16). Select drawing and run the macro
17). Open up .yaml file in popupCAD
Popup CAD

1). New Sketch -> import .yaml file
	Note: Ctrl-F is fit for sketch
Define Body
Autobridge: Triangulates polygon
Get Joints: Generates joints inside of polygon
You need a body sketch, joint sketch
Joint sketch applies to carbon and pyralux layers
Dilate/Erode operation to turn a line into an area
Laminate Operation: Operation Type -> Difference

Body
Joints
Buffer
Laminate Operation -> Body – Buffer difference
Placement Operation -> Load your own hinge file -> Sub-Design operation final Hinge ->joints sketch
Laminate Operation -> Union Placement Operation + Laminate Operation
Intersection between Placement Operation and Body to trim
Rename Everything:
Body
Joints
Buffered joint
Body minus joint
Placed hinges
Trimmed hinges
Merged Device
Hole
Final device
Scrap Function -> Sheet -> Select Final Device -> Add a few mm around to buffer
Scrap Function -> Scrap Function to figure out material needed to hold onto piece before final release cut
Union between Scrap and Final Device
Support -> select final device and supply same support gap as scrap -> material that bridges everything together
Merge Scrap, Support, Cut Line
To simulate: Laminate difference between supported device and cut area -> Identify Bodies
Final check: Laminate operation Symmetric Difference between final device from Body 1
Select final Supported device design + cut line to export
Remove sheet with cut line
Exports in mm
