---
title: Register Mentor
---

If you would like to register to be a mentor for a team, you can sign yourself up here.

<form action="https://getsimpleform.com/messages?form_api_token={{ site.simpleform_api_token }}" method="post">
  <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
  <input type='hidden' name='redirect_to' value='{{ site.simpleform_redirect }}' />
  <!-- all your input fields here.... -->

      <span class="input">
                  <input type="text" name="mentor_name" value="" class="input__field">
                  <label class="input__label">
                  <span class="input__label-content">Your Name</span>
                  </label>
      </span>

      <span class="input">
                  <input type="text" name="mentor_email" value="" class="input__field">
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

    <input type='submit' value='Send' class="btn btn-1 black"/>

</form>
