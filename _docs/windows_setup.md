---
title: Working with the code on Windows
---
Windows Source Installation ================

1.  Install python and the following modules. I've also linked to binary
    Windows Installers (exe) provided by Christoph Gohlke at the
    Laboratory for Fluorescence Dynamics, University of
    California, Irvine. Many thanks.

>   Project Website                                          executable location
>   -------------------------------------------------------- --------------------------------------------------------------
>   Required:
>   [Python](http://python.org/)                             [](http:/python.org/downloads/)
>   [PySide](http://qt-project.org/wiki/PySide)              [](http://www.lfd.uci.edu/~gohlke/pythonlibs/#pyside)
>   [Numpy](http://www.numpy.org/)                           [](http://www.lfd.uci.edu/~gohlke/pythonlibs/#numpy)
>   [Scipy](http://www.scipy.org/)                           [](http://www.lfd.uci.edu/~gohlke/pythonlibs/#scipy)
>   [Sympy](http://sympy.org/en/index.html)                  [](http://www.lfd.uci.edu/~gohlke/pythonlibs/#sympy)
>   [Shapely](http://toblerity.org/shapely/)                 [](http://www.lfd.uci.edu/~gohlke/pythonlibs/#shapely)
>   [pyOpenGL](http://pyopengl.sourceforge.net/)             [](http://www.lfd.uci.edu/~gohlke/pythonlibs/#pyopengl)
>   [pyyaml](http://pyyaml.org/)                             [](http://www.lfd.uci.edu/~gohlke/pythonlibs/#pyyaml)
>   [pyqtgraph](http://www.pyqtgraph.org/)
>   ------------------------------------------------------   ------------------------------------------------------------
>   Opt                                                      ional
>   ------------------------------------------------------   ------------------------------------------------------------
>   [Spyder](https://code.google.com/p/spyderlib/)           [](http://www.lfd.uci.edu/~gohlke/pythonlibs/#spyder)
>
2. Add python to your path.

:   1.  Open explorer window (win+e)
    2.  Right click on "Computer" in the left pane. Select properties at
        the bottom.
    3.  Select "advanced system settings" in the left pane
    4.  In the "System Properties" window that pops up, select
        "Environment Variables" from the "Advanced Tab"
    5.  In the "System Variables" list, scroll down to the "Path"
        variable and select "Edit" or "New" it if it doesn't exist.
    6.  In the "Variable Name" field, type "PATH" if it doesn't exist.

    \#. In the "Variable Value" field, append the path to your python installation and scripts directories to the end.

    :   -   Values are separated with a semicolon.
        -   No spaces are allowed.

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
