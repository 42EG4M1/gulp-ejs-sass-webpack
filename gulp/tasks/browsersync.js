const gulp        = require('gulp');
const browserSync = require('browser-sync');
const config      = require('../config').root;

gulp.task('bs', () => {
  browserSync.init(null, {
    server: {
      baseDir: config.dest
    }
  });
});

gulp.task('bsReload', () => {
  browserSync.reload();
});