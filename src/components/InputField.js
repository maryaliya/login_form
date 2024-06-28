import React from 'react';
import './index.css'; // Ensure you have this CSS file

const InputField = ({ type, placeholder, icon }) => {
    return (
        <div className="input-field">
            <div className="icon">{icon}</div>
            <input type={type} placeholder={placeholder} />
        </div>
    );
};

export default InputField;
