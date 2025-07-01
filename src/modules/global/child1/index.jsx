import React, { useContext, useEffect, useState } from 'react'
import MyContext from '../../../contexts/myContext'

function Child1({ setParentState, callBkFn }) {
    const { setGlobalData } = useContext(MyContext)

    const [childState1, setChildState1] = useState('child 1')
    useEffect(() => {
        // setParentState(childState1)
        // callBkFn(childState1)
        setGlobalData(childState1)
    }, [])

    return (
        <div style={{ backgroundColor: 'yellow' }}>
            child 1
        </div>
    )
}

export default Child1
