import React, { useState } from 'react'
import Child1 from './child1'
import Child2 from './child2'

function Global() {
    const [parentState, setParentState] = useState('')
    console.log('console from global ==>', parentState);
    const callBkFn = (data) => {
        console.log('console from global inside fun ==>', data);

    }

    return (
        <div style={{ backgroundColor: 'red', width: '100%' }}>
            Global
            <br />
            <Child1 setParentState={setParentState} callBkFn={callBkFn} />
            <br />
            <Child2 parentState={parentState} />
        </div>
    )
}

export default Global
