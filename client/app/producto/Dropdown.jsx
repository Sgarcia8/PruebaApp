import React from 'react';

const Dropdown = ({ label, selectedOption, toggleDropdown, isOpen, handleOptionClick }) => {
    return (
        <div className="mb-5">
            <label className="block text-white font-medium text-gray-900">
                {label}
            </label>
            <div className="dropdown">
                <button onClick={toggleDropdown} type="button" className="dropdown-toggle btn btn-active btn-neutral input-primary mt-2">
                    {selectedOption}
                </button>
                {isOpen && (
                    <ul className="dropdown-menu btn btn-active btn-neutral m-3 p-3">
                        <li onClick={() => handleOptionClick("Unidad")}>Unidad</li>
                        <li onClick={() => handleOptionClick("Display")}>Display</li>
                        <li onClick={() => handleOptionClick("Caja")}>Caja</li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Dropdown;