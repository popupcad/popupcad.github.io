---
title: Creating A Script
---

Simple Script #1
================
This is useful for accessing a certain shape's points in a sketch.  Other example scripts can be found in the [source code]({{site.popupcad_source_path}}) in the "api_examples" directory

{% highlight python3 linenos %}
import sys
import popupcad
import PySide.QtGui as qg

app = qg.QApplication(sys.argv)

d = popupcad.filetypes.design.Design.open()
d.reprocessoperations()

all_sketches = [sketch for id,sketch in d.sketches.items()]
first_sketch = all_sketches[0]
first_shape = first_sketch.operationgeometry[0]
vertex_list = first_shape.exteriorpoints()
{% endhighlight %}
