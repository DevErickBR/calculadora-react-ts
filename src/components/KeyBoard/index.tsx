import Arrow from '../../assets/right-arrow.png'
import { removeNumber } from '../../helpers/RemoveOneNumber'
import { handleDeleteValue } from '../../helpers/DeleteValue'
type Props = {
    setValue: (e: string) => void;
    setValor: (e: string) => void;
    valor: string;
}

export const KeyBoard = ({ setValue, valor, setValor }: Props) => {

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
            <button onClick={() => removeNumber(valor, setValor)}><img src={Arrow} width="10px"></img></button>
            <button onClick={() => handleDeleteValue(valor, setValor)}>AC</button>
        </div>
    );
};