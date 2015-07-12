---
cad_file: fish.cad
category: Parts.Legs.2DOFLegs
description: This is a leg design, which is meant to be attached to the body of a
  robot.  It is a 2-dof mechanism, so requires inputs from two motors.  Operation
  10 and 12 include the necessary cut files for creating this two-laminate device.
operations:
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: PlacementOp
  outputs: []
  png_image_file: 00_00.png
  svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hinges\fish\00_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: Sketch Operation
  outputs: []
  png_image_file: 01_00.png
  svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hinges\fish\01_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: Sketch Operation
  outputs: []
  png_image_file: 02_00.png
  svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hinges\fish\02_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: PlacementOp
  outputs: []
  png_image_file: 03_00.png
  svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hinges\fish\03_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: Laminate Op
  outputs: []
  png_image_file: 04_00.png
  svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hinges\fish\04_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: Laminate Op
  outputs: []
  png_image_file: 05_00.png
  svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hinges\fish\05_00.svg
png_image_file: 05_00.png
svg_image_file: C:\Users\danaukes\popupCAD_files\designs\hinges\fish\05_00.svg
tags: parts fish animals birds snakes rabbits
title: fish.cad

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
