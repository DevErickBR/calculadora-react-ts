type Props = {
    value: string;
    result: number;
}

export const Display = ({ value, result }: Props) => {
    return (
        <div>
            <div>
                {value}
            </div>
            <div>
                = {result}
            </div>
        </div>

    )
};