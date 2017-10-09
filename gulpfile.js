var gulp = require('gulp'),
    gulpUglify = require('gulp-uglify'),
    gulpConcat = require('gulp-concat');
    // gulp.task('jsmin',function(){
    //     gulp.src('./*.js').pipe(gulpUglify()).pipe(gulp.dest('./dist/js'));
    // })

    gulp.task('jshb',function(){
        gulp.src('./*.js').pipe(gulpUglify()).pipe(gulpConcat('all.min.js')).pipe(gulp.dest('./dist/js'));
    })