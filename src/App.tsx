import { useState } from "react";
import { Display } from "./components/Display";
import { KeyBoard } from "./components/KeyBoard";

function App() {
  // const [firstValue, setFirstValue] = useState<number>(0);
  // const [secondValue, setSencondValue] = useState<number>(0);
  const [currentValue, setCurrentValue] = useState<string>("0");
  const handleSetCurrentValue = (e: string) => {
    if (currentValue == "0") {
      return setCurrentValue(e)
    } else {
      return setCurrentValue(currentValue + e)
    }
  }

  const handleDeleteValue = () => {
    if (currentValue) {
      return setCurrentValue("0")
    }
  }

  const handleSetValue = (e: string) => {
    setCurrentValue(e)
  };

  return (
    <div>
      <div>
        <Display value={currentValue} />
      </div>
      <div>
        <KeyBoard setValue={handleSetCurrentValue} valor={currentValue} setValor={handleSetValue} />
      </div>
    </div>
  );
};

export default App;
