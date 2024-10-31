//app\user\create\page.tsx
"use client";


import MarcaFormContainer from "../MarcaFormContainer";

const CreateMarcaPage = () => {
    
    return (
        <MarcaFormContainer uri={"http://127.0.0.1:8000/api/marca"}/>
    );
};

export default CreateMarcaPage;