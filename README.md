## css

The cleanest way to add or override classes and divs is to enter them in: '/assets/css/overrides.css'. Always make custom changes in override.css; it makes your changes easy to find.

## 1 - excerpt separator in blog/news/post items

In config.yml I specify a excerpt_separator: "<!--more-->".

So on blog list pages, it'll display all of a post up to <!--more-->. It's kinda important to use that on pages that start with a <table> or something, or things will get weird.


# Alerts and Notifications

Syntax examples for information boxes: Info, Success, Alert, Error.


    <div class="notice info"><p>This is a an info notice, it provides feedback of a neutral nature to the user.</p></div>

    <div class="notice success"><p>This is a success notice, it provides feedback of a positive nature to the user.</p></div>

    <div class="notice alert"><p>This is a warning notice, it provides feedback of a potentially negative nature to the user.</p></div>

    <div class="notice error"><p>This is an error notice, it provides feedback of a negative nature to the user.</p></div>


# ICON FONTS.

The icon fonts are from fontello.com. In order to add more fontello icons, save yourself some time and upload your existing list of fonts via the JSON file. Click on the SPANNER icon at fontello.com and upload the config.json file from 'resources/icon_fonts'.  

When you've added or subtracted the fonts you like, name the package ('popupcad') and then download the zip file. Unarchive somewhere (why not the 'resources/icon-fonts' dir ?) Copy the fonts from the unarchive dir into /assets/fonts - remove the old ones first.  

Next, check the dir where you unarchived the fonts - there should be a css dir and popupcad.css file inside. Open it in a text editor.  You're copying in the new icon classes from the bottom of the document into your existing /assets/css/webfont.css file.  

Ensure you remove all the old .icon-* classes first.  

Finally, ensure that the @font-source paths point to right filenames.
ie. it'll look something like this:
/assets/fonts/demonflower.eot?32771413
/assets/fonts/demonflower.eot?32771413#iefix
/assets/fonts/demonflower.woff?32771413

the new paths have to be made to look like

/assets/fonts/popupcad.eot?123456 <- so check the number from the new popupcad.css file.

In short: the font name and suffix number from the popupcad.css font file you downloaded from fontello. Leave the font-family name: popupcad.


# GALLERY PAGINATION

The number of items per page can be set by modifying the `setPagination` function found in the script tag of layouts/default.html (changing the value of the 'perPage' property).


So version 3.0.0beta2 is a bit too unstable: use jekyll 2.5.3 until it's ready.
The bug I found was that only some files were being copied over to site.
CSS and JS, as processed by jekyll, were copied across - but static assets, like the icon-fonts in /assets, were being left behind. This problem didn't happen with v2.5.3.

### paths

The path for all assets are in config.yml. Avoid hardwiring paths in the template.

### resources

In this dir, I keep useful pertinent stuff - like the icon font json file that you can use at fontello when you want to quickly add and subtract icons to the icon font.

### Icon Fonts

These are stored in /assets/fonts. The JSON file for fontello that lets you add/subtract fonts, is in resources/fonts.
Tweak the CSS in /assets/css/webfont.css






## Notes on the template logic.

Everything is loaded from layouts/default.html. Posts and Pages fall back to Default.html.

The dropdown menu is included inside includes/modals/modal_sidebar.html.


### Body Classes
All pages get

`<body class="page">`

and all posts get

`<body class="post">`

If either has a category, that is appended, ie.

`<body class="page tutorials">`
..

There is a final template called 'blank' that is completely empty except for {{ content }}.
This is what we use on the frontpage index.html.

### Javascript stuff

I noticed that just adding files to the /assets dir doesnt mean Jekyll knows to copy them accross.
So I added the javascripts to includes.


This uses Jekyll 3.0beta at least so:

`gem install jekyll --pre`


`git clone git@github.com:stgabriel/biomod.git`

To start the server:

`jekyll server -w`

Now open a browser to localhost:4000
