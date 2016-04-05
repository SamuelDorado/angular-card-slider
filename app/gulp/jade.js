'use strict';

var path = require('path');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();

module.exports = function(config) {
  gulp.task('jade', function() {
    function renameToHtml(path) {
      path.extname = '.html';
    }

    return gulp.src(path.join(config.paths.src, '/app/**/*.jade'))
      .pipe($.consolidate('jade', { basedir: config.paths.src, doctype: 'html', pretty: '  ' })).on('error', config.errorHandler('Jade'))
      .pipe($.rename(renameToHtml))
      .pipe(gulp.dest(path.join(config.paths.tmp, '/serve/app/')))
      .pipe(browserSync.stream());
  });
};
