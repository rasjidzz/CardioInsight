<?php

use App\Http\Controllers\DataController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use Inertia\Inertia;



Route::get('/login', [LoginController::class, 'index']);
Route::post('/login', [LoginController::class, 'authenticate']);
Route::post('/register', [RegisterController::class, 'store']);

Route::get('/', function () {
    return Inertia::render('landing/LandingPage');
});

Route::post('/getResult', [DataController::class, 'getResult']);
Route::get('/test', [DataController::class, 'test']);
Route::post('/getData', [DataController::class, 'getData']);

//  Development 
Route::get('/getToken', [RegisterController::class, 'getToken']);
