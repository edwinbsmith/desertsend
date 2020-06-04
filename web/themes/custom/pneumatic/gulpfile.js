var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var autoprefixer = require('autoprefixer');

var sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src',
  'node_modules/mediaelement/build/mediaelementplayer.css'
];

var cssFiles = [
  './node_modules/foundation-sites/dist/css/*.css',
  './node_modules/motion-ui/dist/*.css'
];

var jsFiles = [
  './node_modules/foundation-sites/dist/js/*.js',
  './node_modules/motion-ui/dist/*.js'
];

function sass() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer({browsers: ['last 2 versions', 'ie >= 9']})
    ]))
    .pipe(gulp.dest('css'));
}

function serve() {
  gulp.watch('scss/**/*.scss', sass);
}

gulp.task('copy', function () {
  gulp.src(jsFiles).pipe(gulp.dest('./js/'));
  gulp.src(cssFiles).pipe(gulp.dest('./css/'));
});

gulp.task('sass', sass);

gulp.task('default', gulp.series('sass', serve));
