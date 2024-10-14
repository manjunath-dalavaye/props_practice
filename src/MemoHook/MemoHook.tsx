import { useMemo, useState } from "react";

const MemoHook: React.FC = () => {
  const [data, setData] = useState(0);

  const mul=(count:number)=>{
     return count*10
  }
  const MemoRised = useMemo(() => {
    return mul(data)
  }, []);

  const AddButton = () => {
    setData(data + 1);
  };

  return (
    <>
      <p>memo hook {MemoRised}</p>
      <h2>Count{data}</h2>
      <button onClick={AddButton}>Add</button>
    </>
  );
};

export default MemoHook;
