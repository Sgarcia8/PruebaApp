"use client";

import React, { useEffect, useState } from "react";
import axios from 'axios'
import Link from "next/link";

export default function Productos() {
    const [productoData, setProductoData] = useState<Marca[]>([]);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const result = await axios.get("http://127.0.0.1:8000/api/marca");
            setProductoData(result.data || []);
        } catch (err) {
            console.log("somthing Wrong");
        }
    }

    const handleDelete = async (id: Number) => {
        console.log(id);
        await axios.delete("http://127.0.0.1:8000/api/marca/" + id);
        const newProductoData = productoData.filter((item) => {
            return (
                item.id !== id
            )
        })
        setProductoData(newProductoData);
    }
    return (
        <div className='bg-blue-400 h-screen content-center '>
            <div className="py-20 flex justify-center flex-col items-center h-auto w-auto bg-gradient-to-r from-blue-500 to-blue-900 justify-self-center p-10 rounded-3xl">
                <div className="flex items-center justify-between gap-1 mb-5">
                    <h1 className="text-4xl font-bold">Gestión de marcas</h1>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-md">
                        <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th className="py-3 px-6 ">#</th>
                                <th className="py-3 px-6">Nombre</th>
                                <th className="py-3 px-6">Referencia</th>
                                <th className="py-3 px-6">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productoData.map((rs, index) => (
                                <tr key={rs.id} className="bg-white border-b text-black">
                                    <td className="py-3 px-6">{index + 1}</td>
                                    <td className="py-3 px-6">{rs.nombre}</td>
                                    <td className="py-3 px-6">{rs.referencia}</td>
                                    <td className="flex justify-center gap-1 py-3">
                                        <Link
                                            href={`/marca/edit/${rs.id}`}
                                            className="btn btn-primary">
                                            Edit
                                        </Link>
                                        <button onClick={() => handleDelete(rs.id)} className="btn btn-secondary">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-2 mb-2 w-full text-left">
                        <Link
                            href="/"
                            className="btn btn-error text-left">
                            Atras
                        </Link>
                        <Link
                            href="/marca/create"
                            className="btn btn-primary m-2">
                            Crear marca
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}