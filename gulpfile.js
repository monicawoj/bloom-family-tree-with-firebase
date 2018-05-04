//Define packages (that were installed with npm install <package name> in console)
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

function swallowError (error) {
    console.log(error);
    this.emit('end')
}

//scss task
gulp.task('sass', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true,
                    outputStyle: 'expanded'})) //add normal css styling
        .on('error',swallowError)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'));
});

gulp.task("watch", function() {
    gulp.watch("src/scss/**/*.scss", ["sass"]);
});

//default task
gulp.task('default', ['sass', 'watch']);
