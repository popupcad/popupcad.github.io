---
title: Windows Setup(Source)
---

Installing the source is not necessary to play with popupCAD in Windows.  There is a nice installer for that!  But if you want to start developing scripts, plugins, or toosl which use popupCAD, well then you may have to.  Here's how:

### Prerequisites
1. download and install [git extensions](https://github.com/gitextensions/gitextensions/releases).
    * Recent Release [2.48.05](https://github.com/gitextensions/gitextensions/releases/download/v2.48.05/GitExtensions-2.48.05-SetupComplete.msi)
    * install for all users
    * select all sub-programs to install(kdiff, msysgit, and windows credential store).
    * keep putty as default.
    * Other programs will then install.
    * In the git install when it asks about shell integration, select the option which allows git commands and unix commands from the cmd shell.
    * Keep all other options default
    * select a language(english)
    * set your username and password in the git extensions settings window that pops up
1. Download and install [Miniconda](https://repo.continuum.io/miniconda/Miniconda3-latest-Windows-x86_64.exe)
    * keep all defaults
1. Install a popupcad environment
    1. open up cmd
    
{% highlight bash %}
conda config --set always_yes yes --set changeps1 no
conda update conda
conda info -a
conda create -n test-environment python=3.5 setuptools cython pyyaml numpy scipy sympy pyopengl pyqt pyqtgraph matplotlib
activate test-environment
conda install -c anaconda shapely=1.5.13
pip install pypoly2tri ezdxf
{% endhighlight %}

Optional:
download [cx_Freeze](http://www.lfd.uci.edu/~gohlke/pythonlibs/#cx_freeze)

{% highlight bash %}
pip install cx_freeze-4....whl
{% endhighlight %}

Spyder
{% highlight bash %}
conda install spyder
{% endhighlight %}

1. Open up the command window(start->type cmd).  Paste:
{% highlight bash %}
cd %HOMEPATH%
git clone https://github.com/popupcad/popupcad.git
cd %HOMEPATH%\popupcad
git checkout pyqt4_only
git pull
{% endhighlight %}

1. add the popupcad directory to your python path, or install it using

{% highlight bash %}
python setup.py install
{% endhighlight %}
