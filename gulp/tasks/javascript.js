const gulp          = require('gulp');
const config        = require('../config').js;
const browserSync   = require('browser-sync');
const webpackStream = require('webpack-stream');
const webpack       = require('webpack');
const webpackConfig = require('../../webpack.config');
const $             = require('gulp-load-plugins')();

gulp.task('js', () => {
  return webpackStream(webpackConfig, webpack)
  .pipe($.uglify({
    preserveComments: 'license'
  }))
  .pipe(gulp.dest(config.dest))
  .pipe(browserSync.reload({
    stream: true,
    once: true
  }));
});