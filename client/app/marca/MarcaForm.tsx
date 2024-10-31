import React from 'react';
import InputField from '../components/InputField';
import Link from 'next/link'; // Asegúrate de que estás usando la librería correcta para Link

const MarcaForm = ({ marcaField, changeMarcaFieldHandler, onSubmitChange }) => {
    return (
        <div className='bg-blue-400 h-screen content-center '>
            <div className="max-w-md mx-auto mt-5 h-auto w-auto bg-gradient-to-r from-blue-500 to-blue-900 justify-self-center p-10 rounded-3xl">
                <h1 className="text-2xl text-center pt-5">Gestión de marca</h1>
                <div className="max-w-md mx-auto mt-5 text-center">
                    <form>
                        <InputField
                            label="Nombre"
                            name="nombre"
                            type="text"
                            value={marcaField.nombre}
                            onChange={changeMarcaFieldHandler}
                        />
                        <InputField
                            label="referencia"
                            name="referencia"
                            type="number"
                            value={marcaField.referencia}
                            onChange={changeMarcaFieldHandler}
                        />
                        <Link href="/marca" className="btn btn-error m-4">Atras</Link>
                        <button type="button" className="btn btn-primary m-4" onClick={onSubmitChange}>
                            Siguiente
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MarcaForm;