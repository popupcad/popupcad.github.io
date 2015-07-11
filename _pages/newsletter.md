---
layout: page
title: Join our Email List
h1color: fff
h1bg: f39354
permalink: /newsletter/
bodyclass: newsletter
published: true
---


<form action="{{ site.subscribe_form_url }}" method="post" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <span class="input">
        <input type="email" name="EMAIL" value="" class="input__field" required>
        <label class="input__label">
        <span class="input__label-content">Your email address</span>
        </label>
      </span>
      <input type="submit" value="Subscribe" name="subscribe" id="newsletter-page-button" class="btn black">

</form>


{% comment %}
<input type="email" value="" name="EMAIL" id="newsletter-form" placeholder="signup@example.com" required>
<input type="submit" value="Subscribe" id="newsletter-button" name="subscribe" class="btn btn-1 yellow">
</form>
{% endcomment %}

{% comment %}
      <span class="input">
                  <input type="text" name="email" value="" class="input__field">
                  <label class="input__label">
                  <span class="input__label-content">Your email address</span>
                  </label>
      </span>
{% endcomment %}
