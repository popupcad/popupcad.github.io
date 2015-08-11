---
title: PopupCAD Gazebo Install
---

suggested linux version: Ubuntu 14.04(Trusty)

{% highlight bash %}
sudo apt-get install libgdal-dev
{% endhighlight %}

follow instructions found at [gazebosim.org](http://gazebosim.org/tutorials?tut=install_from_source&cat=install)

Make sure that you can actually run gazebo before proceeding

You will need to install some extra packages:

{% highlight bash %}
sudo pip3 install trollius
sudo pip3 install --pre protobuf
{% endhighlight %}

pull the python3 branch of pygazebo
{% highlight bash %}
git clone https://github.com/virtuald/pygazebo.git
cd pygazebo
git branch py3
sudo python3 setup.py install
{% endhighlight %}
