<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class login extends Model
{
    use HasFactory;
    protected $fillable = [
    "name",
    "sobrenome",
    "sexo",
    "email",
    "password",
    "telefone",
    "Endereco",
    "cpf"
    
];
}
