const gulp = require('gulp');
const babel = require('gulp-babel');
const less = require('gulp-less');
const webpack = require('gulp-webpack');

gulp.task('jsx', function() {
	return gulp.src('src/**/*.jsx')
		.pipe(babel({presets: ['es2015', 'react']}))
		.pipe(gulp.dest('.temp'))
		.pipe(webpack({
			output: {filename: 'App.js'}
		}))
		.pipe(gulp.dest('Build'));
});
gulp.task('js', function() {
	return gulp.src('src/**/*.js')
		.pipe(babel({presets: ['es2015']}))
		.pipe(gulp.dest('.temp'))
		.pipe(webpack({
			output: {filename: 'App.js'}
		}))
		.pipe(gulp.dest('Build'));
});

gulp.task('less', function() {
	return gulp.src('src/Styles/*.less')
		.pipe(less())
		.pipe(gulp.dest('Build/Styles'))
})

gulp.task('watch', function() {
	gulp.watch('src/**/*.jsx', ['jsx']);
	gulp.watch('src/**/*.js', ['js']);
});

gulp.task('default', ['jsx', 'js', 'watch'])