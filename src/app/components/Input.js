import React from 'react';

function Input({ id, label, type, value, onChange }) {
    return (
        <div className='input-container'>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;
