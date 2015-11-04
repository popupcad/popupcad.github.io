---
layout: page
title: Contact PopupCad
h1color: fff
h1bg: f39354
permalink: /contact/
published: true
---

<form action="//formspree.io/{{site.contact_email}}" method="POST">
  <input type='hidden' name='form_name' value='contact form' />

  <span class="input">
    <input type="text" name="name" value="" class="input__field">
    <label class="input__label">
      <span class="input__label-content">Your name</span>
    </label>
  </span>
    
  <span class="input">
    <input type="text" name="_replyto" value="" class="input__field">
    <label class="input__label">
      <span class="input__label-content">Your email address</span>
    </label>
  </span>

  <textarea name="message" placeholder="Your message..."></textarea>

  <input type='hidden' name='_next' value='{{ site.simpleform_redirect }}' />
  <input type='hidden' name='_subject' value='contact form' />
  <input type='text' name='_gotcha' value='' style="display:none"/>
  <input type='submit' value='Send' class="btn btn-1 black"/>
</form>
