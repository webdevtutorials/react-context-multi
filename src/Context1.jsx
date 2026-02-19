import { useState, useMemo, createContext, useContext } from "react";

// Create Context:
const Context1 = createContext(undefined);

// Create Provider:
function Provider1({ children }) {
  const [data1, setData1] = useState("No data-1"); // Data must be provider-owned
  const value = useMemo(() => [data1, setData1], [data1, setData1]);

  return <Context1.Provider value={value}>{children}</Context1.Provider>;
}

// Create Custom Hook

function useContext1() {
  const context = useContext(Context1);
  if (context === undefined)
    throw new Error("useContext1 must be used withing Provider1");

  return context;
}

export { Context1, useContext1, Provider1 };
