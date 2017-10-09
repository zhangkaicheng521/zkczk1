var gulp = require('gulp'),
    gulpUglify = require('gulp-uglify');
    gulp.task('jsmin',function(){
        gulp.src('./js1.js').pipe(gulpUglify()).pipe(gulp.dest('./dist/js'));
    })