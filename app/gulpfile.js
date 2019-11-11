"use strict";

var gulp = require('gulp'),
	  sass = require('gulp-sass'),
	  autoprefixer = require('gulp-autoprefixer'),
	  browserSync = require('browser-sync').create();

gulp.task('compileSass', function() {
  return gulp.src("assets/css/main.scss")
    
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('watchFiles', function() {
  gulp.watch('assets/css/**/*.scss', ['compileSass']);
})

gulp.task('clean', function() {
  del(['dist', 'assets/css/main.css*', 'assets/js/main*.js*']);
});

gulp.task('serve', ['watchFiles'], function(){
  browserSync.init({
  	server: "./"
  });
});

gulp.task("default", ["clean", 'build'], function() {
  gulp.start('renameSources');
});
