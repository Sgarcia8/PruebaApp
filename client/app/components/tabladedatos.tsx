"use client";

import React, { useEffect, useState } from "react";
import axios from 'axios'
import Link from "next/link";

export default function Productos() {
    const [productoData, setProductoData] = useState<Producto[]>([]);
    const [marcas, setMarcas] = useState<Marca[]>([]); // Estado para almacenar las marcas
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const result = await axios.get("http://127.0.0.1:8000/api/producto");
            setProductoData(result.data || []);
            const marca = await axios.get("http://127.0.0.1:8000/api/marca");
            setMarcas(marca.data || []);
        } catch (err) {
            console.log("somthing Wrong");
        }
    }

    const handleDelete = async (id: Number) => {
        // Confirmar si el usuario realmente quiere eliminar el elemento
        const confirmar = window.confirm("¿Estás seguro de que deseas eliminar este elemento?");
        console.log(confirmar)
        if (confirmar) {
            await axios.delete("http://127.0.0.1:8000/api/producto/" + id);
            const newProductoData = productoData.filter((item) => {
                return (
                    item.id !== id
                )
            })
            setProductoData(newProductoData);
        } else {
            console.log("Eliminación cancelada");
        }
    }
    return (
        <table className="table table-md">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th className="py-3 px-6">#</th>
                    <th className="py-3 px-6">Nombre</th>
                    <th className="py-3 px-6">Unidad de medida</th>
                    <th className="py-3 px-6">Observaciones</th>
                    <th className="py-3 px-6">Marca</th>
                    <th className="py-3 px-6">Cantidad inventario</th>
                    <th className="py-3 px-6">Fecha deembarque</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {productoData.map((rs, index) => (
                    <tr key={rs.id} className="bg-white border-b text-gray-700">
                        <td className="py-3 px-6">{index + 1}</td>
                        <td className="py-3 px-6">{rs.nombre}</td>
                        <td className="py-3 px-6">{rs.unid_med}</td>
                        <td className="py-3 px-6">{rs.observaciones}</td>
                        <td className="py-3 px-6">{marcas.find(marca => marca.id === rs.marca_id)?.nombre}</td>
                        <td className="py-3 px-6">{rs.cant_inv}</td>
                        <td className="py-3 px-6">{rs.fecha_embarque}</td>
                        <td className="flex justify-center gap-1 py-3">
                            <Link
                                href={`/producto/edit/${rs.id}`}
                                className="btn btn-primary">
                                Edit
                            </Link>
                            <button onClick={() => handleDelete(rs.id)} className="btn btn-secondary">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}