<?php

namespace App\Http\Controllers;

use App\Models\Marca;
use App\Http\Requests\MarcaStoreRequest;

use Illuminate\Http\Request;


class MarcaController extends Controller
{

    public function index()
    {
        return Marca::all();
    }

    public function store(MarcaStoreRequest $request)
    {
        try { // Crea una nueva marca 
            Marca::create([
                'nombre' => $request->nombre,
                'referencia' => $request->referencia,
            ]);

            // Return Json Response
            return response()->json([
                'message' => "Marca creada."
            ], 200);
        } catch (\Exception $e) {


            // Retorna respuesta JSON en caso de error
            return response()->json([
                'message' => "Something went really wrong!",
                'error' => $e->getMessage() // Incluye el mensaje de error
            ], 500);
        }
    }

    public function show($id)
    {
        // Marca Detail 
        $marca = Marca::find($id);
        if (!$marca) {
            return response()->json([
                'message' => 'Marca no encontrada.'
            ], 404);
        }

        // Return Json Response
        return response()->json([
            'marca' => $marca
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(MarcaStoreRequest $request, $id)
    {

        // buscar marca
        $marca = Marca::find($id);
        if (!$marca) {
            return response()->json([
                'message' => 'Marca no encontrada.'
            ], 404);
        }
        // Actualiza los campos del producto
        $marca->nombre = $request->nombre;
        $marca->referencia = $request->referencia;


        $marca->save();

        return response()->json($marca, 200); // Devolver el producto actualizada

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Detail 
        $marca = Marca::find($id);
        if (!$marca) {
            return response()->json([
                'message' => 'Marca no encontrada'
            ], 404);
        }

        // Delete marca
        $marca->delete();

        // Return Json Response
        return response()->json([
            'message' => 'La marca fue eliminada'
        ], 200);
    }
}
