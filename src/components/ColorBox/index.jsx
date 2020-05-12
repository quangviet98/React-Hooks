import React, { useState } from 'react';
import './ColorBox.scss';


const getRandomColor = () => {
    const colorList = ['green', 'purple', 'red', 'yellow', 'black'];
    const index = Math.trunc(Math.random() * 5);
    return colorList[index];
}

function ColorBox() {
    const [color, setColor] = useState(() => {
        return localStorage.getItem("color") || 'deppink';
    });

    function handleOnClick() {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem("color", newColor);
    }

    return (
        <div className="color-box" style={{ backgroundColor: color }}
            onClick={handleOnClick}
        >
            COLOR BOX
        </div>
    );
}

export default ColorBox;