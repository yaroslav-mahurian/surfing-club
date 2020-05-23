const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const less = require('gulp-less');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');
const fileinclude = require('gulp-file-include');


gulp.task('server', ['styles', 'html'], function() {
	
	browserSync.init({
		server: { baseDir: './app/'}
	});

    watch(['./app/**/*.html', './app/**/*.js', './app/img/*.*']).on('change', browserSync.reload);


	watch('./app/less/**/*.less', function(){
		gulp.start('styles');
	});

	watch('./app/html/**/*.html', function(){
		gulp.start('html');
	});

});

gulp.task('styles', function() {
	return gulp.src('./app/less/main.less')
	.pipe(plumber({
		errorHandler: notify.onError(function(err){
			return {
				title: 'Styles',
				sound: false,
				message: err.message
			}
		})
	}))
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(autoprefixer({
		browsers: ['last 6 versions'],
		cascade: false
	}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./app/css'))
	.pipe(browserSync.stream());
});

gulp.task('html', function() {
	return gulp.src('./app/html/*.html')
	.pipe(plumber({
		errorHandler: notify.onError(function(err){
			return {
				title: 'HTML include',
				sound: false,
				message: err.message
			}
		})
	}))
	.pipe(fileinclude({
		prefix: '@@'
	}))
	.pipe(gulp.dest('./app/'))
});


gulp.task('default', ['server']);
