<?php

namespace App\Http\Controllers;

use App\Models\Avaliar;
use Illuminate\Http\Request;

class AvaliarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Avaliar::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Avaliar::create([
            'nome' => $request->nome,
            'messagem' => $request->messagem,
            'nota' => $request->nota
            
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Avaliar  $avaliar
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request,Avaliar $avaliar)
    {
        return $avaliar;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Avaliar  $avaliar
     * @return \Illuminate\Http\Response
     */
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Avaliar  $avaliar
     * @return \Illuminate\Http\Response
     */
    public function destroy(Avaliar $avaliar)
    {
        $avaliar->delete();
    }
}
