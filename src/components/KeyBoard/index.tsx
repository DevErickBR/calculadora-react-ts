import React, { useState } from "react";

export const KeyBoard = () => {
    const [value, setValue] = useState<string>("0")
    const handleClick = (e: string) => {
        if (value == "0") {
            return setValue(e)
        } else {
            return setValue(value + e)
        }
    }

    return (
        <div>
            <input type="text" value={value} />
            <button onClick={() => handleClick("9")}>9</button>
            <button onClick={() => handleClick("8")}>8</button>
            <button onClick={() => handleClick("7")}>7</button>
            <button onClick={() => handleClick("6")}>6</button>
            <button onClick={() => handleClick("5")}>5</button>
            <button onClick={() => handleClick("4")}>4</button>
            <button onClick={() => handleClick("3")}>3</button>
            <button onClick={() => handleClick("2")}>2</button>
            <button onClick={() => handleClick("1")}>1</button>
            <button onClick={() => handleClick("0")}>0</button>
            <button onClick={() => handleClick(",")}>,</button>
        </div>
    );
};