//app\user\create\page.tsx
"use client";

import React from "react";
import ProductFormContainer from '../../ProductFormContainer';
import { useParams } from 'next/navigation'

export default function EditProductoPage(){
    const {id}=useParams();
    return (
        <ProductFormContainer  uri={"http://127.0.0.1:8000/api/producto/"+id}/>
    );
};
