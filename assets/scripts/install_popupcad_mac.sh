#!/bin/bash

echo Enter your first name and press [ENTER]:
read FirstName
echo Enter your last name and press [ENTER]:
read LastName
echo Enter your email and press [ENTER]:
read EmailAddress

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

echo export PATH=/usr/local/bin:\$PATH >> ~/.bash_profile
echo export RESOURCEPATH=\$RESOURCEPATH >> ~/.bash_profile
source ~/.bash_profile

brew install gcc
brew install geos
brew install python3
brew install pyside --with-python3

pip3 install cx_freeze numpy pip pyopengl pyqtgraph pyyaml scipy setuptools shapely spyder sympy lxml idealab_tools

git config --global user.name "$LastName, $FirstName"
git config --global user.email "$EmailAddress"
cd ~/
git clone https://github.com/popupcad/popupcad.git
cd ~/popupcad/
git checkout master
git pull

echo "export PYTHONPATH=\$PYTHONPATH:~/popupcad" >> ~/.bash_profile
source ~/.bash_profile
