---
layout: default
body_class: gallery
title: Gallery
h1color: fff
h1bg: f39354
permalink: /gallery/
published: true
---
<div class="section-wrapper alpha">
<section>
<div class="third">
<h1>Designs</h1>
</div>

<div class="two-thirds omega">
<p>The gallery will be evolving rapidly over the next several weeks. We plan to host design files as well as documentation for creating designs.  If you would like to submit a design for the gallery, please <a href="{{site.url}}/contact"><strong>get in touch</strong></a>, and we would be happy to host it for you.</p>
</div>

</section>
</div>


<section>
<div class="third">
	<h2>filter designs by<strong> tag</strong></h2>
	<ul id="gallery-filters"></ul>
	<a href="#" id="remove-filters">show all / remove filters</a>
</div>
<div class="two-thirds omega">
{% for design in site.gallery %}

	<figure class="box {% unless design.tags == empty %}{{ design.tags }}{% endunless %}">

	{% if design.png_image_file and design.url %}
	<a href="{{ design.url }}">
	<img src="{{ design.url }}{{ design.png_image_file }}" />
	</a>
	{% endif %}

	<figcaption>
	<h5><strong>TITLE:</strong> {{ design.title }}</h5>
	<h5><strong>TAGS:</strong> {{ design.tags }}</h5>


	</figcaption>
	</figure>

	{% endfor %}
</div>
</section>
<section>





</section>
