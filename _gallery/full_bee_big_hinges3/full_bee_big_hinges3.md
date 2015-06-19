---
cad_file: asdf.cad
image_file: 06_00.png
name: full bee big hinges3.cad
operations:
- cut_file: cut-dummy.svg
  description: ''
  image_file: 00_00.png
  name: PlacementOp
  outputs: []
- cut_file: cut-dummy.svg
  description: ''
  image_file: 01_00.png
  name: PlacementOp
  outputs: []
- cut_file: cut-dummy.svg
  description: ''
  image_file: 02_00.png
  name: Laminate Op
  outputs: []
- cut_file: cut-dummy.svg
  description: ''
  image_file: 03_00.png
  name: Layer Op
  outputs: []
- cut_file: cut-dummy.svg
  description: ''
  image_file: 04_00.png
  name: Identify Bodies
  outputs:
  - {cut_file: cut-dummy.svg, description: '', image_file: 04_00.png, name: Body 0}
  - {cut_file: cut-dummy.svg, description: '', image_file: 04_01.png, name: Body 1}
  - {cut_file: cut-dummy.svg, description: '', image_file: 04_02.png, name: Body 2}
  - {cut_file: cut-dummy.svg, description: '', image_file: 04_03.png, name: Body 3}
  - {cut_file: cut-dummy.svg, description: '', image_file: 04_04.png, name: Body 4}
  - {cut_file: cut-dummy.svg, description: '', image_file: 04_05.png, name: Body 5}
  - {cut_file: cut-dummy.svg, description: '', image_file: 04_06.png, name: Body 6}
  - {cut_file: cut-dummy.svg, description: '', image_file: 04_07.png, name: Body 7}
  - {cut_file: cut-dummy.svg, description: '', image_file: 04_08.png, name: Body 8}
  - {cut_file: cut-dummy.svg, description: '', image_file: 04_09.png, name: Body 9}
  - {cut_file: cut-dummy.svg, description: '', image_file: 04_10.png, name: Body 10}
  - {cut_file: cut-dummy.svg, description: '', image_file: 04_11.png, name: Body 11}
  - {cut_file: cut-dummy.svg, description: '', image_file: 04_12.png, name: Body 12}
  - {cut_file: cut-dummy.svg, description: '', image_file: 04_13.png, name: Body 13}
  - {cut_file: cut-dummy.svg, description: '', image_file: 04_14.png, name: Body 14}
  - {cut_file: cut-dummy.svg, description: '', image_file: 04_15.png, name: Body 15}
  - {cut_file: cut-dummy.svg, description: '', image_file: 04_16.png, name: Body 16}
  - {cut_file: cut-dummy.svg, description: '', image_file: 04_17.png, name: Body 17}
  - {cut_file: cut-dummy.svg, description: '', image_file: 04_18.png, name: Body 18}
- cut_file: cut-dummy.svg
  description: ''
  image_file: 05_00.png
  name: Laminate Op
  outputs: []
- cut_file: cut-dummy.svg
  description: ''
  image_file: 06_00.png
  name: Ideal robot(Laminate Op)
  outputs: []
- cut_file: cut-dummy.svg
  description: ''
  image_file: 07_00.png
  name: Web
  outputs:
  - {cut_file: cut-dummy.svg, description: '', image_file: 07_00.png, name: Sheet}
  - {cut_file: cut-dummy.svg, description: '', image_file: 07_01.png, name: Inner
      Scrap}
  - {cut_file: cut-dummy.svg, description: '', image_file: 07_02.png, name: Removed
      Material}
- cut_file: cut-dummy.svg
  description: ''
  image_file: 08_00.png
  name: Support Candidate
  outputs:
  - {cut_file: cut-dummy.svg, description: '', image_file: 08_00.png, name: support}
  - {cut_file: cut-dummy.svg, description: '', image_file: 08_01.png, name: cut line}
  - {cut_file: cut-dummy.svg, description: '', image_file: 08_02.png, name: cut area}
- cut_file: cut-dummy.svg
  description: ''
  image_file: 09_00.png
  name: Laminate Op
  outputs: []
- cut_file: cut-dummy.svg
  description: ''
  image_file: 10_00.png
  name: Layer Op
  outputs: []
- cut_file: cut-dummy.svg
  description: ''
  image_file: 11_00.png
  name: Sketch Operation
  outputs: []
- cut_file: cut-dummy.svg
  description: ''
  image_file: 12_00.png
  name: PlacementOp
  outputs: []
- cut_file: cut-dummy.svg
  description: ''
  image_file: 13_00.png
  name: First Pass(Laminate Op)
  outputs: []
- cut_file: cut-dummy.svg
  description: ''
  image_file: 14_00.png
  name: BackTack(Laminate Op)
  outputs: []
- cut_file: cut-dummy.svg
  description: ''
  image_file: 15_00.png
  name: KeepOut
  outputs: []
- cut_file: cut-dummy.svg
  description: ''
  image_file: 16_00.png
  name: Second Pass(Laminate Op)
  outputs: []
title: full bee big hinges3.cad

---

Hello, this is a test

my relative directory is {{collection.relative_directory}}

My collection is {{page.collection}}

I have this many files {{page.files}}

My name is {{page.name}}

My title is {{page.title}}

[<img src="{{page.image_file}}" />]({{page.cad_file}})

{% for operation in page.operations %}

* [<img src="{{operation.image_file}}" height = "75px" />]({{operation.image_file}}) **{{ operation.name }}** {{operation.description}} [{{operation.cut_file}}]({{operation.cut_file}})

{% for output in operation.outputs %}
  * [<img src="{{output.image_file}}" height = "50px" />]({{output.image_file}}) **{{output.name}}** {{output.description}} [{{output.cut_file}}]({{output.cut_file}})

{% endfor %}
{% endfor %}
