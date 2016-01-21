---
layout: default
body_class: competition
title: challenge-wrapup
permalink: /challenge-wrapup/
---

<style>
.test{
	background: transparent url("/assets/images/printapede_desktop.jpg") no-repeat scroll 0% 0%;
  width:100%;
  height:100%;
}
.img_test {
  	max-height: 300px;
  	max-width: 80%;
  	overflow: hidden;
  	display: block;
  	margin-left: auto;
  	margin-right: auto;
  	width: auto;
  }
}

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

<!--<div class="section-wrapper alpha" data-center="background-position: 50% -100px;" data-top-bottom="background-position: 50% 300px;" data-anchor-target=".alpha">
-->
<div class="section-wrapper alpha">
  <section>
  <h1 class="centered">The <strong>popup</strong> design challenge</h1>
  <h2 class="centered"><strong>Meet the 2015 winners!</strong></h2>
  </section>
</div>

<div class="section-wrapper charlie">
  <section>
    <div class="half">
      <h1>First Place:</h1>
      <a href="http://teamjellymiu.wix.com/bioinspiredengucsd" target="_blank"><img class="img_test" src="/assets/images/jellymiu.jpg"></a>
      <h4 class="centered">Team <a href="http://teamjellymiu.wix.com/bioinspiredengucsd" target="_blank">JellyMiu</a></h4>
    </div>
		<div class="half omega">
    <h1>Second Place:</h1>
    <a href="http://eco-botics.weebly.com/" target="_blank"><img class="img_test" src="/assets/images/eco-botics.jpg"></a>
    <h4 class="centered">Team <a href="http://eco-botics.weebly.com/" target="_blank">Eco-Botics</a></h4>
		</div>
  </section>
  <section>
    <div class="half">
      <h1>Third Place:</h1>
      <a href="http://kinetic-blossoms.tumblr.com/" target="_blank"><img class="img_test" src="/assets/images/kinetic-blossoms.jpg"></a>
      <h4 class="centered">Uttam Grandhi: <a href="http://kinetic-blossoms.tumblr.com/" target="_blank">Kinetic Blossoms</a></h4>
    </div>
		<div class="half omega">
    <h1>Honorable Mention:</h1>
    <a href="http://openwalk.github.io/" target="_blank"><img class="img_test" src="/assets/images/openwalk.jpg"></a>
    <h4 class="centered">Team <a href="http://openwalk.github.io/" target="_blank">Open Walk</a></h4>
		</div>

  </section>
</div>


<div class="section-wrapper bravo">
	<section>
		<h2 class="centered">Add yourself to the newsletter, to learn about the next contest!</h2>
					<form action="{{ site.subscribe_form_url }}" method="post" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
					<input type="email" value="" name="EMAIL" id="newsletter-form" placeholder="signup@example.com" required>
					<input type="submit" value="Subscribe" id="newsletter-button" name="subscribe" class="btn btn-1 yellow">
					</form>
	</section>
</div>

<div class="section-wrapper foxtrot">
  <section>
			<div class="half">
      <h1 class="centered icon-info-circled" style="font-size: 5em;"></h1>
      <h2 class="centered">Learn <a href ="{{site.baseurl}}/contest/overview">more</a> about the competition</h2>
			</div>
			<div class="half omega">
				{%include contest-items.html %}
			</div>
  </section>
</div>
