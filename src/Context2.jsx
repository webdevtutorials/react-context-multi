import { useState, useMemo, createContext } from "react";

// Create context:
export const Context2 = createContext();

// Create provider:
export function Provider2({ children }) {
  const [data2, setData2] = useState("No data-2");
  const value = useMemo(() => [data2, setData2], [data2, setData2]);

  return <Context2.Provider value={value}>{children}</Context2.Provider>;
}
