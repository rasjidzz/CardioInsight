<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;


// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', [LoginController::class, 'index']);
Route::get('/', [LoginController::class, 'index']);
