"use strict";

var gulp = require("gulp"),
		browserSync = require("browser-sync"),
		sass = require("gulp-sass"),
		bourbon = require("node-bourbon").includePaths,
		neat = require("node-neat").includePaths,
		uglify = require("gulp-uglify"),
		concat = require("gulp-concat");

// Compiles all gulp tasks
gulp.task("default", ["sass", "js"]);

// Live reload anytime a file changes
gulp.task("watch", ["browserSync", "sass", "js"], function() {
	gulp.watch("src/scss/**/*.scss", ["sass"]);
	gulp.watch("src/js/*.js", ["js"]);
	gulp.watch("dist/*.html").on("change", browserSync.reload);
});

// Spin up a server
gulp.task("browserSync", function() {
	browserSync({
		server: {
			baseDir: "dist"
		}
	})
});

// Compile SASS files
gulp.task("sass", function() {
	gulp.src("src/scss/**/*.scss")
			.pipe(sass({
				includePaths: bourbon,
				includePaths: neat
			}))
			.pipe(gulp.dest("dist/css"))
			.pipe(browserSync.reload({
				stream: true
			}))
});

// Compile JS files
gulp.task("js", function() {
	gulp.src("src/js/*.js")
			.pipe(uglify())
			.pipe(concat("main.js"))
			.pipe(gulp.dest("dist/scripts/"))
			.pipe(browserSync.reload({
					stream: true
				}))
});