import React, { useReducer, useEffect } from 'react'
import axios from 'axios';

const initialState = {
    loading: true,
    bills: [],
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return { ...state, loading: false, bills: action.data, error: "" }
        case 'FETCH_DATA':
            return { ...state, loading: true, bills: [], error: "" }
        case 'FETCH_DATA_FAILURE':
            return { ...state, loading: false, error: "fetch data failure!" }
        default:
            return state
    }
}

function FetchingDataReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: 'FETCH_DATA' })
        axios.get("http://localhost:1998/api/bills")
            .then(response => {
                dispatch({ type: 'FETCH_DATA_SUCCESS', data: response.data.data });
            })
            .catch(err => {
                dispatch({ type: 'FETCH_DATA_FAILURE' });
            })
    }, [])

    return (
        <div>
            {state.error ? state.error : null}
            {state.loading ? "loading" : state.bills.map((bill) => {
                return (
                    <li key={bill._id}>
                        {bill.customerID.name}
                        <ul>
                            {bill.products.map(pro => {
                                return (
                                    <li key={pro._id}>
                                        {pro.productID.name}
                                        <span> / </span>
                                        {pro.productID.price}
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                )

            })}

        </div>

    )
}

export default FetchingDataReducer
