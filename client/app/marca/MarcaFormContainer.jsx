"use client";

import React, { useState, useEffect } from 'react';
import MarcaForm from './MarcaForm';
import axios from 'axios'


const MarcaFormContainer = ({ uri }) => {
    const { id } = uri.charAt(uri.length - 1);
    const [marcaField, setMarcaField] = useState({
        nombre: '',
        referencia: "",
    });

    useEffect(() => {
        if (isLastCharacterNumber(uri)) {
            fetchMarca();
        }
    }, [id]);

    const changeMarcaFieldHandler = (e) => {
        setMarcaField({
            ...marcaField,
            [e.target.name]: e.target.value
        });
    }

    const fetchMarca = async () => {
        try {
            const result = await axios.get(uri);
            setMarcaField(result.data.marca);
        } catch (err) {
            console.log("Something Wrong");
        }
    }

    function isLastCharacterNumber(str) {
        const lastChar = str.charAt(str.length - 1);
        return !isNaN(lastChar) && lastChar !== ' '; // Asegúrate de que no sea un espacio en blanco
    }


    const verificarCamposVacios = () => {
        const hayCamposVacios = Object.values(marcaField).some(value => value === '');
        return hayCamposVacios;
    };


    const onSubmitChange = async (e) => {
        e.preventDefault();

        if (!verificarCamposVacios()) {
            try {

                if (!isLastCharacterNumber(uri)) {
                    await axios.post(uri, marcaField);
                    window.location.href = '/marca';
                }
                else {
                    await axios.put(uri, marcaField);
                    window.location.href = '/marca';
                }
            } catch (err) {
                console.log(err);
            }
        }
        else {
            alert("Por favor, completa todos los campos.");
            return;
        }
    };

    return (
        <MarcaForm
            marcaField={marcaField}
            changeMarcaFieldHandler={changeMarcaFieldHandler}
            onSubmitChange={onSubmitChange}
        />
    );
};

export default MarcaFormContainer;