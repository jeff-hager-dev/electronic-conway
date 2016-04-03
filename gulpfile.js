
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var copy = require('gulp-copy');

var bases = {
  'app': './app',
  'dist': './dist'
};


gulp.task('sass', function () {
  return gulp.src(bases.app+'/style/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(bases.app+'/css'));
});

gulp.task('copy:index', function(){
  return gulp
    .src(bases.app+'/index.html')
    .pipe(gulp.dest(bases.dist));
});

