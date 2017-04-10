const gulp        = require('gulp');
const browserSync = require('browser-sync');
const config      = require('../config').sass;
const $           = require('gulp-load-plugins')();


gulp.task('sassAll', ['sassConcat'], () => {
  return gulp.src([
    config.dest + 'bundle.min.css'
  ])
  .pipe($.replace(/@charset "UTF-8";/g, ''))
  .pipe($.header('@charset "UTF-8";\n'))
  .pipe(gulp.dest(config.dest))
  .pipe(browserSync.reload({
    stream: true,
    once: true
  }));
});

gulp.task('sassConcat', ['sass'], () => {
  return gulp.src([
    config.font,
    'node_modules/yakuhanjp/dist/css/yakuhanjp_s.min.css',
    'node_modules/swiper/dist/css/swiper.min.css',
    config.dest + 'all.css'
  ])
  .pipe($.concat('bundle.min.css'))
  .pipe(gulp.dest(config.dest))
});

gulp.task('sass', () => {
  return gulp.src(config.src)
  .pipe($.sass().on('error', $.sass.logError))
  .pipe($.pleeease({
    minifier: false, //true or false
    out: 'all.css'
  }))
  .pipe(gulp.dest(config.dest))
});
