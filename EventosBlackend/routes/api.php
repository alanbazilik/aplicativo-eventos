<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::Get("Eventos","App\Http\Controllers\EventosController@index");
Route::post("Eventos ","App\Http\Controllers\eventosController@index");
Route::get("Eventos/{Eventos}","App\Http\Controllers\eventosController@show");
Route::put("Eventos/{Eventos}","App\Http\Controllers\eventosController@update");
Route::delete("Eventos/{Eventos}","App\Http\Controllers\eventosController@destroy");

Route::Get("Logins","App\Http\Controllers\LoginController@index");
Route::post("Logins","App\Http\Controllers\LoginController@store");
Route::get("Logins/{Logins}","App\Http\Controllers\LoginController@show");
Route::put("Logins/{Logins}","App\Http\Controllers\LoginController@update");
Route::delete("Logins/{Logins}","App\Http\Controllers\LoginController@destroy");

