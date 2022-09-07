<?php

namespace App\Http\Controllers;

use App\Models\login;
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
        return $logins;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\login  $login
     * @return \Illuminate\Http\Response
     */
    public function edit(login $login)
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
       $logins->delete(); 
    }
    public function login(Request $request)
    {
        // return login::create([
        //     'name' => $request->name,
        //     'sobrenome' => $request->sobrenome,
        //     'sexo' => $request->sexo,
        //     'email' => $request->email,
        //     'password' => $request->password,
        //     'telefone' => $request->telefone,
        //     'Endereco' => $request->Endereco,
        //     'cpf' =>$request->cpf 
        // ]);
        $user = User::firstWhere('email',&)
        if(){

        }else{}
    }
}
