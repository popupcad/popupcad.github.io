---
title: Linux Setup
---

PopupCAD can run in python 2 or 3, but we recommend using python3.  If you want to use python 2, there are only a few minor differences in the instructions

Install/Update Linux packages:

{% highlight bash linenos %}
sudo apt-get update
sudo apt-get install dkms git synaptic libgeos-dev gfortran cmake python-qt4-gl phonon-backend-gstreamer
sudo apt-get install python3-pip spyder3 python3-pyside python3-shapely python3-opengl python3-yaml python3-scipy python3-setuptools cython3 python3-dev python3-sphinx
{% endhighlight %}

Optional: upgrade your system:

{% highlight bash %}
sudo apt-get upgrade
{% endhighlight %}

Install pip packages:

{% highlight bash %}
sudo pip3 install pyqtgraph sympy pycollada ezdxf numpy-stl
{% endhighlight %}

Optional: set flag for systems without hardware video acceleration(for example if using virtualbox):

{% highlight bash %}
echo "export LIBGL_ALWAYS_INDIRECT=1" >> ~/.bashrc
{% endhighlight %}

Setup Git(if you haven't already), using your own name and email:

{% highlight bash linenos %}
git config --global user.name "LastName, Firstname"
git config --global user.email "email@address.com"
{% endhighlight %}

Check out the popupCAD git repository

{% highlight bash %}
cd ~
git clone {{site.popupcad_source_path}}.git
cd ~/popupcad/
git checkout master
git pull
{% endhighlight %}

Add popupcad directory to PYTHONPATH:

{% highlight bash linenos%}
echo "export PYTHONPATH=\$PYTHONPATH:~/popupcad" >> ~/.bashrc
source ~/.bashrc
{% endhighlight %}

Run popupCAD

* From the terminal, navigate to the popupcad directory and type:

{% highlight bash %}
python3 popupcad.py
{% endhighlight %}

* Or run using spyder a wonderful GUI for editing and debugging python programs. Open spyder in the program menu or by typing from the terminal:

{% highlight bash %}
spyder3
{% endhighlight %}

* In the menu, go to tools-->preferences-->console-->external modules
* Select PySide instead of PyQt for the QtPython bindings
* From there you can navigate to the popupcad directory and open popupcad.py.
* Hit f5 to run.

<!--
Option: python2 install:

{% highlight bash linenos %}
sudo apt-get install python-pip spyder python-pyside python-shapely python-sympy python-opengl python-yaml python-scipy python-matplotlib python-setuptools cython python-dev python-sphinx
sudo pip install pyqtgraph shapely
{% endhighlight %}

{% highlight bash %}
python popupcad.py
{% endhighlight %}

{% highlight bash %}
spyder
{% endhighlight %}

-->      