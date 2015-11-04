---
title: Team Checkpoint
---

A checkpoint is a way for us to see how you are doing.  Until the final submission, there is little required; we just want to see that you are documenting your progress.  The most important thing is that you have created a website and have begun to add content to it.

<form action="//formspree.io/{{site.contact_email}}" method="POST">
  <input type='hidden' name='form_name' value='team checkpoint' />

  Remind us of your project name:

  <span class="input">
    <input type="text" name="project_name" value="" class="input__field">
    <label class="input__label">
      <span class="input__label-content">Project Name</span>
    </label>
  </span>

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

  What is your website address?
  <textarea name="website" placeholder="Web Address"></textarea>

  <span class="input">
    <input type="text" name="website_user_name" value="" class="input__field">
    <label class="input__label">
      <span class="input__label-content">Website Username(if required)</span>
    </label>
  </span>

  <span class="input">
    <input type="password" name="website_password" value="" class="input__field">
    <label class="input__label">
      <span class="input__label-content">Website Password(if required)</span>
    </label>
  </span>

  Are there any special instructions for accessing your website?
  <textarea name="special_instructions" placeholder="Special Instructions..."></textarea>

  <input type='hidden' name='_next' value='{{ site.simpleform_redirect }}' />
  <input type='hidden' name='_subject' value='team checkpoint' />
  <input type='text' name='_gotcha' value='' style="display:none"/>
  <input type='submit' value='Send' class="btn btn-1 black"/>
</form>
