var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];

var cssFiles = [
    './node_modules/mediaelement/build/mediaelementplayer.css'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('copy', function () {
    gulp.src(cssFiles).pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass', 'copy'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
