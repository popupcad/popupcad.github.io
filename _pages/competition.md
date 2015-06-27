---
layout: default
body_class: competition
title: competition
permalink: /competition/
published: true
---

<div class="section-wrapper alpha">
  <section>
  <h1 class="centered">The <strong>popup</strong> design challenge</h1>
  <h2 class="centered">Make a new device!</h2>
  </section>
</div>

<div class="section-wrapper bravo">
  <section>
    <div class="centered">
      <iframe src="https://player.vimeo.com/video/131475762?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
  </section>
</div>

<div class="section-wrapper delta">
  <section>
    <div class="half centered">
      <h2><a href ="{{site.url}}/contest/introduction">Competition</a></h2>
    </div>
    <div class="half centered omega">
      <h2><a href ="{{site.url}}/tutorials/introduction">Make a Device</a></h2>
    </div>
  </section>
</div>

{% include newsletter.html %}














<style>
header,.alpha{
  background:red;
  }
.alpha strong
  {
    color:#000;
  }

.alpha h1
  {
    color:#222;
    font-size:5rem;
    line-height: 5rem;
    text-shadow: 
      2px 2px 2px rgba(255,255,255,.8),
      -2px 2px 2px rgba(255,255,255,.8),
      2px -2px 2px rgba(255,255,255,.8),
      -2px -2px 2px rgba(255,255,255,.8);
  }
.alpha h2
  {
    color:#222;
    font-size:3rem;
    line-height: 3rem;
    text-shadow: 
      2px 2px 2px rgba(255,255,255,.6),
      -2px 2px 2px rgba(255,255,255,.6),
      2px -2px 2px rgba(255,255,255,.6),
      -2px -2px 2px rgba(255,255,255,.6);
  }

.alpha
{
  background:url({{ site.image_dir }}/printapede_desktop.jpg) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  overflow:hidden;
  height:500px;

}
header a:link,header a:visited{color:white}
</style>
