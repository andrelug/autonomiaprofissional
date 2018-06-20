const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

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

gulp.task('watch', () => {
  gulp.run('sass:watch');
});

gulp.task('build', () => {
  gulp.run('sass');
});

gulp.task('default', ['build', 'watch']);
