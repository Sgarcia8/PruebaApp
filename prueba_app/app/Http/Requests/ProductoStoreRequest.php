<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductoStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if(request()->isMethod('post')) {
            return [
                'nombre' => 'required|string|max:255',
                'unid_med' => 'required|string',
                'observaciones' => 'required|string',
                'marca_id' => 'required|exists:marcas,id',
                'cant_inv' => 'required|integer',
                'fecha_embarque' => 'required|date'
            ];
        } else {
            return [
                'nombre' => 'required|string|max:258',
                'unid_med' => 'required|string',
                'observaciones' => 'required|string',
                'marca_id' => 'required|exists:marcas,id',
                'cant_inv' => 'required|integer',
                'fecha_embarque' => 'required|date'
            ];
        }
    }
      
    public function messages()
    {
        if(request()->isMethod('post')) {
            return [
                'nombre.required' => 'Name is required!',
                'unid_med.required' => 'unid_med is required!',
                'observaciones.required' => 'observaciones is required!',
                'marca_id' => 'marca_id is required!',
                'cant_inv.required' => 'cant_inv is required!',
                'fecha_embarque.required' => 'fecha_embarque is required!'
            ];
        } else {
            return [
                'nombre.required' => 'Name is required!',
                'unid_med.required' => 'unid_med is required!',
                'observaciones.required' => 'observaciones is required!',
                'marca_id' => 'marca_id is required!',
                'cant_inv.required' => 'cant_inv is required!',
                'fecha_embarque.required' => 'fecha_embarque is required!'
            ];   
        }
    }
}
