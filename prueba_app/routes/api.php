<?php

use App\Http\Controllers\MarcaController;
use App\Http\Controllers\ProductoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


//rutas producto
Route::get('/producto', [ProductoController::class, 'index']);
Route::get('/producto/{id}', [ProductoController::class, 'show']);
Route::post('/producto', [ProductoController::class, 'store']);
Route::put('/producto/{id}', [ProductoController::class, 'update']);
Route::delete('/producto/{id}', [ProductoController::class, 'destroy']);


//rutas marca
Route::get('/marca', [MarcaController::class, 'index']);
Route::get('/marca/{id}', [MarcaController::class, 'show']);
Route::post('/marca', [MarcaController::class, 'store']);
Route::put('/marca/{id}', [MarcaController::class, 'update']);
Route::delete('/marca/{id}', [MarcaController::class, 'destroy']);

