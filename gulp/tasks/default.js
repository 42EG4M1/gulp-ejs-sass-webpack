const gulp        = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', (callback) => {
  runSequence(
    ['ejs', 'sassAll', 'js', 'imagemin'],
    'bs',
    'del',
    'watch',
    callback
  );
});