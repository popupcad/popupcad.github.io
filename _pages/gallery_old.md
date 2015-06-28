---
layout: page
body_class: gallery
title: Gallery
h1color: fff
h1bg: f39354
permalink: /gallery/
published: false
---


{% for design in site.gallery %}

  <img class="half omega" src="{{ design.url }}{{design.image_file}}" />

  [{{ design.title }}]({{design.url}})
{% endfor %}
