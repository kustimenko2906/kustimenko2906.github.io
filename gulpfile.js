'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel');

/*
 Styles
 */
gulp.task('sass', function () {
    return gulp.src('./assets/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./public/dist/css'));
});

gulp.task('sass:dev', function () {
    return gulp.src('./assets/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/dist/css'));
});

gulp.task('watch', function () {
    gulp.watch([
        './assets/sass/**/*.scss',
        './scripts/**/*.js'
    ], ['sass:dev', 'scripts:build']);
});

/*
 Html
 */
gulp.task('html:build', function () {
    gulp.src('./src/html/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('./public'));
});

/*
Js
 */
gulp.task('scripts:build', function() {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/dist/js'));
});


/*
 Default Build task
 */

gulp.task(
    'default', [
        'sass:dev',
        'html:build',
        'scripts:build'
    ]
);
