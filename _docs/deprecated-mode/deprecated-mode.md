---
title: Deprecated Mode
---
What is deprecated mode?
=======

Deprecated mode allows older popupCAD design files to load.  It tells the program to load libraries which have since been replaced by newer ones.  In most cases, files containing deprecated material will get fully upgraded the next time you save.  Once files are upgraded, deprecated mode is no longer necessary(nor desirable).

How do I enable it? (Windows Installer)
--------------------------------------

1. In the start menu, find the popupCAD icon  
1. Right click it and select "properties". [example](deprecated1.png) 
1. Where you see the [file path](deprecated2.png),add a space and --deprecated [after the quotes](deprecated3.png) and select Ok.

This will enable deprecated functionality to work.

How do I enable it? (source)
---------------------------
From the command line, when you call popupcad, add the --deprecated option to the run arguments:

{% highlight bash %}
python popupcad.py --deprecated
{% endhighlight %}