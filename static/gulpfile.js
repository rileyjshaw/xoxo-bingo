'use strict';

// Wow this was so unnecessary
//
// anyway...
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

gulp.task('scripts', function (entry) {
  entry = "./main.es6.js";
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: entry,
    debug: true,
    // defining transforms here will avoid crashing your stream
    transform: [babelify]
  });

  return b.bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe($.sourcemaps.init({loadMaps: true}))
      // Add transformation tasks to the pipeline here.
      .pipe($.uglify())
      .on('error', $.util.log)
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('./public/'))
});

gulp.task('sass', function () {
  return gulp.src('./main.sass')
    .pipe($.sass({ indentedSyntax: true }))
    .pipe($.autoprefixer({ browsers: [
      'ie >= 9',
      'ff >= 9',
      'Chrome >= 18',
      'Opera >= 15',
      'Safari >= 5.1',
      '> 1%',
      'last 2 versions',
      'Firefox ESR'
    ]}))
    .pipe(gulp.dest('./public/'));
});

gulp.task('watch', function () {
  gulp.watch('./main.es6.js', ['scripts']);
  gulp.watch('./main.sass', ['sass']);
});

gulp.task('default', [ 'scripts', 'sass', 'watch' ] );
