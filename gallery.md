---
layout: page
title: Gallery
---

{% for design in site.gallery %}
  [{{ design.title }}]({{design.url}})
{% endfor %}
