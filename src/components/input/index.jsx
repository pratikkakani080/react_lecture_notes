import React from 'react'

function Input({ type, placeholder, handleOnChange, value, id }) {
    return (
        <input
            type={type || 'text'}
            placeholder={placeholder || 'Please enter text'}
            onChange={handleOnChange}
            value={value}
            id={id}
        />
    )
}

export default Input
