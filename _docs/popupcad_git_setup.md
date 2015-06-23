---
title: Git Repository
---
setup Git repository for popupCAD ===================

1.  open a terminal and type:

        git config --global user.name "LastName, Firstname"
        git config --global user.email "email@address.com"
        git clone https://github.com/danaukes/popupcad.git
        cd ~/popupcad/
        git checkout master
        git pull

2.  add popupcad directory to path:

        echo "export PYTHONPATH=\$PYTHONPATH:~/popupcad" >> ~/.bashrc
