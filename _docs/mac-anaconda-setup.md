---
title: Mac Anaconda Setup
---

Download Anaconda
-----------------

* go to <https://store.continuum.io/cshop/anaconda/>
* enter your email address
* select the **64-bit python 3.5** download

Install popupcad dependencies
----------------------------

* paste these lines into the terminal.  This creates a new environment with all the pacages that popupCAD needs to run

{% highlight bash%}
yes | conda create -n popupcad_env python=3.5
source activate popupcad_env
yes | conda install numpy scipy matplotlib
yes | conda install shapely pyopengl sympy scipy pyyaml lxml
yes | pip install pyqtgraph pycollada ezdxf numpy-stl pypoly2tri
{% endhighlight %}

Download and Install popupCAD
-----------------------------

[use these instructions]({{site.baseurl}}/docs/mac-popupcad-download)

Run popupCAD
------------
First, activate your anaconda environment you created (you have to do this every time you open a terminal)
{% highlight bash%}
source activate popupcad_env
{% endhighlight %}

Next, navigate to your popupcad directory:
{% highlight bash%}
cd ~/popupcad
{% endhighlight %}

Finally, run popupcad
{% highlight bash%}
python popupcad.py
{% endhighlight %}

Optional Installs
-------------------

{% highlight bash%}
yes | conda install -c https://conda.binstar.org/pyzo cx_freeze
{% endhighlight %}

{% highlight bash%}
yes | conda install matplotlib
yes | conda remove pyqt qt
{% endhighlight %}

To remove your popupcad environment:
------------------------------------

{% highlight bash%}
conda-env remove -n popupcad_env
{% endhighlight %}
