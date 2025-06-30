import React, { useEffect, useState } from 'react'

function Child1({ setParentState, callBkFn }) {
    const [childState1, setChildState1] = useState('child 1')
    useEffect(() => {
        setParentState(childState1)
        callBkFn(childState1)
    }, [])

    return (
        <div style={{ backgroundColor: 'yellow' }}>
            child 1
        </div>
    )
}

export default Child1
