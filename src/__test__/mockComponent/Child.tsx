import React, { useCallback, useState } from "react";

const Child: React.FC = () => {
  const [test, setTest] = useState(0);
  const [test2, setTest2] = useState(1);

  const btnClick = useCallback(() => {
    setTest((prev) => prev + 1);
    setTest2((prev) => prev + 1);
  }, []);

  return (
    <div className="child">
      I'm child {test} {test2}
      <button onClick={btnClick}></button>
    </div>
  );
};

export default Child;
