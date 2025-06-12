import React from 'react'

function Button({ buttonBgColor, handleOnClick, buttonText }) {
    return (
        <button
            style={{ backgroundColor: buttonBgColor || 'green' }}
            onClick={() => handleOnClick ? handleOnClick() : alert('Please provide a click handler')}
        >
            {buttonText || 'Button'}
        </button>
    )
}

export default Button
