let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('0-app/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('0-app/css'));
});