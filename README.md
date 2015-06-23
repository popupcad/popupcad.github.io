# to doesnt

- newsletter signup form
- implement a page-break so some posts generate a proper teaser. the above linked post looks awful
- footer




# installing

gem install sass
gem install json

# things to note:

#### 1 - excerpt separator
excerpt_separator: "<!--more-->" - blog lists display all posts up to <!--more-->. It's kinda important on pages that start with a <table> or something.



# useful plugins ?
https://github.com/octopress
https://github.com/yortz/octopress_gallery
https://github.com/erossignon/jekyll-youtube-lazyloading

USEFUL but doesnt allow pagination of category or tag pages.
http://ryancmorrissey.com/blog/2014/01/20/auto-create-jekyll-category-and-tag-pages/

# notes about popupcad.io

## We use the skrollr.min.js parallex .

http://prinzhorn.github.io/skrollr/

The instructions I found were here.

http://blog.tomri.ch/medium-style-text-fade-effect-on-scroll/

In short, we added the js, and the following data into the section box around h1.

<section data-0="top: 200px; opacity: 1;" data-400="top: 240px; opacity:0; ">

When the container which wraps around the h1 has that data it becomes parallex.



http://matt.coneybeare.me/how-to-setup-a-rails-like-asset-pipeline-with-octopress/

### notes

So version 3.0.0beta2 is a bit too unstable: use jekyll 2.5.3 until it's ready.
The bug I found was that only some files were being copied over to _site.
CSS and JS, as processed by jekyll, were copied across - but static assets, like the icon-fonts in /assets, were being left behind. This problem didn't happen with v2.5.3.

### paths

The path for all assets are in _config.yml. Dont hardwire paths in the template.

### _resources

In this dir, I keep useful pertinent stuff - like the icon font json file that you can use at fontello when you want to quickly add and subtract icons to the icon font.

### Icon Fonts

These are stored in /assets/fonts. The JSON file for fontello that lets you add/subtract fonts, is in _reources/fonts.

 Part of the icon font css is loaded in main.scss - because that file lets you use variables, which i use for paths - ie {{ site.font_dir }}

### Useful Links

http://www.smashingmagazine.com/2014/08/01/build-blog-jekyll-github-pages/
https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/
`gem install github-pages`


## useful plugins

This search plugin searches title text, categories, tags etc. Might be good.

http://www.jekyll-plugins.com/plugins/simple-jekyll-search

This minifies html,js, css. May be useful?
https://github.com/stereobooster/jekyll-press

## deploying to s3/cloudfront?

http://spin.atomicobject.com/2013/09/23/deploy-aws-s3-rake/#


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




## The blog

By adding this line to _config.yml
excerpt_separator: <!--more-->
We can add <!--more--> to a blog, so it cuts off the exerpt display at its location. This is important as a LONG blog post will display in its entirety on the front page. You don't want that.



### technologies I'll investigate

This site offers search based on an RSS feed, useful for static sites. I'll investigate.

http://tapirgo.com/

### Before going to prod

* Add analytics code to default.html template (in the footer there)
* Remove the line in /.gitignore pertaining to the assets/css/* directory.

### Noteworthy links

http://blog.nitrous.io/2013/08/30/using-jekyll-plugins-on-github-pages.html


[Mr. Poole, an tool for using jekyll](https://github.com/mmcclimon/mr_poole)
