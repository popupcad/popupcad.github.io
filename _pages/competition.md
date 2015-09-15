---
layout: default
body_class: competition
title: competition
permalink: /competition/
published: true
---

<!--<div class="section-wrapper alpha" data-center="background-position: 50% -100px;" data-top-bottom="background-position: 50% 300px;" data-anchor-target=".alpha">
-->
<div class="section-wrapper alpha">
  <section>
  <h1 class="centered">The <strong>popup</strong> design challenge</h1>
  <h2 class="centered"><strong>Make a new device!</strong></h2>
  </section>
</div>

<div class="section-wrapper delta">
  <section>
    <div class="half">
      <h1 class="centered icon-info-circled"></h1>
      <h4 class="centered">Learn <a href ="{{site.url}}/contest/information">more</a> about the competition</h4>
    </div>

		<div class="half omega">
      <h1 class="centered icon-attention"></h1>
      <h4 class="centered"><a href="{{site.url}}/contest/register">Register now</a> for the competition!</h4>
		</div>

  </section>
</div>

<!--
<div class="section-wrapper charlie">
  <section>
    <h1 class="centered">Pre-Register to stay updated!</h1>
    <h2 class="centered">join the email list to be notified as deadlines and rules are announced!</h2>
    {% include newsletter.html %}
  </section>
</div>
-->

<div class="section-wrapper bravo">
  <section>
  <style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; margin-left: 10%; margin-right: 10%} .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style>
  <div class='embed-container'>
    <iframe src='https://player.vimeo.com/video/131475762' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
  </div>
  <div class="centered">
  <h6>Special thanks to the students of <em>Informal Robotics</em> and the Harvard Graduate School of Design.</h6>
  </div>
  </section>
</div>

<!--
<div class="section-wrapper bravo">
  <section>
    <div class="centered">
      <h2>This is a test</h2>
    </div>
  </section>
</div>
-->


<style>

@media (max-width: 719px) {

  .alpha{
    background:#336699;
  }
}


@media (min-width: 720px) {

  .alpha{
    background:linear-gradient( rgba( 51, 102, 153, 0.5), rgba( 51, 102, 153, 0.5) ), url({{ site.image_dir }}/printapede_desktop.jpg) no-repeat;
  }
}

</style>
