import { useState } from "react";
import { Display } from "./components/Display";
import { KeyBoard } from "./components/KeyBoard";

function App() {
  const [firstValue, setFirstValue] = useState<number>(0);
  const [secondValue, setSencondValue] = useState<number>(0);
  const [currentValue, setCurrentValue] = useState<number>(0);
  return (
    <div>
      <div>
        {/* <Display value={currentValue} /> */}
      </div>
      <div>
        <KeyBoard />
      </div>
    </div>
  );
};

export default App;
