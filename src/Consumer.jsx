import { useEffect, useContext } from "react";
import { Context1 } from "./Context1";
import { Context2 } from "./Context2";

export default function Consumer() {
  const [data1, setData1] = useContext(Context1);
  const [data2, setData2] = useContext(Context2);

  useEffect(() => {
    setData1("Data-1");
    setData2("Data-2");
  }, []);

  return (
    <>
      <h2>Consumer</h2>
      <p>{data1}</p>
      <p>{data2}</p>
    </>
  );
}
