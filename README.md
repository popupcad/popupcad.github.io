## css

The cleanest way to add or override classes and divs is to enter them in: '/assets/css/custom.css'

# installing

gem install sass
gem install json

# things to note:

#### 1 - excerpt separator

in config.yml I specify a excerpt_separator: "<!--more-->".

So on blog list pages, it'll display all of a post up to <!--more-->. It's kinda important to use that on pages that start with a <table> or something.


# Alerts and Notifcations


    <div class="notice info"><p>This is a an info notice, it provides feedback of a neutral nature to the user.</p></div>

    <div class="notice success"><p>This is a success notice, it provides feedback of a positive nature to the user.</p></div>

    <div class="notice alert"><p>This is a warning notice, it provides feedback of a potentially negative nature to the user.</p></div>

    <div class="notice error"><p>This is an error notice, it provides feedback of a negative nature to the user.</p></div>




So version 3.0.0beta2 is a bit too unstable: use jekyll 2.5.3 until it's ready.
The bug I found was that only some files were being copied over to _site.
CSS and JS, as processed by jekyll, were copied across - but static assets, like the icon-fonts in /assets, were being left behind. This problem didn't happen with v2.5.3.

### paths

The path for all assets are in _config.yml. Avoid hardwiring paths in the template.

### _resources

In this dir, I keep useful pertinent stuff - like the icon font json file that you can use at fontello when you want to quickly add and subtract icons to the icon font.

### Icon Fonts

These are stored in /assets/fonts. The JSON file for fontello that lets you add/subtract fonts, is in _reources/fonts.
Tweak the CSS in /assets/css/webfont.css






## Notes on the template logic.

Everything is loaded from _layouts/default.html. Posts and Pages fall back to Default.html.

The dropdown menu is included inside _includes/menu.html.


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
