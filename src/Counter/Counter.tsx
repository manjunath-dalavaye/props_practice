import { useState } from "react";

const Counter: React.FC = () => {
  const [data, setDtat] = useState(0);
  const AddFun = () => {
    setDtat(data + 5);
  };

  const HandleRe = () => {
    setDtat(0);
  };

  return (
    <>
      <p>text {data}</p>
      <button onClick={AddFun}>Add</button>
      <button onClick={HandleRe}>reset</button>
    </>
  );
};

export default Counter;
