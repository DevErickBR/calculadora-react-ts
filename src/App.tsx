import { useState } from "react";
import { Display } from "./components/Display";
import { KeyBoard } from "./components/KeyBoard";

function App() {
  const [currentValue, setCurrentValue] = useState<string>("0");
  const [result, setResult] = useState<number>(0)
  const handleSetCurrentValue = (e: string) => {
    if (currentValue == "0") {
      return setCurrentValue(e)
    } else {
      return setCurrentValue(currentValue + e)
    }
  }

  const handleSetValue = (e: string) => {
    setCurrentValue(e)
  };

  return (
    <div>
      <div>
        <Display value={currentValue} result={result} />
      </div>
      <div>
        <KeyBoard setValue={handleSetCurrentValue} valor={currentValue} setValor={handleSetValue} result={result} />
      </div>
    </div>
  );
};

export default App;
