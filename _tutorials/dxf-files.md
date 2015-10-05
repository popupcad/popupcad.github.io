---
title: DXF Files
---
DXF Import
==========

We now support the .dxf file format for creating sketches in other programs and importing them into the sketcher.  Keep in mind that not all programs export what you think they are exporting.  Solidworks, for example, does not export closed polygons to represent the face of a body; instead they output line segments, which popupCAD does not attempt to "heal" back into a polygon.  Other programs, like DraftSight, AutoCAD, and Inkscape, are all capable of reading and writing to popupCAD-compatible files.

To Import:
----------

1. Load popupCAD
1. Create a sketch operation or open up project->sketches in the menu.
1. Create a new sketch
1. When the sketch editor opens, click open
1. Select .dxf as the file type, navigate to your file, and load it

popupCAD does not support every type of dxf.  Specifically, it currently supports these following ASCII-only formats:

* AC1009(AutoCAD R12)
* AC1015(AutoCAD R2000)
* AC1018(AutoCAD R2004)
* AC1021(AutoCAD R2007)
* AC1024(AutoCAD R2010)
* AC1027(AutoCAD R2013)

Export
-------
  
Additionally, you can now also export your device design to a .dxf file.  From the file menu, select "export to dxf".  The file will be saved to your (user directory)/popupCAD_files/export directory.  Each layer of your device will be saved to its own layer.


