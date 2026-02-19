import { useState, useMemo, createContext, useContext } from "react";

// Create context:
const Context2 = createContext();

// Create provider:
function Provider2({ children }) {
  const [data2, setData2] = useState("No data-2");
  const value = useMemo(() => [data2, setData2], [data2, setData2]);

  return <Context2.Provider value={value}>{children}</Context2.Provider>;
}

// Create custom hook:
function useContext2() {
  const context = useContext(Context2);
  if (context === undefined)
    throw new Error("useContext2 must be used within Provider2");

  return context;
}

export { Context2, useContext2, Provider2 };
