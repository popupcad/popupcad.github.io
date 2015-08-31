---
cad_file: printapede retreat leg2.cad
category: Parts.Legs.2DOFLegs
description: This is a leg design, which is meant to be attached to the body of a
  robot.  It is a 2-dof mechanism, so requires inputs from two motors.  Operation
  10 and 12 include the necessary cut files for creating this two-laminate device.
operations:
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: bottom body(SketchOp)
  outputs: []
  png_image_file: 00_00.png
  svg_image_file: 00_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: top body(SketchOp)
  outputs: []
  png_image_file: 01_00.png
  svg_image_file: 01_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: body(LaminateOp)
  outputs: []
  png_image_file: 02_00.png
  svg_image_file: 02_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: Cleanup
  outputs: []
  png_image_file: 03_00.png
  svg_image_file: 03_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: bottom joints(SketchOp)
  outputs: []
  png_image_file: 04_00.png
  svg_image_file: 04_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: top joints(SketchOp)
  outputs: []
  png_image_file: 05_00.png
  svg_image_file: 05_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: top gap(SketchOp)
  outputs: []
  png_image_file: 06_00.png
  svg_image_file: 06_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: top gap(Dilate/Erode)
  outputs: []
  png_image_file: 07_00.png
  svg_image_file: 07_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: bottom gap(SketchOp)
  outputs: []
  png_image_file: 08_00.png
  svg_image_file: 08_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: bottom gap(Dilate/Erode)
  outputs: []
  png_image_file: 09_00.png
  svg_image_file: 09_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: bottom holes(SketchOp)
  outputs: []
  png_image_file: 10_00.png
  svg_image_file: 10_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: LaminateOp
  outputs: []
  png_image_file: 11_00.png
  svg_image_file: 11_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: joint gaps(Dilate/Erode)
  outputs: []
  png_image_file: 12_00.png
  svg_image_file: 12_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: body minus gaps(LaminateOp)
  outputs: []
  png_image_file: 13_00.png
  svg_image_file: 13_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: body minus joint gaps(LaminateOp)
  outputs: []
  png_image_file: 14_00.png
  svg_image_file: 14_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: bottom joints(PlaceOp)
  outputs: []
  png_image_file: 15_00.png
  svg_image_file: 15_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: bottom joint mod(PlaceOp)
  outputs: []
  png_image_file: 16_00.png
  svg_image_file: 16_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: top joints(PlaceOp)
  outputs: []
  png_image_file: 17_00.png
  svg_image_file: 17_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: all joints(LaminateOp)
  outputs: []
  png_image_file: 18_00.png
  svg_image_file: 18_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: cleaned all joints(LaminateOp)
  outputs: []
  png_image_file: 19_00.png
  svg_image_file: 19_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: LaminateOp
  outputs: []
  png_image_file: 20_00.png
  svg_image_file: 20_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: LayerOp
  outputs: []
  png_image_file: 21_00.png
  svg_image_file: 21_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: SketchOp
  outputs: []
  png_image_file: 22_00.png
  svg_image_file: 22_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: LaminateOp
  outputs: []
  png_image_file: 23_00.png
  svg_image_file: 23_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: Cleanup
  outputs: []
  png_image_file: 24_00.png
  svg_image_file: 24_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: Identify Bodies
  outputs:
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 0
    png_image_file: 25_01.png
    svg_image_file: 25_01.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 1
    png_image_file: 25_02.png
    svg_image_file: 25_02.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 2
    png_image_file: 25_03.png
    svg_image_file: 25_03.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 3
    png_image_file: 25_04.png
    svg_image_file: 25_04.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 4
    png_image_file: 25_05.png
    svg_image_file: 25_05.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 5
    png_image_file: 25_06.png
    svg_image_file: 25_06.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 6
    png_image_file: 25_07.png
    svg_image_file: 25_07.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 7
    png_image_file: 25_08.png
    svg_image_file: 25_08.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 8
    png_image_file: 25_09.png
    svg_image_file: 25_09.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 9
    png_image_file: 25_10.png
    svg_image_file: 25_10.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 10
    png_image_file: 25_11.png
    svg_image_file: 25_11.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 11
    png_image_file: 25_12.png
    svg_image_file: 25_12.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 12
    png_image_file: 25_13.png
    svg_image_file: 25_13.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 13
    png_image_file: 25_14.png
    svg_image_file: 25_14.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 14
    png_image_file: 25_15.png
    svg_image_file: 25_15.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 15
    png_image_file: 25_16.png
    svg_image_file: 25_16.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 16
    png_image_file: 25_17.png
    svg_image_file: 25_17.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 17
    png_image_file: 25_18.png
    svg_image_file: 25_18.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 18
    png_image_file: 25_19.png
    svg_image_file: 25_19.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 19
    png_image_file: 25_20.png
    svg_image_file: 25_20.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 20
    png_image_file: 25_21.png
    svg_image_file: 25_21.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 21
    png_image_file: 25_22.png
    svg_image_file: 25_22.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 22
    png_image_file: 25_23.png
    svg_image_file: 25_23.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 23
    png_image_file: 25_24.png
    svg_image_file: 25_24.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 24
    png_image_file: 25_25.png
    svg_image_file: 25_25.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 25
    png_image_file: 25_26.png
    svg_image_file: 25_26.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 26
    png_image_file: 25_27.png
    svg_image_file: 25_27.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 27
    png_image_file: 25_28.png
    svg_image_file: 25_28.svg
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    name: Body 28
    png_image_file: 25_29.png
    svg_image_file: 25_29.svg
  png_image_file: 25_00.png
  svg_image_file: 25_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: LaminateOp
  outputs: []
  png_image_file: 26_00.png
  svg_image_file: 26_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: Device(LaminateOp)
  outputs: []
  png_image_file: 27_00.png
  svg_image_file: 27_00.svg
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: This is a fake operation description.  I am not about to make a separate
    description for each op, but the description might be about this long.
  name: LocateOp
  outputs: []
  png_image_file: 28_00.png
  svg_image_file: 28_00.svg
png_image_file: 27_00.png
svg_image_file: 27_00.svg
tags: [devices,parts,legs,2dof_legs]
title: printapede retreat leg2.cad

---
