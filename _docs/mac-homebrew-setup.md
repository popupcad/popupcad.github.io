---
title: Mac Homebrew Setup
published: false
---

Disable Mac security for apps.

- open settings
- go to "security and privacy", then select the "general" tab
- click the lock and supply your password, if needed
- on the "Allow apps downloaded from" radio buttons, select "anywhere"

Download and install X-Code from the [app store](<https://developer.apple.com/xcode/>)

Download and install homebrew, and add library paths to system variables:

{% highlight bash %}
# download ruby install script
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# set up some taps and update brew
brew tap homebrew/science # a lot of cool formulae for scientific tools
brew tap homebrew/python # numpy, scipy, matplotlib, ...
brew update && brew upgrade

# add libraries to path
echo export PATH=/usr/local/bin:\$PATH >> ~/.bash_profile
echo export RESOURCEPATH=\$RESOURCEPATH >> ~/.bash_profile
source ~/.bash_profile
{% endhighlight %}

Brew some packages:

{% highlight bash %}
brew install gcc
brew install geos
brew install python3
brew install pyside --with-python3

#preferred over pip3 because cx_freeze works better.
brew install openblas
brew install numpy --with-openblas --with-python3
brew link --overwrite numpy
brew install scipy --with-openblas --with-python3
brew link --overwrite scipy
{% endhighlight %}

Install some python packages using pip3

{% highlight bash %}
sudo pip3 install cx_freeze pip pyopengl pyqtgraph pyyaml setuptools shapely spyder sympy lxml pycollada ezdxf numpy-stl
#pip3 install cx_freeze numpy scipy
{% endhighlight %}

[Download and Install popupcad]({{site.baseurl}}/docs/mac-popupcad-download)

Run popupCAD

* From the terminal, navigate to the popupcad directory and execute popupcad using python:

{% highlight bash %}
cd ~/popupcad
python3 popupcad.py
{% endhighlight %}

* Or run using spyder a wonderful GUI for editing and debugging python programs. Open spyder in the program menu or by typing from the terminal:

{% highlight bash %}
spyder
{% endhighlight %}

* In the menu, go to tools-->preferences-->console-->external modules
* Select PySide instead of PyQt for the QtPython bindings
* From there you can navigate to the popupcad directory and open popupcad.py.
* Hit f5 to run.

<!--
Download and run this [script]({{site.url}}/assets/scripts/install_popupcad_mac.sh)

- once you download the script, you may have to permit it to be executed on your local machine.  
- open up a terminal window and navigate to the directory where you downloaded the script.

type:

{% highlight bash %}
chmod +x install_popupcad_mac.sh
./install_popupcad_mac.sh
{% endhighlight %}

-->