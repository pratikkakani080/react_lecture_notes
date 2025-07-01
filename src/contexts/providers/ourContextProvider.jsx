import React, { useState } from 'react'
import OurContext from '../ourContext'

function OurContextProvider({ children }) {
    const a = 'test'
    const b = 'test2'
    const c = 4444

    return (
        <OurContext.Provider value={{ a, b, c }}>
            {children}
        </OurContext.Provider>
    )
}

export default OurContextProvider
