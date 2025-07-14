import React, { useEffect, useState } from 'react'
import MyContext from '../myContext'

function MyContextProvider({ children }) {
    const [globalData, setGlobalData] = useState('')
    const [likedPosts, setLikedPosts] = useState([])

    useEffect(() => {
        setLikedPosts(JSON.parse(localStorage.getItem('likedPosts')) || [])
    }, [])

    return (
        <MyContext.Provider value={{ globalData, setGlobalData, likedPosts, setLikedPosts }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider    
