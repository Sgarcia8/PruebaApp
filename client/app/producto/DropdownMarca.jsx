import React from 'react';

const DropdownMarca = ({ label, userField, marcas,handleMarcaChange }) => {
    return (
        <div className="mb-5">
            <label htmlFor="marca_id" className="block text-white font-medium text-gray-900">
                {label}
            </label>
            <select
                id="marca_id"
                name="marca_id"
                value={userField.marca_id}
                onChange={handleMarcaChange}
                className="input input-bordered input-primary w-full max-w-xs mt-2"
            >
                {marcas.map(marca => (
                    <option key={marca.id} value={marca.id}>
                        {marca.nombre}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropdownMarca;