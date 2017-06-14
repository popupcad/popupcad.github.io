---
title: Windows Setup(Source)
---

Installing the source is not necessary to play with popupCAD in Windows.  There is a nice installer for that!  But if you want to start developing scripts, plugins, or toosl which use popupCAD, well then you may have to.  Here's how:

### Prerequisites
1. (optional)download and install [git extensions](https://github.com/gitextensions/gitextensions/releases).
    * install for all users
    * select all sub-programs to install(kdiff, msysgit, and windows credential store).
    * keep putty as default.
    * Other programs will then install.
    * In the git install when it asks about shell integration, select the option which allows git commands and unix commands from the cmd shell.
    * Keep all other options default
    * select a language(english)
    * set your username and password in the git extensions settings window that pops up
1. Download popupcad source
    * either download the [zip](https://github.com/popupcad/popupcad/archive/master.zip), or clone the [git repository](https://github.com/popupcad/popupcad.git) if you followed step one.
1. Download and install [Miniconda](https://repo.continuum.io/miniconda/Miniconda3-latest-Windows-x86_64.exe)
    * install for all users
    * select "add to path"
1. Install a popupcad environment
    1. open up cmd(admin)

{% highlight bash %}
conda install pyyaml numpy scipy matplotlib sympy pyqt pyqtgraph pyopengl
conda install -c conda-forge shapely
pip install pypoly2tri ezdxf idealab_tools
{% endhighlight %}

1. Navigate in command to the popupcad folder
{% highlight bash %}
cd c:/users/username/subdirectory/(popupcad directory)
{% endhighlight %}

1. to start popupcad, type
{% highlight bash %}
python popupcad.py
{% endhighlight %}

1. Optional:
    * Download Spyder
{% highlight bash %}
conda install spyder
{% endhighlight %}
