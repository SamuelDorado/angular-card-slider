'use strict';

var path = require('path');
var gulp = require('gulp');
var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

module.exports = function(config) {
  gulp.task('watch', ['jade', 'inject'], function() {

    gulp.watch([path.join(config.paths.src, '/*.html'), 'bower.json'], ['inject-reload']);

    gulp.watch([
      path.join(config.paths.src, '/app/**/*.css'),
      path.join(config.paths.src, '/app/**/*.scss')
    ], function(event) {
      if (isOnlyChange(event)) {
        gulp.start('styles-reload');
      } else {
        gulp.start('inject-reload');
      }
    });

    gulp.watch(path.join(config.paths.src, '/app/**/*.js'), function(event) {
      if (isOnlyChange(event)) {
        gulp.start('scripts-reload');
      } else {
        gulp.start('inject-reload');
      }
    });

    gulp.watch(path.join(config.paths.src, '/app/**/*.jade'), ['jade']);

    gulp.watch(path.join(config.paths.src, '/app/**/*.html'), function(event) {
      browserSync.reload(event.path);
    });
  });
};
