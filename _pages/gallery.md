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
<div class="third">
<h2>Welcome</h2>
</div>
<div class="two-thirds">
The gallery will be evolving rapidly over the next several weeks. We plan to host design files as well as documentation for creating designs.  If you would like to submit a design for the gallery, please <a href="{{site.url}}/contact"><strong>get in touch</strong></a>, and we would be happy to host it for you.
</div>
</section>

<section>
	<ul id="gallery-filters"></ul>
	<a href="#" id="remove-filters">show all / remove filters</a>
</section>
<section>
{% for design in site.gallery %}

<figure class="third {% unless design.tags == empty %}{{ design.tags }}{% endunless %}">

{% if design.png_image_file and design.url %}
<a href="{{ design.url }}">
<img src="{{ design.url }}{{ design.png_image_file }}" />
</a>
{% endif %}

<figcaption>
<h5><strong>title:</strong> {{ design.title }}</h5>
<h5><strong>tags:</strong> {{ design.tags }}</h5>

{{ design.url }}{{ design.png_image_file }}

</figcaption>
</figure>


{% endfor %}



</section>
<style>
.third{
	margin-bottom:8rem;
}
.third img{
	max-height:300px;
}
figure{
	position:relative;
	height:450px
}
figcaption{
	position:absolute;
	bottom:0px;
	height:150px;
	padding:2rem;
	background:#eee;
}
</style>
