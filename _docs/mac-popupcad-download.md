---
title: Mac popupCAD Download
---

Setup Git(if you haven't already), using your own name and email:

{% highlight bash %}
git config --global user.name "LastName, Firstname"
git config --global user.email "email@address.com"
git config --global push.default simple
git config --global core.editor "nano"
{% endhighlight %}

Check out the popupCAD git repository

{% highlight bash %}
cd ~
git clone {{site.popupcad_source_path}}.git
cd ~/popupcad/
git checkout -t origin/pyqt4_only
git pull
{% endhighlight %}

Add popupcad directory to PYTHONPATH:

{% highlight bash %}
echo "export PYTHONPATH=\$PYTHONPATH:~/popupcad" >> ~/.bash_profile
source ~/.bash_profile
{% endhighlight %}