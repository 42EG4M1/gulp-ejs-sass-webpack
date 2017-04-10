const gulp        = require('gulp');
const config      = require('../config').del;
const del         = require('del');


gulp.task('del', () => {
  del([
    config.dest + 'styles/all.css'
  ]);
});
