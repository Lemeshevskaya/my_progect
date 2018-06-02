var gulp = require('gulp'),
    uglify = require('gulp-uglify');

// Gulp Uglify
gulp.task('gulp-uglify', function(){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
});

