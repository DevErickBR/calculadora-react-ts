type Props = {
    value: string;
}

export const Display = ({ value }: Props) => {
    return (
        <div>
            <div>
                {value}
            </div>
        </div>

    )
};