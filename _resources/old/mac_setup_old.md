---
layout: page
title: Mac Setup(Old)
---

Mac Setup (Non-Homebrew) ================ \#. disable Mac security for
apps. \#. open settings \#. go to "security and privacy", then select
the "general" tab \#. click the lock and supply your password, if needed
\#. on the "Allow apps downloaded from" radio buttons, select "anywhere"
\#. Download and install packages \*
[](python%20https://www.python.org/) \*
[pip](http://pip.readthedocs.org/en/latest/installing.html#install-pip)
\* don't forget to use sudo \* [Qt4.8 for Mac
Opensource](http://qt-project.org/downloads) \* [pyside
binaries](http://qt-project.org/wiki/PySide_Binaries_MacOSX) \*
[gfortran binaries](https://gcc.gnu.org/wiki/GFortranBinaries#MacOS) \*
[cmake](http://www.cmake.org/cmake/resources/software.html) \*
[geos](http://trac.osgeo.org/geos/) \#. unzip the source file \#. from
the terminal:

    cd DOWNLOAD_DIRECTORY/geos-3.x.x
    ./configure
    sudo make install

1.  add the installed version of python to your path:

        echo 'export PATH="/Library/Frameworks/Python.framework/Versions/2.7/bin:${PATH}"' >> .bash_profile

2.  install some python modules from pip:

        pip install --upgrade numpy scipy sympy pyqtgraph cx_freeze sphinx spyder shapely pyopengl pyyaml 

3.  popupcad\_git\_setup

\#. from the terminal, run spyder:

    spyder

> -   navigate to popupcad.py and run to enable debugging

