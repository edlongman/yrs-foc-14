# Festival of Code 2014 Site

<small>This code is ugly and rushed. Please don't hate me, but feel  free to fix it and submit a pull request. Thanks.</small>

This website is built on <a href="">Bootbuckle</a>, which in turn relies heavily on <a href="">Grunt</a>. This guide should get you started. 

## Getting started

If you do not have Node installed, you should do so before continuing. You can get super-easy install instructions at <a href="http://nodejs.org/">nodejs.org</a>

After you fork or clone this repo, you'll need to install all of the dependencies. You can do this by navigating to the root directory of the project and running `npm install`. This will install all of the required dependencies in the node_modules folder. You should not alter files in this folder. 

Then type `grunt` in your terminal and leave it running in the background. This will automatically compile your Jade, SASS and minify your images. 

You will be working in the source folder, and the site will be fully compiled in the build folder. 

**tl;dr - run this in your terminal `git clone https://github.com/phazonoverload/yrs-foc-14.git && cd yrs-foc-14 && npm install && grunt`**

## Prepro... what?

Preprocessors allow you to write languages with juiced-up features that aren't included in the language. Of course, the browser doesn't understand these languages, so they must be compiled in the HTML and CSS before they can be used. 

Grunt takes care of this, but we need to go through the syntax differences together to make sure you know how to change things. 

We are using two preprocessors - <a href="">Jade</a> for HTML and <a href="">SASS</a> for CSS.

## How are the files organised?

	.
	+-- source
	|	+-- img/
	|	+-- jade/
	|		+-- partials/
	|			+-- _partials.jade // Things that are on every page, such as the <head> and <header>
	|		+-- centre-leads.jade
	|		+-- centres.jade
	|		+-- contact.jade
	|		+-- index.jade
	|		+-- international-participants.jade
	|		+-- media.jade
	|		+-- mentors.jade
	|		+-- parents.jade
	|		+-- participants.jade
	|		+-- resources.jade
	|		+-- venue.jade
	|	+-- js/
	|	+-- scss/
	|		+-- pages/
	|			+-- templates/
	|				+-- partials/
	|					+-- elements/
	|						+-- base/
	|							+-- bourbon/ // SASS Framework
	|							+-- neat/ // Grid system
	|							+-- _base.scss // @import all other files in this directory
	|							+-- _color.scss
	|							+-- _reset.scss // Global reset
	|							+-- _type.scss // All typography rules
	|						+-- _elements.scss // @import all other files in this directory, and the contents of the base/ directory
	|					+-- _header.scss
	|					+-- _footer.scss
	|					+-- _partials.scss // @import all other files in this directory, and the contents of the elements/ directory
	|				+-- _information.scss // For all of the informational pages, which share styling
	|				+-- _templates.scss // @import all other files in this directory, and the contents of the partials/ directory
	|			+-- _centres.scss
	|			+-- _contact.scss
	|			+-- _index.scss
	|			+-- _media.scss
	|			+-- _pages.scss
	|			+-- _resources.scss
	|			+-- _venue.scss
	|		+-- style.scss // @import all other files in this directory, and the contents of the pages/ directory 
	|		+-- _responsive.scss // All responsive styling

## To do

* Remove most page-specific .scss files in favour of templates.
* Grab data from existing back-end for the centres page instead of using an iframe.
* Create loop on _index.scss for background image.