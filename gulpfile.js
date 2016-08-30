var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('js', function() {
	console.log('===start processing javascript files===');
	gulp.src('js/*.js')
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
	console.log('===end processing javascript files===');
});

gulp.task('css', function() {
	console.log('===start processing css files===');
	gulp.src('styles/normalize/normalize.css')
		.pipe(minifycss())
		.pipe(rename('normalize.min.css'))
		.pipe(gulp.dest('dist/styles/'));
	gulp.src('styles/*.css')
		.pipe(concat('styles.min.css'))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/styles/'))
	console.log('===end processing css files===');
})

gulp.task('default',['js']);