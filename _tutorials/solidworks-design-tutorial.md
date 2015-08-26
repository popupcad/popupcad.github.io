---
title: Solidworks Design Tutorial
published: false
---

Solidworks is an attractive way to model popup devices because you can interact with the three-dimensional kinematics of your popup device.  However, Solidworks is not good at everything.  First, it cannot create your cut-files for you automatically.  Solidworks knows nothing about *how* you're going to make your device, out of how many layers, and with what manufacturing processes. Second, Solidworks is such an expansive tool, and can be used in so many different ways that the most straightforward way to design a popup device is not very obvious.  

So, to help users with these issues, we have outlined a workflow which can be used to rapidly create a popup device whose kinematics you can visualise and interact with quickly.  Second, we also outline the steps to export those basic multilayer kinematics to a popupCAD file so that the manufacturing specifics can be done in an environment with built-in manufacturing knowledge.

Solidworks Steps
----------------

1. Create a new part file
1. Select a reference plane(top, for example) and then create a new sketch

  (or create a new sketch and select any reference plane)
  
1. Sketch the lines which define your robot:

  The outline of your robot should be a drawn out of solid lines.  Any internal hinges should be drawn as construction lines, or made into construction lines once drawn.  If you are making a robot which consists of multiple sub-laminates, you should create one of these sketches per sublaminate.
  
1. Next, for each sub-laminate sketch that you have created, you can should create a planar surface.  Go to  insert->surfaces->planar surface.  Select each sketch.  This should create a surface whose outline matches the closed shape of solid lines you drew in your sketch.
1. For each surface you just created, you want to split that surface along all the lines representing joints from your original sketch.

  * display the original sketch by clicking on the eyglasses icon under the surface->sketch in the left project pane.
  * create a new sketch on the same reference plane(such as the top plane), select one or more joint lines, and in the sketch tools, 
1. Use curve split line to separate faces

  Note: have to do 5+6 multiple times -- need continuous lines from edge to edge that doesn't intersect any other split line. Make sure to select all bodies.
1. Use offset surface function to create independent surfaces from faces of original body

  Note: Hit enter to repeat operations
1. Use thicken feature to thicken each feature (deselect merge)
1. Save file!!
1. Solid bodies folder --> auto assign names and create an assembly from different thickened rigid bodies. Save bodies in part to separate files and import them into assembly
1. Unfix all but 1 part
1. Create mates to define kinematics (either top or midplane --> more realistic)

  1. edge constraint to define axis
  1. point constraint to define translation
1. Re-flatten before export --> coincident faces between neighboring bodies (fully define robot)
1. Create drawing --> drag in top view (don't include sheet format)
1. Use macro (assembly of parts, flatten, create and select view). Goes from solidworks --> yaml --> popupcad

In popupCAD
------------
### Device Design
1. Create new sketch --> import file (ignore dialog boxes)

  can also do manually --> define a sketch op
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

### Manufacturing and support layers
1. Sheet operation - creates the original sheet before subtraction
1. Scrap operation (select sheet and device) - creates scrap material.  

  This gives you scrap you can remove from above, below, and both
1. Support Design (laser, device) - bridges gap between support and gap
1. Merge final device, scrap, and support to get cut files
1. Cut line is your release cut, use cut area to check --> subtract from sheet
1. Identify bodies helps you check connectivity  

### Export
1. Export svg --> I drawing per layer (open in inkscape)
1. Export svg --> final cut (get 5 copies)

Jack's notes
===============

How to Download:
Go to popupcad.org and install 64-bit download.
How to convert from Solidworks to Popup CAD:

Solidworks
------------
1. Make a source part that defines all the folds
1. Define centerlines for folds
1. Extrude surface from sketch
1. Turn original sketch back on
1. Create new sketch on plane and convert entities to convert the centerline cut from the previous sketch into a solid line on the new sketch

  1. Pick a cut that goes from one edge of the surface to another edge of the surface

	Note: cuts cannot cross over each other
1. Use split line to select all the faces and divide the surface up
1. Turn surface body into multiple surface bodies by using offset surface on each face

  Shortcut: Hit enter to reapply previous function
1. Thicken each surface body
	Note: Uncheck merge result box
	Shortcut: Alt-R
1. Go to Solid Bodies folder and right click to save bodies
1. New assembly will be created and unfix each part
1. Check for Kinematics by mating each part

  Note: mating between vertices at mid-plane of each face for more accurate kinematic representation
1. Re-flatten part by adding constraints
1. Make drawing and drag top view
1. Go to Macro
1. Select drawing and run the macro
1. Open up .yaml file in popupCAD

Popup CAD
------------
1. New Sketch -> import .yaml file
	Note: Ctrl-F is fit for sketch
1. Define Body
1. Autobridge: Triangulates polygon
1. Get Joints: Generates joints inside of polygon
1. You need a body sketch, joint sketch
1. Joint sketch applies to carbon and pyralux layers
1. Dilate/Erode operation to turn a line into an area
1. Laminate Operation: Operation Type -> Difference

1. Body
1. Joints
1. Buffer
1. Laminate Operation -> Body – Buffer difference
1. Placement Operation -> Load your own hinge file -> Sub-Design operation final Hinge ->joints sketch
1. Laminate Operation -> Union Placement Operation + Laminate Operation
1. Intersection between Placement Operation and Body to trim
1. Rename Everything:
1. Body
1. Joints
1. Buffered joint
1. Body minus joint
1. Placed hinges
1. Trimmed hinges
1. Merged Device
1. Hole
1. Final device
1. Scrap Function -> Sheet -> Select Final Device -> Add a few mm around to buffer
1. Scrap Function -> Scrap Function to figure out material needed to hold onto piece before final release cut
1. Union between Scrap and Final Device
1. Support -> select final device and supply same support gap as scrap -> material that bridges everything together
1. Merge Scrap, Support, Cut Line
1. To simulate: Laminate difference between supported device and cut area -> Identify Bodies
1. Final check: Laminate operation Symmetric Difference between final device from Body 1
1. Select final Supported device design + cut line to export
1. Remove sheet with cut line
1. Exports in mm
