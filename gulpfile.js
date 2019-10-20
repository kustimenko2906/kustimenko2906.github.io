const gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("autoprefixer"),
    babel = require('gulp-babel'),
    concat = require('gulp-concat');

let paths = {
    styles: {
        src: "scss/**/*.scss",
        dest: "./"
    }
};

let sassOptions = {
    errLogToConsole: true,
    outputStyle: "compressed",
    precision: 10
};

function style() {
  return gulp
      .src(paths.styles.src)
      .pipe(sass(sassOptions))
      .on("error", sass.logError)
      .pipe(gulp.dest(paths.styles.dest))
}

function watch() {
  gulp.watch(paths.styles.src, style);
}

exports.watch = watch;
exports.style = style;

let build = gulp.parallel(style, watch);

gulp.task('js', function () {
    return gulp.src(`${config.src}/**/*.js`)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(`${config.build}/js`))
});