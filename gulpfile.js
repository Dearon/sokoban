var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

var dest = __dirname + '/build';
var src = __dirname + '/src';

gulp.task('html', function() {
    return gulp.src(src + '/www/*.html')
        .pipe(gulp.dest(dest));
});

gulp.task('javascript', function() {
    var bundler = browserify({
        entries: [src + '/js/sokoban.js'],
        debug: true
    });

    var bundle = function() {
        return bundler
            .bundle()
            .pipe(source('sokoban.js'))
            .pipe(buffer())
            //.pipe(uglify())
            .pipe(gulp.dest(dest + '/js'));
    };

    return bundle();
});

gulp.task('default', ['html', 'javascript']);
gulp.task('watch', function() {
    gulp.watch(src + '/www/*.html', ['html']);
    gulp.watch(src + '/js/**/*.js', ['javascript']);
});
