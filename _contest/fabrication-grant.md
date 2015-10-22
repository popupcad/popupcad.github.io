---
title: Fabrication Grant
---

To apply for fabrication tools, please fill out this form.  You should have already registered for the challenge and submitted at least one checkpoint. Otherwise, you're not going to get anything.

<form action="https://getsimpleform.com/messages?form_api_token={{ site.simpleform_api_token }}" method="post">
<!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
<input type='hidden' name='redirect_to' value='{{ site.simpleform_redirect }}' />
<!-- all your input fields here.... -->
<input type='hidden' name='form_name' value='fabrication grant' />

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
<input type="text" name="captain_email" value="" class="input__field">
<label class="input__label">
<span class="input__label-content">Your Email</span>
</label>
</span>

<br>
If you are doing this as a school or class project, please describe the tools you already have to work with.  Laser cutter, vinyl cutter, laminator, t-shirt press?

<textarea name="existing_tools" placeholder="Describe what tools you have..."></textarea>


What resources do you have through your class/school/office?  Do you have a budget that you can draw from?  Do you have supplies provided to you for this project?

<textarea name="existing_resources" placeholder="Describe what resources you have..."></textarea>

What tools are missing that would make this project go easier?  List in order of priority.

<textarea name="needed_tools" placeholder="Describe what you need..."></textarea>

<input type='submit' value='Send' class="btn btn-1 black"/>

</form>