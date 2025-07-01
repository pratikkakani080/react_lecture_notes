import React, { useState } from 'react'
import MyContext from '../myContext'

function MyContextProvider({ children }) {
    const [globalData, setGlobalData] = useState('')

    return (
        <MyContext.Provider value={{ globalData, setGlobalData }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider
