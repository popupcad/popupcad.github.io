---
title: popupCAD Editor
---

Editor
======

![image]({{site.url}}/assets/images/overview_images/editor_screenshot.png)

The editor is the center of interaction for a popupCAD design. The
editor provides several functions:

## View and Edit Operations

![image]({{site.url}}/assets/images/overview_images/operation_list.png)

The editor provides access to the operations list, a listing of all
operations applied in the design. Selecting an item in the list shows
the output geometry associated with the operation in the 2d and 3d view
to the right. Double clicking on an item in the list gives users the
ability to edit that particular operation using its edit dialog. The
delete button removes the operation and its associated geometry from the
design.

## View Layers

![image]({{site.url}}/assets/images/overview_images/layer_list.png)

The editor's layer list gives users the ability to turn on or off layers
in the 2d and 3d view. This is useful for viewing the geometry of a
single layer for error-proofing, or for understanding how the materials
on multiple layers interact. Clicking a layer shows or hides it in the
2d and 3d views.

## 2D View

![image]({{site.url}}/assets/images/overview_images/2d_view.png)

The 2d view of a design shows the currently-selected operation in the
operation list, according to the selected layers in the layer list. This
is simply a view of the geometry, and interaction is generally
restricted in the editor.

## 3D View

![image]({{site.url}}/assets/images/overview_images/3d_view.png)

Like the 2d view, the 3d view allows users to view the geometric output
of a particular operation. The 3d view gives users the ability to pan
and rotate the view to enable a closer inspection of each layer's
geometry. In addition, a slider bar to the right allows users to explode
the layer view, allowing each layer to be seen on its own.

## File management

Common file operations, such as "open", "save", and "save as" allow a
user to load or save design files. Design files, with the extension
".cad", are saved as human-readable YAML files. The structure of a
design file is discussed in a following section

## Project Management

![image]({{site.url}}/assets/images/overview_images/project_management.png)

The editor also allows users to interact with project-level settings.

![image]({{site.url}}/assets/images/overview_images/edit_layer_order.png)

The "edit layer order" feature, for example, allows users to insert or
remove layers from the listing of laminates in the design. This affects
which layers are available for geometric operations across all
operations in the design, and should match the user's anticipated
requirements for the number of layers in the physical device. This
setting should be changed at the beginning of the design process in
order to allow individual operations to use the correct layers, in the
right order.

![image]({{site.url}}/assets/images/overview_images/edit_layer_properties.png)

The "edit laminate values" option allows users to edit the attributes of
each layer, such as the color and thickness of the constituent layers.
Some materials, depending on the material type, may have attributes such
as stiffness, poisson's ratio, etc, which can be displayed for that
particular material type. Currently, only color and thickness values are
available.

## Ops Menu

![image]({{site.url}}/assets/images/overview_images/ops_menu.png)

The Ops Menu, also visible as a toolbar, is the main mode of creating
designs in the editor. It lists a variety of operations which are
available to the user. These operations are typically geometric and
allow the user to define or combine one or more geometries together
across or between layers. When selected, each operation typically spawns
a dialog window specific to that class of operation, allowing the user
to specify certain details of the operation. Operations are described in
detail in subsequent sections. There are several different types of
operation available. The elementary operations include "Dilate/Erode",
"Laminate Op", "Layer Op", and "Shift/Flip". These operations perform
the basic geometric and layer operations required by more complicated
operations, but are also useful to users by themselves. PopupCAD is
intended to be an object-oriented approach to creating laminate devices.
Therefore it is important to provide users with the ability to reuse
geometry from design librarires in a variety of ways. The second
grouping of operations, "locate op" and "place op", allow users to
specify the geometry important for the reuse of popupCAD designs in
other designs. Because geometry from one design can be embedded in
another, the "locate op" allows users to create a location reference
line to all the design's geometry. When the user desires to reuse the
design, the "place op" gives the user the ability to draw one or more
lines, signifying the placement of the referenced design in the new
design. The relative length and scale of the locate and placement lines,
along with the option to place, stretch, or scale the referenced
geometry, gives users full control over the way in which referenced
geometry gets transformed in the new design.

![image]({{site.url}}/assets/images/overview_images/ops_toolbar.png)

## Other Menus

![image]({{site.url}}/assets/images/overview_images/view_operations.png)

Other menus exist in popupCAD, but are sparsely populated. The
manufacturability window gives users access to a graphical view of the
operation list, which allows users to view how various operations are
related to each other

![image]({{site.url}}/assets/images/overview_images/operation_network.png)

The Scripts menu populates itself with all scripts located in the
popupcad/scripts/ subdirectory. It functions as an easy way for users to
create their own scripts and have it be accessible to them through the
gui without delving too deep into the popupCAD codebase. Only one
example script is provided as a template for future plugin development .
Finally, the window menu allows users to show or hide various
sub-windows in the editor.
