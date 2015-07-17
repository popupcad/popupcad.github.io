---
title: Linux Setup
---

- Install/Update Software:

  ```
   sudo apt-get update
   sudo apt-get install dkms git synaptic libgeos-dev gfortran cmake python-qt4-gl phonon-backend-gstreamer
  ```

   Option: python2 install:

  ```
   sudo apt-get install python-pip spyder python-pyside python-shapely python-sympy python-opengl python-yaml python-scipy python-matplotlib python-setuptools cython python-dev python-sphinx
   sudo pip install pyqtgraph shapely
  ```

   Option: python3 install:

  ```
   sudo apt-get install python3-pip spyder3 python3-pyside python3-shapely python3-opengl python3-yaml python3-scipy python3-matplotlib python3-setuptools cython3 python3-dev python3-sphinx
   sudo pip3 install pyqtgraph shapely sympy
  ```

- optional: upgrade your system:

  ```
  sudo apt-get upgrade
  ```

- optional: set flag for systems without hardware video

  acceleration(for example if using virtualbox):

  ```
  echo "export LIBGL_ALWAYS_INDIRECT=1" >> ~/.bashrc
  ```

- Setup Git
- Run popupCAD

    From the terminal, navigate to the popupcad directory and type:

  ```
    python popupcad.py
  ```

    Or run using spyder a wonderful GUI for editing and debugging python programs. Open spyder in the program menu or by typing from the terminal:

  ```
      spyder
  ```

    or with python3:

  ```
      spyder3
  ```

  - from there you can navigate to the popupcad directory and open popupcad.py.
  - hit f5 to run.
