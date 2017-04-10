const gulp        = require('gulp');
const config      = require('../config').ejs;
const browserSync = require('browser-sync');
const $           = require('gulp-load-plugins')();

gulp.task('ejs', () => {
  gulp.src(config.src)
  .pipe($.ejs({}, {}, {'ext': '.html'}).on('error', $.util.log))
  .pipe(gulp.dest(config.dest))
  .pipe(browserSync.reload({
    stream: true,
    once: true
  }));
});