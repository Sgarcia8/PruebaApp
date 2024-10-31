<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductoStoreRequest;
use App\Models\Producto;
use Illuminate\Http\Request;



class ProductoController extends Controller
{

    public function index()
    {
        return Producto::all();
    }

    public function store(ProductoStoreRequest $request)
    {

        try { // Crea un nuevo producto 
            Producto::create([
                'nombre' => $request->nombre,
                'unid_med' => $request->unid_med,
                'marca_id' => $request->marca_id, //asociar a marca
                'observaciones' => $request->observaciones,
                'cant_inv' => $request->cant_inv,
                'fecha_embarque' => $request->fecha_embarque,
            ]);

            // Return Json Response
            return response()->json([
                'message' => "Producto creado."
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
        // Producto Detail 
        $producto = Producto::find($id);
        if (!$producto) {
            return response()->json([
                'message' => 'Producto no encontrado.'
            ], 404);
        }

        // Return Json Response
        return response()->json([
            'producto' => $producto
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductoStoreRequest $request, $id)
    {
        try { // Find producto by id
            $producto = Producto::find($id);
            if (!$producto) {
                return response()->json([
                    'message' => 'Producto no encontrado.'
                ], 404);
            }

            // Actualiza los campos del producto

            $producto->nombre = $request->nombre;
            $producto->unid_med = $request->unid_med;
            $producto->marca_id = $request->marca_id; //asociar a marca
            $producto->observaciones = $request->observaciones;
            $producto->cant_inv = $request->cant_inv;
            $producto->fecha_embarque = $request->fecha_embarque;

            $producto->save();

            return response()->json($producto, 200); // Devolver el producto actualizada
        } catch (\Exception $e) {

            // Retorna respuesta JSON en caso de error
            return response()->json([
                'message' => "Something went really wrong!",
                'error' => $e->getMessage() // Incluye el mensaje de error
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $producto = Producto::find($id);
        if (!$producto) {
            return response()->json([
                'message' => 'Producto no encontrado.'
            ], 404);
        }

        // Delete User
        $producto->delete();

        // Return Json Response
        return response()->json([
            'message' => 'El producto fue eliminada'
        ], 200);
    }
}
