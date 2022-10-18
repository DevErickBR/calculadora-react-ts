import { useState } from "react";

type Props = {
    value: number;
}

export const Display = ({ value }: Props) => {
    return (
        <div>
            <input value={value} />
        </div>

    )
};