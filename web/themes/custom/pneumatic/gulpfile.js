var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var sassPaths = [
    'node_modules/foundation-sites/scss',
    'node_modules/motion-ui/src',
    'node_modules/mediaelement/build/mediaelementplayer.css'
];

gulp.task('sass', function () {
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
    gulp.src('node_modules/foundation-sites/dist/css/*.css')
        .pipe($.copy('css', {prefix: 4}));
    gulp.src('node_modules/foundation-sites/dist/js/*.js')
        .pipe($.copy('js', {prefix: 4}));
    gulp.src('node_modules/motion-ui/dist/*.css')
        .pipe($.copy('css', {prefix: 3}));
    gulp.src('node_modules/motion-ui/dist/*.js')
        .pipe($.copy('js', {prefix: 3}));
});

gulp.task('default', ['sass', 'copy'], function () {
    gulp.watch(['scss/**/*.scss'], ['sass']);
});
