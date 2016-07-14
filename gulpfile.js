var elixir = require('laravel-elixir');

var gulp = require('gulp');

var ext = require('gulp-ext-replace');

var uglify = require('gulp-uglify');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var Task = elixir.Task;

elixir.extend('uglify', function() {

	new Task('uglify', function() {
		gulp.src('resources/assets/js/angular/*.js')
        .pipe(uglify())
        .pipe(ext('-min.js'))
        .pipe(gulp.dest('resources/assets/js/app/apple.js'));
	});	
 
});


elixir(function(mix) {
    mix.uglify()
    	.sass('app.scss')
    	.scripts([
    		'app/*.js',
    		'angular/users/*.js'
    	 ]);

});
