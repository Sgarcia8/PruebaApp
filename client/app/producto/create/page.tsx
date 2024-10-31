//app\user\create\page.tsx
"use client";
import ProductFormContainer from '../ProductFormContainer';

const CreateProductoPage = () => {
    return (
        <ProductFormContainer  uri={"http://127.0.0.1:8000/api/producto"}/>
    );
};

export default CreateProductoPage;