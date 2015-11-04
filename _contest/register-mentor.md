---
title: Register Mentor
---

If you would like to register to be a mentor for a team, you can sign yourself up here.

<form action="//formspree.io/{{site.contact_email}}" method="POST">
  <input type='hidden' name='form_name' value='mentor registration' />

  <span class="input">
    <input type="text" name="mentor_name" value="" class="input__field">
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

  Are you working with a specific team?  If so, please list them.  Otherwise we will try to pair you with a team interested in finding a mentor.

  <span class="input">
    <input type="text" name="team_or_contact_name" value="" class="input__field">
    <label class="input__label">
      <span class="input__label-content">Team or Contact Name</span>
    </label>
  </span>

  <input type='hidden' name='_next' value='{{ site.simpleform_redirect }}' />
  <input type='hidden' name='_subject' value='mentor registration' />
  <input type='text' name='_gotcha' value='' style="display:none"/>
  <input type='submit' value='Send' class="btn btn-1 black"/>

</form>
