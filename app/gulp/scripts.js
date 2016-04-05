'use strict';

var path = require('path');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();

module.exports = function(config) {
  gulp.task('scripts-reload', function() {
    return buildScripts()
      .pipe(browserSync.stream());
  });

  gulp.task('scripts', function() {
    return buildScripts();
  });

  function buildScripts() {
    return gulp.src(path.join(config.paths.src, '/app/**/*.js'))
      .pipe($.eslint())
      .pipe($.eslint.format())
      .pipe($.jscs())
      .pipe($.jscs.reporter())
      .pipe($.size())
  };
};
