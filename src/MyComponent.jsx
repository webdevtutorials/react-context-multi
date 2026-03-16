// src / MyComponent.jsx

import { useEffect } from "react";
import { useData as useData1 } from "./Data1Context";
import { useData as useData2 } from "./Data2Context";

export default function MyComponent() {
  const [data1, setData1] = useData1();
  const [data2, setData2] = useData2();

  useEffect(() => {
    setData1("Data-1");
    setData2("Data-2");
  }, []);

  return (
    <>
      <h2>My Component</h2>
      <p>{data1}</p>
      <p>{data2}</p>
    </>
  );
}
