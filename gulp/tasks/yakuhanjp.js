const gulp        = require('gulp');
const config      = require('../config').yakuhanjps;


gulp.task('yakuhanjp', () => {
  return gulp.src(config.src + "*")
  .pipe(gulp.dest(config.dest))
});
