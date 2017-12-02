// "use strict";

// var gulp = require("gulp"),
// 	htmlmin = require("gulp-htmlmin"),
// 	imagemin = require('gulp-imagemin'),
// 	rename = require("gulp-rename"),
// 	uglify = require("gulp-uglify"),
// 	cleanCSS = require('gulp-clean-css');

// gulp.task("optImages", function() {
// 	gulp.src("img/*")
// 		.pipe(imagemin())
// 		.pipe(gulp.dest("minimg"));
// });

// gulp.task("optImages2", function() {
// 	gulp.src("views/images/*")
// 		.pipe(imagemin())
// 		.pipe(gulp.dest("views/minimg"));
// });

// gulp.task("minifyScripts", function() {
// 	gulp.src("js/perfmatters.js")
// 		.pipe(uglify())
// 		.pipe(rename('perfmatters.min.js'))
// 		.pipe(gulp.dest("js"));
// });

// gulp.task("minifyCSS", function() {
// 	gulp.src("css/style.css")
// 		.pipe(cleanCSS({compatibility: 'ie8'}))
// 		.pipe(rename("style.min.css"))
// 		.pipe(gulp.dest("css"));
// });

// gulp.task("minifyHTML", function() {
// 	gulp.src("index.html")
// 		.pipe(htmlmin({collapseWhitespace: true}))
// 		.pipe(rename("index2.html"))
// 		.pipe(gulp.dest("."));
// });

// // Gulp will run all dependenices(listed in the array) before calling the callback.
// gulp.task("default", ["optImages", "optImages2", "minifyScripts", "minifyCSS", "minifyHTML"], function() {
// 	console.log("Default method run!!!")
// });


// Example SRC arrary:
// gulp.src(['views/images/pizza.png', 'views/images/pizzeria.jpg']).pipe(myMethod()).pipe(gulp.dest('views/images'));

// Example SRC array:
// gulp.src(['img/2048.png'].pip(myCompressor));