import { memo } from "react";
import Child from "../props/Child";

interface propss {
  dis: () => void;
}

const Childd: React.FC<propss> = ({ dis }) => {
  dis();
//   console.log("I am child");
  return <></>;
};

export default memo(Childd);
