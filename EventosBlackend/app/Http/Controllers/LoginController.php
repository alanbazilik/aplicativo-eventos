<?php

namespace App\Http\Controllers;

use App\Models\login;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return login::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // return $logins::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return login::create([
            'name' => $request->name,
            'sobrenome' => $request->sobrenome,
            'sexo' => $request->sexo,
            'email' => $request->email,
            'password' => $request->password,
            'telefone' => $request->telefone,
            'Endereco' => $request->Endereco,
            'cpf' =>$request->cpf 
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\login  $login
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request,login $login)
    {
        return $login;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\login  $login
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, login $login)
    {
        return login::edit([
            'name' => $request->name,
            'sobrenome' => $request->sobrenome,
            'sexo' => $request->sexo,
            'email' => $request->email,
            'password' => $request->password,
            'telefone' => $request->telefone,
            'Endereco' => $request->Endereco,
            'cpf' =>$request->cpf 
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\login  $login
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, login $login)
    {
        return login::update([
            'name' => $request->name,
            'sobrenome' => $request->sobrenome,
            'sexo' => $request->sexo,
            'email' => $request->email,
            'password' => $request->password,
            'telefone' => $request->telefone,
            'Endereco' => $request->Endereco,
            'cpf' =>$request->cpf 
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\login  $login
     * @return \Illuminate\Http\Response
     */
    public function destroy(login $login)
    {
       $login->delete(); 
    }
    public function stores(Request $request){
        
        $logins = login::firstWhere('email', $request['email']);
        if (!$logins) {
            return response()->json(['message' => 'E-mail incorretos.'], 404);
        }

        if (!($request['senha']== $logins['password'])) {
            return response()->json([
                'message' => 'E-mail e/ou Senha incorretos.'
            ], 401);
        }else{
            return response()->json([
                'message' => 'E-mail e/ou Senha correto.'
            ], 200);
        }
       
       
        
       
        
    }
   
}
