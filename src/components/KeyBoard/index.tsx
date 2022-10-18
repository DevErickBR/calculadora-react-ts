import React, { useState } from "react";
type Props = {
    setValue: (e: string) => void;
}

export const KeyBoard = ({ setValue }: Props) => {
    // const [value, setValue] = useState<string>("0")
    // const handleClick = (e: string) => {
    //     if (value == "0") {
    //         return setValue(e)
    //     } else {
    //         return setValue(value + e)
    //     }
    // }

    return (
        <div>
            <button onClick={() => setValue("9")}>9</button>
            <button onClick={() => setValue("8")}>8</button>
            <button onClick={() => setValue("7")}>7</button>
            <button onClick={() => setValue("6")}>6</button>
            <button onClick={() => setValue("5")}>5</button>
            <button onClick={() => setValue("4")}>4</button>
            <button onClick={() => setValue("3")}>3</button>
            <button onClick={() => setValue("2")}>2</button>
            <button onClick={() => setValue("1")}>1</button>
            <button onClick={() => setValue("0")}>0</button>
            <button onClick={() => setValue(",")}>,</button>
        </div>
    );
};