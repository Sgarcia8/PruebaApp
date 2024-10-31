"use client";

import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import axios from 'axios'

const ProductFormContainer = ({ uri }) => {
    const { id } = uri.charAt(uri.length - 1);
    const [productoField, setProductoField] = useState({
        nombre: '',
        unid_med: '',
        observaciones: '',
        marca_id: '',
        cant_inv: '',
        fecha_embarque: '',
    });
    const [selectedOption, setSelectedOption] = useState('Unidad');
    const [isOpen, setIsOpen] = useState(false);
    const [marcas, setMarcas] = useState([]); // Estado para almacenar las marcas

    const changeUserFieldHandler = (e) => {
        const { name, value } = e.target;
        setProductoField((prev) => ({ ...prev, [name]: value }));
    };

    const toggleDropdown = () => setIsOpen(prev => !prev);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setProductoField((prevState) => ({
            ...prevState,
            unid_med: option, // Cambia el valor de unid_med
        }));
        setIsOpen(false);
    };
    const fetchMarcas = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/marca'); // Cambia esta ruta según tu API
            setMarcas(response.data);
            handleMarcaChangeForm(response.data[0].id)
        } catch (error) {
            console.error('Error al cargar las marcas:', error);
        }
    }
    useEffect(() => {
        if (isLastCharacterNumber(uri)) {
            fetchProducto();
        }
        fetchMarcas();
        handleOptionClick(selectedOption);

    }, [id]);

    const fetchProducto = async () => {
        try {
            const result = await axios.get(uri);
            setProductoField(result.data.producto);
            handleOptionClick(result.data.producto.unid_med);

        } catch (err) {
            console.log("Something Wrong");
        }
    }

    // Manejar el cambio en el campo de la marca
    const handleMarcaChangeForm = (e) => {
        setProductoField(prevState => ({
            ...prevState,
            marca_id: e // Guardar el id de la marca seleccionada
        }));
    };
    // Manejar el cambio en el campo de la marca
    const handleMarcaChange = (e) => {
        setProductoField(prevState => ({
            ...prevState,
            marca_id: e.target.value // Guardar el id de la marca seleccionada
        }));
    };

    function isLastCharacterNumber(str) {
        const lastChar = str.charAt(str.length - 1);
        return !isNaN(lastChar) && lastChar !== ' '; // Asegúrate de que no sea un espacio en blanco
    }

    const verificarCamposVacios = () => {
        const hayCamposVacios = Object.values(productoField).some(value => value === '');
        return hayCamposVacios;
    };

    const onSubmitChange = async (e) => {
        e.preventDefault();

        if (!verificarCamposVacios()) {
            try {

                if (!isLastCharacterNumber(uri)) {
                    await axios.post(uri, productoField);
                    window.location.href = '/';
                }
                else {
                    await axios.put(uri, productoField);
                    window.location.href = '/';
                }
            } catch (err) {
                console.log(err);
            }
        }
        else{
            alert("Por favor, completa todos los campos.");
            return;
        }
    };

    return (
        <ProductForm
            userField={productoField}
            changeProductoFieldHandler={changeUserFieldHandler}
            selectedOption={selectedOption}
            toggleDropdown={toggleDropdown}
            isOpen={isOpen}
            handleOptionClick={handleOptionClick}
            onSubmitChange={onSubmitChange}
            handleMarcaChange={handleMarcaChange}
            marcas={marcas}
            sele
        />
    );
};

export default ProductFormContainer;