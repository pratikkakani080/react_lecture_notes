
import React, { useContext, useEffect } from 'react'
import MyContext from '../../../contexts/myContext';

function Child2({ parentState }) {
const { globalData } = useContext(MyContext)

    useEffect(() => {
        console.log('state from child 1 ==>', globalData);

    }, [globalData])
    return (
        <div style={{ backgroundColor: 'green' }}>
            child 2
        </div>
    )
}

export default Child2
