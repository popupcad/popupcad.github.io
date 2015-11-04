---
title: Fabrication Grant
---

Teams which have completed their checkpoints through November 1 will have the opportunity to request a “Fabrication Grant”. A fabrication grant is intended to help teams with limited budgets or limited access to fabrication tools. The Wyss Institute will donate an electronic cutter [like this](http://www.silhouetteamerica.com/shop/machines/cameo) to selected teams.  These cutters can directly print popupCAD design files for prototyping with a variety of materials.

To apply for a fabrication grant, please fill out this form.  You should have already registered for the challenge and submitted at least one checkpoint.  Otherwise you will not be considered.

<form action="//formspree.io/{{site.contact_email}}" method="POST">
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
  <input type="text" name="_replyto" value="" class="input__field">
  <label class="input__label">
    <span class="input__label-content">Your Email</span>
  </label>
</span>

<br>
If you are doing this as a school or class project, please describe the tools you already have to work with.  Laser cutter, vinyl cutter, laminator, t-shirt press?

<textarea name="existing_tools" placeholder="Describe what tools you have..."></textarea>

What resources do you have through your class/school/office?  Do you have a budget that you can draw from?  Do you have supplies provided to you for this project?

<textarea name="existing_resources" placeholder="Describe what resources you have..."></textarea>

What other tools are missing that would make this project go easier?  This will help us plan better for next year.

<textarea name="needed_tools" placeholder="..."></textarea>
<input type='hidden' name='_next' value='{{ site.simpleform_redirect }}' />
<input type='hidden' name='_subject' value='fabrication grant' />
<input type='text' name='_gotcha' value='' style="display:none"/>
<input type='submit' value='Send' class="btn btn-1 black"/>
</form>