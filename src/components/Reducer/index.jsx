import React, { useReducer } from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state + 1;
            break;
        case 'DECREMENT':
            return state - 1;
            break;
        case 'RESET':
            return initialState;
            break;
        default:
            return state;
    }
}
export const countContext = React.createContext();
function CountReducer() {

    const [count, dispatch] = useReducer(reducer, initialState);


    return (
        <div>
            <div>{count}</div>
            <countContext.Provider value={{ count, dispatchCount: dispatch }}>
                <ComponentA />
                <ComponentB />
            </countContext.Provider>
        </div>
    )
}

export default CountReducer
