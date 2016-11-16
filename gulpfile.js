var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('server', ['watch'], function() {
  $.connect.server({
    root: '', 
    port: 8000, 
    livereload: true 
  })
});