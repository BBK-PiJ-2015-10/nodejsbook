import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat'
import uglify from 'gulp-uglify';
import rename from 'gulp-rename'

export default () =>
    gulp
        .src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(babel())
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))