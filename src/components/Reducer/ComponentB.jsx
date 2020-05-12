import React, { useContext } from 'react'
import { countContext } from "./index"

function ComponentB() {
    const context = useContext(countContext);
    return (
        <div>
            {context.count}
            <button onClick={() => context.dispatchCount('INCREMENT')} >Increment</button>
            <button onClick={() => context.dispatchCount('DECREMENT')}>Decrement</button>
            <button onClick={() => context.dispatchCount('RESET')}>Reset</button>
        </div>
    )
}

export default ComponentB
