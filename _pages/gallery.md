---
layout: default
body_class: gallery
title: Gallery
h1color: fff
h1bg: f39354
permalink: /gallery/
published: true
---

<section>
{% for design in site.gallery %}

<figure class="third">

{% if design.png_image_file and design.url %}
<a href="{{ design.url }}">
<img src="{{ design.url }}{{ design.png_image_file }}" />
</a>
{% endif %}

<figcaption>
</br>
{{ design.title }}
image url: {{ design.url }}
</br>
image_png: {{ design.png_image_file }}
</figcaption>
</figure>


{% endfor %}



</section>
<style>
.third{
	margin-bottom:4rem;
}
.third img{
	max-height:300px;
}
figure{
	position:relative;
	height:400px
}
figcaption{
	position:absolute;
	bottom:0px;
	max-height:100px;
	background:#eee;
}
</style>
