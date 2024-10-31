<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MarcaStoreRequest extends FormRequest
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
                'referencia' => 'required|integer'
            ];
        } else {
            return [
                'nombre' => 'required|string|max:255',
                'referencia' => 'required|integer'
            ];
        }
    }
      
    public function messages()
    {
        if(request()->isMethod('post')) {
            return [
                'nombre.required' => 'Name is required!',
                'referencia.required' => 'referencia is required!'
            ];
        } else {
            return [
                'nombre.required' => 'Name is required!',
                'referencia.required' => 'referencia is required!'
            ];   
        }
    }
}
