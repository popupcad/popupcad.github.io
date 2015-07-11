---
cad_file: inner.cad
image_file: 00_00.png
name: inner.cad
operations:
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: ''
  image_file: 00_00.png
  name: body(Sketch Operation)
  outputs: []
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: ''
  image_file: 01_00.png
  name: joints(Sketch Operation)
  outputs: []
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: ''
  image_file: 02_00.png
  name: dilated joints(Buffer)
  outputs: []
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: ''
  image_file: 03_00.png
  name: Laminate Op
  outputs: []
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: ''
  image_file: 04_00.png
  name: PlacementOp
  outputs: []
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: ''
  image_file: 05_00.png
  name: trimmed hinges(Laminate Op)
  outputs: []
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: ''
  image_file: 06_00.png
  name: device(Laminate Op)
  outputs: []
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: ''
  image_file: 07_00.png
  name: Sheet
  outputs: []
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: ''
  image_file: 08_00.png
  name: Sketch Operation
  outputs: []
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: ''
  image_file: 09_00.png
  name: modified device(Laminate Op)
  outputs: []
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: ''
  image_file: 10_00.png
  name: Scrap Operation
  outputs:
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    image_file: 10_00.png
    name: removable_both
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    image_file: 10_01.png
    name: removable_up
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    image_file: 10_02.png
    name: removable_down
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: ''
  image_file: 11_00.png
  name: Support Candidate
  outputs:
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    image_file: 11_00.png
    name: support
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    image_file: 11_01.png
    name: cut line
  - cut_files: [cut-dummy1.svg, cut-dummy2.svg]
    description: ''
    image_file: 11_02.png
    name: cut area
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: ''
  image_file: 12_00.png
  name: supported device(Laminate Op)
  outputs: []
- cut_files: [cut-dummy1.svg, cut-dummy2.svg]
  description: ''
  image_file: 13_00.png
  name: device cut out(Laminate Op)
  outputs: []
title: inner.cad

---

Hello, this is a test

my relative directory is {{collection.relative_directory}}

My collection is {{page.collection}}

I have this many files {{page.files}}

My name is {{page.name}}

My title is {{page.title}}

[<img src="{{page.image_file}}" />]({{page.cad_file}})

{% for operation in page.operations %}

* [<img src="{{operation.image_file}}" height = "75px" />]({{operation.image_file}}) **{{ operation.name }}** {{operation.description}} 
{% for file in operation.cut_files%}
[{{file}}]({{file}}),
{% endfor %}

{% for output in operation.outputs %}
  * [<img src="{{output.image_file}}" height = "50px" />]({{output.image_file}}) **{{output.name}}** {{output.description}}
{% for file in output.cut_files%}
[{{file}}]({{file}}),
{% endfor %}


{% endfor %}
{% endfor %}
