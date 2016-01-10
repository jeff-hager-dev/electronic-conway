'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var aTemplateCache = require('gulp-angular-templatecache');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');

var paths = {
  "output": "./dist",
  "templates": ["./app/board/template.html"],
  "sassFiles": ["./app/style/**/main.scss"]
};

gulp.task('templates', function () {
  return gulp.src(paths.templates)
    .pipe(aTemplateCache("templates.js"))
    .pipe(gulp.dest(paths.output + '/'))

});

gulp.task('sass', function () {
  gulp.src(paths.sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.output + '/styles'));
});

gulp.task('clean-dist', function () {
  return gulp.src(paths.output, {read: false})
    .pipe(clean({force: true}));
});

gulp.task('build-app', function (callback) {
  runSequence(
    'clean-dist',
    ['sass', 'templates']
    , function (error) {
      if (error) {
        console.log(error.message);
      } else {
        console.log('RELEASE FINISHED SUCCESSFULLY');
      }
      callback(error);
    });
});


