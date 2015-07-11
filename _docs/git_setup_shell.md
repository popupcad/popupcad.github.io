---
title: Git Setup(shell)
---

1.  open a terminal and type:

        git config --global user.name "LastName, Firstname"
        git config --global user.email "email@address.com"
        git clone {{site.popupcad_source_path}}.git
        cd ~/popupcad/
        git checkout master
        git pull

2.  add popupcad directory to PYTHONPATH:

        echo "export PYTHONPATH=\$PYTHONPATH:~/popupcad" >> ~/.bashrc
