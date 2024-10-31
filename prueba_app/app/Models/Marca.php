<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marca extends Model
{
    use HasFactory;

    public $timestamps = false; // Desactiva los timestamps

    protected $fillable = [
        'nombre',
        'referencia'
    ];


    public function notes(){
        return $this->hasMany(Producto::class);
    }

}