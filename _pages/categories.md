---
layout: page
title: categories and tags
h1color: eee
h1bg: 373737
permalink: /categories/
published: true
---
<div class="row">

	<a name="categories"></a>
	<h3>Categories</h3>
	{% for category in site.categories %}
	<a href="/category/{{category[0]}}/">{{category[0]}} {{category[1].size}}</a>
	{% endfor %}


	<a name="tags"></a>
	<h3>Tags</h3>
	{% for tag in site.tags %}
	<div class="{% cycle 'half', 'half omega' %}">
	<a href="/tag/{{tag[0]}}/">{{tag[0]}} {{tag[1].size}}</a>
	</div>
	{% endfor %}

</div>
