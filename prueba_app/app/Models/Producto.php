<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;

    public $timestamps = false; // Desactiva los timestamps

    protected $fillable = [
        'nombre',
        'unid_med',
        'observaciones',
        'marca_id',
        'cant_inv',
        'fecha_embarque',
    ];

    public function Marca(){
        return $this->belongsTo(Marca::class);
    }

}
