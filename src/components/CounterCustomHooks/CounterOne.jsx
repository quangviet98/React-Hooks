import React from 'react'
import useCounter from '../../hooks/useCounter'

function CounterOne() {
    const [count, increment, decrement, reset] = useCounter(0, 1);
    return (
        <div>
            Count - {count}
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CounterOne
