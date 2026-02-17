import { useState, useMemo, createContext } from "react";

// Create Context:
export const Context1 = createContext(undefined);

// Create Provider:
export function Provider1({ children }) {
  const [data1, setData1] = useState("No data-1"); // Data must be provider-owned
  const value = useMemo(() => [data1, setData1], [data1, setData1]);

  return <Context1.Provider value={value}>{children}</Context1.Provider>;
}
