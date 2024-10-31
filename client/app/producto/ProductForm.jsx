import React from 'react';
import InputField from '../components/InputField';
import Dropdown from './Dropdown';
import DropdownMarca from './DropdownMarca';
import Link from 'next/link'; // Asegúrate de que estás usando la librería correcta para Link

const ProductForm = ({ userField, changeProductoFieldHandler, selectedOption, toggleDropdown, isOpen, handleOptionClick, onSubmitChange, marcas, handleMarcaChange }) => {
    return (
        <div className='bg-blue-400 h-screen content-center'>
            <div className="max-w-md mx-auto  bg-slate-900 h-auto w-auto bg-gradient-to-r from-blue-500 to-blue-900 justify-self-center p-10 rounded-3xl">
                <h1 className="text-2xl text-center pt-5">Gestión del Producto</h1>
                <div className="max-w-md mx-auto mt-5 text-center">
                    <form>
                        <InputField
                            label="Nombre"
                            name="nombre"
                            type="text"
                            value={userField.nombre}
                            onChange={changeProductoFieldHandler}
                        />
                        <Dropdown
                            label="Unidad de medida"
                            selectedOption={selectedOption}
                            toggleDropdown={toggleDropdown}
                            isOpen={isOpen}
                            handleOptionClick={handleOptionClick}
                        />
                        <InputField
                            label="Observaciones"
                            name="observaciones"
                            type="text"
                            value={userField.observaciones}
                            onChange={changeProductoFieldHandler}
                        />
                        <DropdownMarca
                            label="Marca"
                            userField={userField}
                            handleMarcaChange={handleMarcaChange}
                            marcas={marcas}
                        />
                        <InputField
                            label="Cantidad inventario"
                            name="cant_inv"
                            type="number"
                            value={userField.cant_inv}
                            onChange={changeProductoFieldHandler}
                        />
                        <InputField
                            label="Fecha de embarque"
                            name="fecha_embarque"
                            type="date"
                            value={userField.fecha_embarque}
                            onChange={changeProductoFieldHandler}
                        />
                        <Link href="/" className="btn btn-error m-4">Atras</Link>
                        <button type="button" className="btn btn-primary m-4" onClick={onSubmitChange}>
                            Siguiente
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;