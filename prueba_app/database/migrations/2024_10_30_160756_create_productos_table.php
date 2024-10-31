<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('unid_med');
            $table->text('observaciones');
            $table->unsignedBigInteger('marca_id');
            $table->integer('cant_inv');
            $table->date('fecha_embarque');

            //Referencia a la clave foranea
            $table->foreign('marca_id')
            ->references('id')->on('marcas')
            ->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productos');
    }
};
