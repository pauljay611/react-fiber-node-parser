import React, { useCallback, useState } from "react";
import Child from "./Child";

const mockComponents = new Array(10).fill(0);

const App: React.FC = () => {
  const [test, setTest] = useState(0);
  const [test2, setTest2] = useState(1);

  const btnClick = useCallback(() => {
    setTest((prev) => prev + 1);
    setTest2((prev) => prev + 1);
  }, []);

  return (
    <div className="parent">
      {mockComponents.map((_, index) => (
        <Child key={index} />
      ))}
      <span>
        I'm parent {test} {test2}
      </span>
      <button data-testid="click" onClick={btnClick}></button>
    </div>
  );
};

export default App;
