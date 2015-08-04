---
title: Mac Uninstall
---

This script will uninstall pip packages required by popupCAD, all homebrew packages, and homebrew itself, as well as the popupcad git repository

{% highlight bash linenos%}
pip3 uninstall -y cx-Freeze lxml nose pip PyOpenGL pyqtgraph PyYAML scipy setuptools Shapely spyder sympy wheel
#if you installed numpy and scipy using pip
#pip3 uninstall -y numpy scipy

OUTPUT="$(brew list)"
brew uninstall --force $OUTPUT
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"

#remove system variable modifications from .bash_profile:
sed -i '' '/echo export PATH=\/usr\/local\/bin:\$PATH/d' ~/.bash_profile
sed -i '' '/echo export RESOURCEPATH=\$RESOURCEPATH/d' ~/.bash_profile
sed -i '' '/export PYTHONPATH=\$PYTHONPATH:~\/popupcad/d' ~/.bash_profile

#remove popupcad git repository:
rm -rf ~/popupcad/
#if you want to remove the popupcad files directory:
#rm -rf ~/popupcad_files/
{% endhighlight %}

<!--
brew uninstall pyside python3 openssl mpfr qt readline shiboken sqlite xz libmpc isl gmp geos gdbm gcc cmake cloog gcc gdbm geos gmp isl libmpc mpfr openssl python3 readline sqlite xz
cd
nano .bash_profile
nano ~/.bash_profile 
-->