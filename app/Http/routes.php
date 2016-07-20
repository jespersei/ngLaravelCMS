<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('angular.index');
});

Route::group(['prefix' => '/api'], function(){
	Route::get('/users', function(){
		return "API - Users.";
	});
	Route::get('/logs', function(){
		return "API - Logs.";
	});
	Route::get('/content', function(){
		return "API - Contents.";
	});
	Route::get('/categories', function(){
		return "API - Categories.";
	});
});
