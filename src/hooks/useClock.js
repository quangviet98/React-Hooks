import { useState, useEffect } from 'react'


function dateFormat(date) {

    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}

function useClock() {
    const [timeString, setTimeString] = useState("");

    useEffect(() => {
        const cloclInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = dateFormat(now);
            setTimeString(newTimeString);
        }, 1000);

        return () => {
            clearInterval(cloclInterval);
        }
    }, []);

    return { timeString };
}

export default useClock;