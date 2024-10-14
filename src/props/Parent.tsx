import { useState } from "react";
import Child from "../props/Child";

const Parent: React.FC = () => {
  const [data, setData] = useState("");

  const HandleChild = (str: string) => {
    setData(str);
  };

  const HandleUndo = () => {
    setData("");
  };

  return (
    <>
      <Child name="manjunath" age={22} onDataChange={HandleChild} />
      <p>child :- {data}</p>
      <button onClick={HandleUndo}>Undo</button>
    </>
  );
};

export default Parent;
