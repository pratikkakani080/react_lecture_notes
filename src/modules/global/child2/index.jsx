
import React, { useEffect } from 'react'

function Child2({ parentState }) {
    useEffect(() => {
        console.log('state from child 1 ==>', parentState);

    }, [parentState])
    return (
        <div style={{ backgroundColor: 'green' }}>
            child 2
        </div>
    )
}

export default Child2
