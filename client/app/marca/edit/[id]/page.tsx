//app\user\create\page.tsx
"use client";

import React, { useEffect, useState } from "react";
import axios from 'axios'
import Link from "next/link";
import { useParams } from 'next/navigation'
import MarcaFormContainer from "../../MarcaFormContainer";

export default function EditProductoPage(){
    const {id}=useParams();
            
    return (
        <MarcaFormContainer uri={"http://127.0.0.1:8000/api/marca/"+id}/>
    );
};
