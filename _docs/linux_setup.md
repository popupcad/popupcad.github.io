---
title: Linux Setup
---

PopupCAD can run in python 2 or 3, but we recommend using python3.  If you want to use python 2, there are only a few minor differences in the instructions

1. Install/Update Linux packages:

{% highlight bash linenos %}
sudo apt-get update
sudo apt-get install dkms git synaptic libgeos-dev gfortran cmake python-qt4-gl phonon-backend-gstreamer
{% endhighlight %}

1.  optional: upgrade your system:

{% highlight bash linenos %}
sudo apt-get upgrade
{% endhighlight %}

1. Install pip packages:

{% highlight bash linenos %}
sudo apt-get install python3-pip spyder3 python3-pyside python3-shapely python3-opengl python3-yaml python3-scipy python3-matplotlib python3-setuptools cython3 python3-dev python3-sphinx
sudo pip3 install pyqtgraph shapely sympy
{% endhighlight %}

1.  optional: set flag for systems without hardware video
    acceleration(for example if using virtualbox):

{% highlight bash linenos %}
echo "export LIBGL_ALWAYS_INDIRECT=1" >> ~/.bashrc
{% endhighlight %}

1.  Setup Git(if you haven't already), using your own name and email:

{% highlight bash linenos %}
git config --global user.name "LastName, Firstname"
git config --global user.email "email@address.com"
{% endhighlight %}

1.  Check out the popupCAD git repository

{% highlight bash linenos %}
git clone {{site.popupcad_source_path}}.git
cd ~/popupcad/
git checkout master
git pull
{% endhighlight %}

1.  add popupcad directory to PYTHONPATH:

{% highlight bash linenos %}
echo "export PYTHONPATH=\$PYTHONPATH:~/popupcad" >> ~/.bashrc
{% endhighlight %}

1.  Run popupCAD

      From the terminal, navigate to the popupcad directory and type:

{% highlight bash linenos %}
python popupcad.py
{% endhighlight %}

      Or run using spyder a wonderful GUI for editing and debugging python programs. Open spyder in the program menu or by typing from the terminal:

{% highlight bash linenos %}
spyder
{% endhighlight %}

      or straight from the command line:

{% highlight bash linenos %}
spyder3
{% endhighlight %}

      - from there you can navigate to the popupcad directory and open popupcad.py.
      - hit f5 to run.

<!--
Option: python2 install:

{% highlight bash linenos %}
sudo apt-get install python-pip spyder python-pyside python-shapely python-sympy python-opengl python-yaml python-scipy python-matplotlib python-setuptools cython python-dev python-sphinx
sudo pip install pyqtgraph shapely
{% endhighlight %}
-->      