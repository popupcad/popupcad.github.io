---
title: Mac Setup
---

1. disable Mac security for apps.
  - open settings
  - go to "security and privacy", then select the "general" tab
  - click the lock and supply your password, if needed
  - on the "Allow apps downloaded from" radio buttons, select "anywhere"
1. download and install X-Code from the [app store](<https://developer.apple.com/xcode/>)
1. download and run this [script]({{site.url}}/assets/scripts/install_popupcad_mac.sh)
1. run the following:

{% highlight bash %}
cd ~/popupcad
python popupcad.py
{% endhighlight  %}
