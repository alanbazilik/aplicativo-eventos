<?php

namespace App\Http\Controllers;

use App\Models\Eventos;
use Illuminate\Http\Request;

class EventosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Eventos::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
 

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Eventos::create([
            'Name' => $request->nome_eventos,
            'desquicao_evento' => $request->desquicao_evento,
            'Valor' => $request->Valor,
            'Local' => $request->Local,
            'Data' => $request->Data,
            'quantidade' => $request->quantidade,
            'image' => $request->image,
            'status' =>$request->status
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Eventos  $eventos
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request,Eventos $eventos)
    {
        return $eventos;
    }
 
   

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Eventos  $eventos
     * @return \Illuminate\Http\Response
     */
    public function destroy(Eventos $eventos)
    {
        $eventos->delete();
    }
}
