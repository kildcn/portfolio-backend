<?php

use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Project routes
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{id}', [ProjectController::class, 'show']);

// Profile routes
Route::get('/profile', [ProfileController::class, 'index']);

// Health check endpoint for Render
Route::get('/health', function () {
  return response()->json(['status' => 'ok']);
});
