# Introduction

Welcome to the **Udacity Web Optimization Project**, as implemented and completed by **Magdalena Stevens**

***

## About

This project starts with a site which needs to be improved to optimize the critical rendering path and reduce jank.
It focuses on two main pages, index.html and views/pizza.html.  Index.html needs to achieve at least a score of 90 on both
mobile and desktop on [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insight "PageSpeed Insights"). Pizza.html needs to be able to achieve 60fps for a jank-free UX. This was tested using the FPS meter in Chrome Dev Tools.

***

## Getting Started

 1. [Download](https://github.com/dreammess/maps_project "Download") or clone the files from the Github repository. 
 2. In the root directory of the project run: `npm install` to install all dependencies listed in the package.json file.
 3. Install http-server using npm install* and the command: `npm install --global http-server`
 4. Start up a local server using the command:   
 `http-server`   
Now visit the site at localhost:8080.   
Alternatively, use a local server of your own choice to view the page.
 
 \* **NOTE**: For more information on how to install npm, please visit [blog.npmjs.org](http://blog.npmjs.org/post/85484771375/how-to-install-npm "Website"

***

## Optimizations

Gulp was used to build and optimize the project. Resizing of the images was done with a short Python script.

Gulp was used for the following optimizations:

* Minify CSS
* Uglify JS
* Optimize Images
* Minimize HTML

Further optimizations of index.html include:

* Loading fonts and scripts asynchronously.
* Inlining CSS to reduce page requests.
* Adding media properties to CSS non essential for page load.
* Resizing of images with Python.

Further optimizations of pizza.html include:

* Replacing "querySelector/querySelectorAll" with getElementById and co.
* Number of pizzas were calculated using the screen height, thus reducing total number of pizzas created.
* Variable declarations were removed from inside of for loops.
* Length conditions for loops were stored in local variable to prevent unneeded calculations.
* Refactoring of the updatePositions function. 
* Refactoring of the changePizzaSizes function.

In both of the last two functions code was moved and rewritten to prevent forced synchronous layouts.
updatePositions also had a costly math calucation which was pulled out of a loop and whose results were instead
stored in a small array.

# References

Udacity:
[Udacity Website](https://www.udacity.com "Udacity")

Google:
[Chrome Dev Tools Docs](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/ "Dev Tools Docs")

Ilya Grigorik:
[igvita.com](https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html)

Treehouse:
[Treehouse Gulp Basics Course](https://teamtreehouse.com "Gulp Basics with Treehouse")

The Following Udacity Forums:  
[FPS](https://discussions.udacity.com/t/how-do-you-get-60-fps-consistently/2423)  
[Dev Tools](https://discussions.udacity.com/t/challenges-reading-dev-tools-fps/184111)  
[Web Fonts](https://discussions.udacity.com/t/loading-fonts-asynchronously/26116)

