import { useCallback, useState } from "react";
import Childd from "./ChildCall";

const ParentCall: React.FC = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const HandleChange = () => {
    setCount(count + 1);
  };


  const dis=useCallback(()=>{
    console.log("callback fhn")
  },[text]);

  return (
    <>
      <p>Count {count}</p>
      <p>text</p>
      <button onClick={HandleChange}>Click</button>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <Childd dis={dis} />
    </>
  );
};

export default ParentCall;
