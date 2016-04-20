---
title: Mac Homebrew Uninstall
published: false
---

This script will uninstall pip packages required by popupCAD, all homebrew packages, and homebrew itself, as well as the popupcad git repository

{% highlight bash %}
pip3 uninstall -y cx-Freeze lxml nose pip PyOpenGL pyqtgraph PyYAML scipy setuptools Shapely spyder sympy wheel
{% endhighlight %}

if you installed numpy and scipy using pip

{% highlight bash %}
#pip3 uninstall -y numpy scipy
{% endhighlight %}

uninstall homebrew stuff

{% highlight bash %}
OUTPUT="$(brew list)"
brew uninstall --force $OUTPUT
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
{% endhighlight %}

remove system variable modifications from .bash_profile:

{% highlight bash %}
sed -i '' '/export PATH=\/usr\/local\/bin:\$PATH/d' ~/.bash_profile
sed -i '' '/export RESOURCEPATH=\$RESOURCEPATH/d' ~/.bash_profile
sed -i '' '/export PYTHONPATH=\$PYTHONPATH:~\/popupcad/d' ~/.bash_profile
{% endhighlight %}


<!--
remove popupcad git repository
rm -rf ~/popupcad/
#if you want to remove the popupcad files directory:
#rm -rf ~/popupcad_files/
brew uninstall pyside python3 openssl mpfr qt readline shiboken sqlite xz libmpc isl gmp geos gdbm gcc cmake cloog gcc gdbm geos gmp isl libmpc mpfr openssl python3 readline sqlite xz
cd
nano .bash_profile
nano ~/.bash_profile 
-->