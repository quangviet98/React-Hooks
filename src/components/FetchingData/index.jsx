import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FetchingData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1998/api/bills")
            .then(response => {
                console.log(response.status);
                setData(response.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <ul>
            {data.map((bill) => {
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
        </ul>
    )
}

export default FetchingData
