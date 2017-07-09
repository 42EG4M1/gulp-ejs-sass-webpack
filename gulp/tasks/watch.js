const gulp   = require('gulp');
const config = require('../config');
const $      = require('gulp-load-plugins')();

gulp.task('watch', () => {
  $.watch(config.ejs.watch, function(event) {
    gulp.start(['ejs']);
  });
  $.watch(config.sass.watch, function(event) {
    gulp.start(['sassAll']);
  });
  $.watch(config.js.watch, function(event) {
    gulp.start(['js']);
  });
  $.watch(config.image.watch, function(event) {
    gulp.start(['imagemin']);
  });
});
