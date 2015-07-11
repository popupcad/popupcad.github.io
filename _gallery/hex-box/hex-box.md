---
cad_file: hex box.cad
category: Parts.Legs.2DOFLegs
description: This is a leg design, which is meant to be attached to the body of a
  robot.  It is a 2-dof mechanism, so requires inputs from two motors.  Operation
  10 and 12 include the necessary cut files for creating this two-laminate device.
operations:
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: Sketch Operation
  outputs: []
  png_image_file: 00_00.png
  svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hex box\00_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: PlacementOp
  outputs: []
  png_image_file: 01_00.png
  svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hex box\01_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: Sketch Operation
  outputs: []
  png_image_file: 02_00.png
  svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hex box\02_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: Buffer
  outputs: []
  png_image_file: 03_00.png
  svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hex box\03_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: Laminate Op
  outputs: []
  png_image_file: 04_00.png
  svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hex box\04_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: Ideal Device(Laminate Op)
  outputs: []
  png_image_file: 05_00.png
  svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hex box\05_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: Web
  outputs:
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Sheet
    png_image_file: 06_00.png
    svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hex box\06_00.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Inner Scrap
    png_image_file: 06_01.png
    svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hex box\06_01.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Removed Material
    png_image_file: 06_02.png
    svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hex box\06_02.svg
  png_image_file: 06_00.png
  svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hex box\06_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: Support Candidate
  outputs:
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: support
    png_image_file: 07_00.png
    svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hex box\07_00.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: cut line
    png_image_file: 07_01.png
    svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hex box\07_01.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: cut area
    png_image_file: 07_02.png
    svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hex box\07_02.svg
  png_image_file: 07_00.png
  svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hex box\07_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: Laminate Op
  outputs: []
  png_image_file: 08_00.png
  svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hex box\08_00.svg
png_image_file: 05_00.png
svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hex box\05_00.svg
tags: parts,legs,2dof_robot_legs
title: hex box.cad

---

Hello, this is a test

my relative directory is {{collection.relative_directory}}

My collection is {{page.collection}}

I have this many files {{page.files}}

My name is {{page.name}}

My title is {{page.title}}

[<img src="{{page.png_image_file}}" />]({{page.cad_file}})

{% for operation in page.operations %}

* [<img src="{{operation.png_image_file}}" height = "75px" />]({{operation.png_image_file}}) **{{ operation.name }}** {{operation.description}} 
{% for file in operation.cut_files%}
[{{file}}]({{file}}),
{% endfor %}

{% for output in operation.outputs %}
  * [<img src="{{output.png_image_file}}" height = "50px" />]({{output.png_image_file}}) **{{output.name}}** {{output.description}}
{% for file in output.cut_files%}
[{{file}}]({{file}}),
{% endfor %}


{% endfor %}
{% endfor %}
