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

gulp.task('watch', function() {
	gulp.watch('src/**/*.jsx', ['jsx']);
})

gulp.task('default', ['jsx', 'watch'])