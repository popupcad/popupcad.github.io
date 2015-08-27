---
layout: page
title: Contest Registration
h1color: fff
h1bg: f39354
permalink: /registration/
published: true
---

<form action="https://getsimpleform.com/messages?form_api_token={{ site.simpleform_api_token }}" method="post">
  <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
  <input type='hidden' name='redirect_to' value='{{ site.simpleform_redirect }}' />
  <!-- all your input fields here.... -->

      <span class="input">
                  <input type="text" name="captain_name" value="" class="input__field">
                  <label class="input__label">
                  <span class="input__label-content">Your Name</span>
                  </label>
      </span>

      <span class="input">
                  <input type="text" name="captain_email" value="" class="input__field">
                  <label class="input__label">
                  <span class="input__label-content">Your Email</span>
                  </label>
      </span>

      <span class="input">
                  <input type="text" name="mentor_name" value="" class="input__field">
                  <label class="input__label">
                  <span class="input__label-content">Mentor's Name</span>
                  </label>
      </span>

      <span class="input">
                  <input type="text" name="mentor_email" value="" class="input__field">
                  <label class="input__label">
                  <span class="input__label-content">Mentor's Email</span>
                  </label>
      </span>
      
      <textarea name="other_emails" placeholder="Teammates' Names & Email Addresses"></textarea>

      <span class="input">
                  <input type="text" name="project_name" value="" class="input__field">
                  <label class="input__label">
                  <span class="input__label-content">Project Name</span>
                  </label>
      </span>
      
      <textarea name="project_description" placeholder="Project Description"></textarea>
      
    <input type='submit' value='Send' class="btn btn-1 black"/>

</form>
