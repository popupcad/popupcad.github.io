---
title: popupCAD Sketcher
---

Sketcher
========

![image]({{site.url}}/assets/images/overview_images/sketcher_screenshot.png)

The sketcher is the second most important window in popupCAD, because it
allows users to generate original geometry directly in the popupCAD
environment. The sketcher has many capabilities, mostly centered around
creating and defining geometries. The sketcher is usually accessed
through operations which require the user to create geometry, such as
the sketch operation, locate operation, and place operation. It has a
variety of sub-windows which allow the user easy access to underlying
data, but the most important sub-window is the graphical sketching
window, located in the center of the screen. In this window, the user is
able to create a variety of geometries, including circles, squares,
polygons, lines, and polylines. Creating new geometry begins by
selecting the geometry type from the toolbar above. Clicking in the
drawing window then adds a vertex under the mouse pointer, defining the
first point in the geometry. Further clicks of the mouse define
subsequent points, and double-clicking the mouse ends the definition
process. Some geometries only allow adding two points total, such as
lines and circles. Editing of geometries is allowed; by double-clicking
on an object the vertices become visible, allowing them to be dragged to
new positions. Clicking inside the polygon while in edit mode with the
ctrl key pressed adds a new vertex, and clicking on a vertex with the
ctrl+shift keys pressed deletes that vertex.

## Constraints

A variety of constraints can be added to points or line segments,
allowing them to be further defined. Constraint mode is enabled by
selecting "constraints on" which toggles all active vertices and line
segments. Clicking on one or more points or line segments with the ctrl
key pressed allows the user to select multiple objects. By clicking on
the desired constraint, the constraint becomes added to the constraint
list on the left. Some constraints are value constraints, such as the
"distance", point/line, "distance x" and "distance y" constraints. If
selected, a dialog box opens allowing the user to specify the desired
constraint value. Double clicking on the constraint in the constraint
list also enables the user to edit the value later. Constraints are not
continually evaluated, and if the user drags or moves an object or
vertex, they must refresh the constraints manually. This is accomplished
by the "refresh constraints" button, which reevaluates all constraints
which have been added to the sketch. Sketches can operate on previous
geometry in a variety of ways. They can be combined in the editor
through a variety of laminate and layer operations, or they may operate
directly on previous operations in the sketcher itself. This is made
possible by selecting a previous parent in the left dropbox, and by
selecting the type of operation the sketcher is performing. For example,
in the example below, a user has chosen to merge the previous geometry
(named Body(placement op), and colored reddish) with a new polygon they
have drawn(in yellow). By selecting "union" the two sets of polygons
will merge as seen below. The "union", "intersect", and "difference"
operations are all available, each producing different output geometry.
The layer window seen in the sketcher does not serve to alter which
layers are visible in the sketch. In this case, it is used to designate
how sketch geometry is copied to each layer in the laminate. If all
layers are selected, for example, they each get an instance of the
resulting sketch operation in each layer. If only one is selected, the
resulting operation will only be applied to the one layer, giving the
user a high level of control in combining geometric operations.

![image]({{site.url}}/assets/images/overview_images/sketch_operation.png)

![image]({{site.url}}/assets/images/overview_images/sketch_op_result.png)