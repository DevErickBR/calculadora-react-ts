type Props = {
    value: string;
    resultx: number;
}

export const Display = ({ value, resultx }: Props) => {
    return (
        <div>
            <div>
                {value}
            </div>
            <div>
                {resultx}
            </div>
        </div>
    );

};