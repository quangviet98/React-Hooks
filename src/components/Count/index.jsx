import React, { useState, useEffect, useRef } from 'react';


Count.propTypes = {

};

function Count() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const countInterval = setInterval(() => {
            setCount(count + 1);
        }, 1000)

        return () => {
            clearInterval(countInterval);
        }
    }, [count]);

    return (
        <p>{count}</p>
    );
}

export default Count;