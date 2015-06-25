---
title: Windows Setup(Source)
---

Installing the source is not necessary to use popupCAD in windows.  There is a nice installer for that!  But if you want to start developing scripts, plugins, or toosl which use popupCAD, well then you may have to.  Here's how:

<div class="important">
popupCAD is compatible with <strong>BOTH</strong> python2 and python3
</div>

when you download popupcad, it comes with the following packages:

* popupcad
* dev_tools
* popupcad_deprecated
* popupcad_manufacturing_plugins
* pypoly2tri

| Modules Needed(*optional) | pip compatible | source | binary install |
|:--|:--|:--|:--|
| [Python](http://python.org/)   | | | [python.org](http:/python.org/downloads/) |
| [PySide](http://qt-project.org/wiki/PySide) | | | [lfd.uci.edu](http://www.lfd.uci.edu/~gohlke/pythonlibs/#pyside) |
| [pycollada](http://pycollada.readthedocs.org/en/v0.4/) | x | [github](https://github.com/pycollada/pycollada) | 
| ezdxf | x | | |
| lxml | x | [github](git clone git://github.com/lxml/lxml.git lxml) | 
| [Numpy](http://www.numpy.org/)  | | | [lfd.uci.edu]( http://www.lfd.uci.edu/~gohlke/pythonlibs/#numpy)|
| p2t* | | [github](https://github.com/danaukes/poly2tri_python) |
| [pyOpenGL](http://pyopengl.sourceforge.net/)| | | [lfd.uci.edu](http://www.lfd.uci.edu/~gohlke/pythonlibs/#pyopengl) |
| [pyqtgraph](http://www.pyqtgraph.org/) | | [github](https://github.com/pyqtgraph/pyqtgraph) | 
| [requests](http://docs.python-requests.org/en/latest/) | | [github](https://github.com/kennethreitz/requests)| |
| [scipy](http://www.scipy.org/)| | | [lfd.uci.edu](http://www.lfd.uci.edu/~gohlke/pythonlibs/#scipy)|
| [Shapely](http://toblerity.org/shapely/) | x | | [lfd.uci.edu](http://www.lfd.uci.edu/~gohlke/pythonlibs/#shapely)|
| [Sympy](http://sympy.org/en/index.html)  | | | [lfd.uci.edu]( http://www.lfd.uci.edu/~gohlke/pythonlibs/#sympy)|
| triangle | | | |
| [pyyaml](http://pyyaml.org/) | | | [lfd.uci.edu](http://www.lfd.uci.edu/~gohlke/pythonlibs/#pyyaml )|


1. Install python and the following modules. I've also linked to binary Windows Installers (exe) provided by Christoph Gohlke at the Laboratory for Fluorescence Dynamics, University of California, Irvine. Many thanks.
2. Add python to your path.
  1.  Open explorer window (win+e)
  2.  Right click on "Computer" in the left pane. Select properties at the bottom.
  3.  Select "advanced system settings" in the left pane
  4.  In the "System Properties" window that pops up, select "Environment Variables" from the "Advanced Tab"
  5.  In the "System Variables" list, scroll down to the "Path" variable and select "Edit" or "New" it if it doesn't exist.
  6.  In the "Variable Name" field, type "PATH" if it doesn't exist.
  7. In the "Variable Value" field, append the path to your python installation and scripts directories to the end.
    * Values are separated with a semicolon.
    * No spaces are allowed.

        Before:

            ...Program Files\Microsoft SQL Server\100\DTS\Binn\

        After(Using Python 2.7 as an example):

            ...Program Files\Microsoft SQL Server\100\DTS\Binn\;C:\Python27;C:\Python27\Scripts

3. Get popupCAD

:   -   Source is available on
        [github](https://github.com/danaukes/popupcad)

    \* I recommend installing [git extensions](https://code.google.com/p/gitextensions/)

    :   -   Right click in the folder you want to store the code in, and
            select "clone repository"
        -   enter [](https://github.com/danaukes/popupcad.git) as the
            source

4. Install popupCAD

:   -   In the start menu, type "cmd" to open up a command prompt
    -   move to the popupCAD directory, wherever you downloaded it.
        There should be a file called "setup.py" in this folder
    -   Type:

            python setup.py install

4.  Alternatively, just add popupCAD to your PYTHONPATH environment
    variable(see step 2, using PYTHONPATH instead of PATH) and
    run locally.
