'use strict';

var path = require('path');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;
var _ = require('lodash');

module.exports = function(config) {
  gulp.task('styles-reload', ['styles'], function() {
    return buildStyles()
      .pipe(browserSync.stream());
  });

  gulp.task('styles', function() {
    return buildStyles();
  });

  var buildStyles = function() {
    var sassOptions = {
      style: 'expanded'
    };

    var injectFiles = gulp.src([
      path.join(config.paths.src, '/app/**/*.scss'),
      path.join('!' + config.paths.src, '/app/index.scss')
    ], { read: false });

    var injectOptions = {
      transform: function(filePath) {
        filePath = filePath.replace(config.paths.src + '/app/', '');
        return '@import "' + filePath + '";';
      },

      starttag: '// injector',
      endtag: '// endinjector',
      addRootSlash: false
    };

    return gulp.src([
      path.join(config.paths.src, '/app/index.scss')
    ])
      .pipe($.inject(injectFiles, injectOptions))
      .pipe(wiredep(_.extend({}, config.wiredep)))
      .pipe($.sourcemaps.init())
      .pipe($.sass(sassOptions)).on('error', config.errorHandler('Sass'))
      .pipe($.autoprefixer()).on('error', config.errorHandler('Autoprefixer'))
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest(path.join(config.paths.tmp, '/serve/app/')));
  };
};
