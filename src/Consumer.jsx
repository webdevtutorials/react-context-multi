import { useEffect } from "react";
import { useContext1 } from "./Context1";
import { useContext2 } from "./Context2";

export default function Consumer() {
  const [data1, setData1] = useContext1();
  const [data2, setData2] = useContext1();

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
