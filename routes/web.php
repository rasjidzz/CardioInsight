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
Route::get('/homepage', function () {
    return Inertia::render('homepage/Homepage');
});
Route::get('/result', function () {
    return Inertia::render('pages/ResultPage');
});
Route::get('/history', function () {
    return Inertia::render('pages/HistoryPage');
});
Route::get('/auth', function () {
    return Inertia::render('auth/Auth');
});

Route::post('/getResult', [DataController::class, 'getResult']);
Route::get('/test', [DataController::class, 'test']);
Route::post('/getData', [DataController::class, 'getData']);

//  Development 
Route::get('/getToken', [RegisterController::class, 'getToken']);

Route::get('/admin', function () {
    return Inertia::render('adminpage/Admin');
});