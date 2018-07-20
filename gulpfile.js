const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('sass', () => {
  gulp.src('./scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('js', () => {
  let components = [
  ];
  let jsDest = './assets/js/';

  gulp.src(components)
    .pipe(concat('components.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('components-min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest));
});

gulp.task('watch', ['sass:watch']);

gulp.task('build', ['sass', 'js']);

gulp.task('default', ['build', 'watch']);
