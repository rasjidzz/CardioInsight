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
Route::get('/auth', function () {
    return Inertia::render('auth/Auth');
});
Route::get('/admin', function () {
    return Inertia::render('adminpage/Admin');
});
Route::get('/result', function () {
    return Inertia::render('result/Result');
});
