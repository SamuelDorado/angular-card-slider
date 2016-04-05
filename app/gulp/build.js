'use strict';

var path = require('path');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

module.exports = function(config) {
  gulp.task('clean', function() {
    return $.del([path.join(config.paths.dist, '/'), path.join(config.paths.tmp, '/')]);
  });

  gulp.task('build', ['clean'], function() {
    gulp.start('dist');
  });

  gulp.task('dist:bower', ['jade', 'inject'], function() {
    return gulp.src([
      'bower_components/**'
    ], { base: './', dot: true }
  ).pipe(gulp.dest(config.paths.dist));
  });

  gulp.task('dist:static', ['jade', 'inject'], function() {
    return gulp.src([
      config.paths.tmp + '/serve/**'
    ], { base: config.paths.tmp + '/serve', dot: true }
  ).pipe(gulp.dest(config.paths.dist + '/'));
  });

  gulp.task('dist:src', function() {
    return gulp.src([
      config.paths.src + '/**'
    ], { base: config.paths.src, dot: true }
    ).pipe(gulp.dest(config.paths.dist));
  });

  gulp.task('dist', ['dist:bower', 'dist:static', 'dist:src']);
};
