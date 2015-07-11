---
layout: page
title: gallery
h1color: eee
h1bg: 373737
permalink: /gallery/
published: true
---


{% for i in site.gallery %}
<div class="third">
{{ i.title }}
</div>
{% endfor %}

<style>
.third{min-height:300px;padding:2rem;}
</style>
