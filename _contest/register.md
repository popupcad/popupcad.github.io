---
title: Register
---

<form action="//formspree.io/{{site.contact_email}}" method="POST">
  <input type='hidden' name='form_name' value='registration form' />

  Introduce yourself!  Please tell us your project name.  You can always change it later.

  <span class="input">
    <input type="text" name="project_name" value="" class="input__field">
    <label class="input__label">
      <span class="input__label-content">Project Name</span>
    </label>
  </span>

  Please provide a short description of the type of device you would like to develop. Briefly describe your team and any school or company affiliations.  List any experience you and your teammates have with laminate devices.

  <textarea name="project_description" placeholder="Project Description.   "></textarea>

  <span class="input">
    <input type="text" name="captain_name" value="" class="input__field">
    <label class="input__label">
      <span class="input__label-content">Your Name</span>
    </label>
  </span>

  <span class="input">
    <input type="text" name="_replyto" value="" class="input__field">
    <label class="input__label">
      <span class="input__label-content">Your Email</span>
    </label>
  </span>

  <textarea name="other_emails" placeholder="Teammates' Names & Email Addresses"></textarea>

  Do you already have a website set up? It's not required yet, but it will be in order to pass any checkpoints.

  <span class="input">
    <input type="text" name="website_url" value="" class="input__field">
    <label class="input__label">
      <span class="input__label-content">Website URL(optional)</span>
    </label>
  </span>


  You don't need a mentor, but if you are a student team it can be extremely useful to have someone local who can give you design guidance and advice that we can also communicate with.  If you don't have a mentor, we can assist you in finding one.

  <span class="input">
    <input type="text" name="mentor_name" value="" class="input__field">
    <label class="input__label">
      <span class="input__label-content">Mentor's Name(optional)</span>
    </label>
  </span>

  <span class="input">
    <input type="text" name="mentor_email" value="" class="input__field">
    <label class="input__label">
      <span class="input__label-content">Mentor's Email(Optional)</span>
    </label>
  </span>

  <input type='hidden' name='_next' value='{{ site.simpleform_redirect }}' />
  <input type='hidden' name='_subject' value='registration form' />
  <input type='text' name='_gotcha' value='' style="display:none"/>
  <input type='submit' value='Send' class="btn btn-1 black"/>

</form>
