var gulp = require('gulp');

var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

//default task:
gulp.task('default', ['sass', 'scripts']);

/* watchers:
gulp.task('watch', function() {

  gulp.watch('source/scss/*.sass', ['sass']);

});*/

gulp.task('sass', function () {
  gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.min.css', './source/scss/app.scss'])
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(concat('gadget.css'))
    .pipe(gulp.dest('./build/css/'))
    .pipe(minifyCSS())
    .pipe(rename("gadget.min.css"))
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('scripts', function() {
  return gulp.src(['./bower_components/jquery/dist/jquery.js', './source/gadgetlib.js', './source/js/*.js' ])
    .pipe(concat('gadget.js'))
    .pipe(gulp.dest('./build/js/'))
    .pipe(uglify())
    .pipe(rename("gadget.min.js"))
    .pipe(gulp.dest('./build/js/'));
});