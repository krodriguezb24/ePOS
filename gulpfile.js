// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function(){
  return gulp.src('app/assets/stylesheets_sass/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/assets/stylesheets_css'))
})

gulp.task('style_min', function(){
  return gulp.src('app/assets/stylesheets_sass/*.scss')
  .pipe(sass())
  .pipe(minifyCSS())
  .pipe(concat('style_main.min.css'))
  .pipe(gulp.dest('app/assets/stylesheets_css'))
})

gulp.task('watch', ()=> {
  gulp.watch('app/assets/stylesheets_sass/*.scss', gulp.series('style_min'))
})