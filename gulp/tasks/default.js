const gulp        = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', (callback) => {
  runSequence(
    ['ejs', 'sass', 'js', 'imagemin'],
    'bs',
    'watch',
    callback
  );
});