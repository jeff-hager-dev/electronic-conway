'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');
var browserify = require('browserify');
var source = require('vinyl-source-stream');


var paths = {
  "output": "./dist",
  "templates": ["./app/**/*template.html"],
  "sassFiles": "./app/style/main.scss",
  "indexHtml": "./app/index.html",
  "appScripts": ["./app/display/*.js", "./app/cell.js", "./app/board.js", "./app/main.js" ]// Order matters here
};

gulp.task('browserify', function() {
  // Grabs the app.js file
  return browserify('./libs.js')
    .bundle()
    .pipe(source('libs.js'))
    .pipe(gulp.dest(paths.output));
});


gulp.task('scripts', function() {
  return gulp.src(paths.appScripts)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(paths.output));
});

gulp.task('template', function () {
  return gulp.src(paths.templates)
    .pipe(templateCache('templates.js', {module: "conway"}))
    .pipe(gulp.dest(paths.output));
});

gulp.task('sass', function () {
  gulp.src(paths.sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.output + '/css'));
});

gulp.task('clean:dist', function () {
  return gulp.src(paths.output, {read: false})
    .pipe(clean({force: true}));
});

gulp.task('copy:index', function () {
  return gulp
    .src(paths.indexHtml)
    .pipe(gulp.dest(paths.output));
});

gulp.task('build', function (callback) {
  runSequence(
    'clean:dist',
    ['scripts', 'browserify', 'sass', 'template', 'copy:index']
    , function (error) {
      if (error) {
        console.log(error.message);
      } else {
        console.log('RELEASE FINISHED SUCCESSFULLY');
      }
      callback(error);
    });
});


