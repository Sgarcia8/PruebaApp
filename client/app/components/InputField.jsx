import React from 'react';

const InputField = ({ label, name, type, value, onChange }) => {
    return (
        <div className="mb-5">
            <label htmlFor={name} className="block text-white font-medium text-gray-900">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                className="input input-bordered input-primary w-full max-w-xs mt-2"
                placeholder={label}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;