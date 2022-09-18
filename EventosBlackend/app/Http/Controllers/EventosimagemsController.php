<?php

namespace App\Http\Controllers;

use App\Models\Eventosimagems;
use Illuminate\Http\Request;

class EventosimagemsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
//

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
  
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Eventosimagems  $eventosimagems
     * @return \Illuminate\Http\Response
     */
    public function show(Eventosimagems $eventosimagems)
    {
     ;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Eventosimagems  $eventosimagems
     * @return \Illuminate\Http\Response
     */
    public function edit(Eventosimagems $eventosimagems)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Eventosimagems  $eventosimagems
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Eventosimagems $eventosimagems)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Eventosimagems  $eventosimagems
     * @return \Illuminate\Http\Response
     */
    public function destroy(Eventosimagems $eventosimagems)
    {
       
    }
//     public function newEvent(Request $request){
//         $parametre =$request->all();
    
//         if ($request->hasFile('image')) {
//             if($request->file('image')->isValid()) {
//                 try {
//                     $file = $request->file('image');
//                     $image = base64_encode($file);
//                     echo $image;
    
    
//                 } catch (FileNotFoundException $e) {
//                     echo "catch";
    
//                 }
//             }
//         }
// }
}
