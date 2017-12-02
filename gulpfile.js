"use strict";

var gulp = require("gulp"),
	htmlmin = require("gulp-htmlmin"),
	imagemin = require('gulp-imagemin'),
	rename = require("gulp-rename"),
	uglify = require("gulp-uglify"),
	cleanCSS = require('gulp-clean-css');


gulp.task("optImages", function() {
	gulp.src("src/img/*")
		.pipe(imagemin())
		.pipe(gulp.dest("dist/img/"));
});

gulp.task("optViewImages", function() {
	gulp.src("src/views/images/*")
		.pipe(imagemin())
		.pipe(gulp.dest("dist/views/images/"));
});

gulp.task("minifyScripts", function() {
	gulp.src("src/js/perfmatters.js")
		.pipe(uglify())
		.pipe(gulp.dest("dist/js/"));
});

gulp.task("minifyViewScripts", function() {
	gulp.src("src/views/js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("dist/views/js/"));
});

gulp.task("minifyCSS", function() {
	gulp.src("src/css/*.css")
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest("dist/css/"));
});

gulp.task("minifyViewCSS", function() {
	gulp.src("src/views/css/*.css")
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest("dist/views/css/"));
});

gulp.task("minifyHTML", function() {
	gulp.src("src/*.html")
		.pipe(htmlmin({collapseWhitespace: true, minifyCSS: true, minifyJS: true}))
		.pipe(gulp.dest("dist/"));
});

gulp.task("minifyViewHTML", function() {
	gulp.src("src/views/*.html")
		.pipe(htmlmin({collapseWhitespace: true, minifyCSS: true, minifyJS: true}))
		.pipe(gulp.dest("dist/views/"));
});


// Gulp will run all dependenices(listed in the array) before calling the callback.
gulp.task("default", ["optImages", "optViewImages", "minifyScripts",
					 "minifyViewScripts", "minifyCSS", "minifyViewCSS",
					  "minifyHTML", "minifyViewHTML"], function() {
	console.log("Default method run!!! Check your dist directory!")
});
