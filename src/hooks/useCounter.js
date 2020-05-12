import { useState } from 'react'

function useCounter(initial = 0, value) {
    const [count, setCount] = useState(initial);
    function increment() {
        setCount(prev => prev + value);
    }
    function decrement() {
        setCount(prev => prev - value);
    }
    function reset() {
        setCount(initial);
    }

    return [count, increment, decrement, reset]
}

export default useCounter
