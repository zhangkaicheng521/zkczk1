var gulp = require('gulp'),
    gulpUglify = require('gulp-uglify');
    gulp.task('jsmin',function(){
        gulp.src('./*.js').pipe(gulpUglify()).pipe(gulp.dest('./dist/js'));
    })

    gulp.task('jshb',function(){
        gulp.src('./dist/js/*.js').pipe(gulp.dest('./dist/js/hb.js'));
    })