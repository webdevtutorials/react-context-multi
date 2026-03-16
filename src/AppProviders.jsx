// src / AppProviders.jsx

import { DataProvider as Data1Provider } from "./Data1Context";
import { DataProvider as Data2Provider } from "./Data2Context";

export function AppProviders({ children }) {
  return (
    <Data1Provider>
      <Data2Provider>{children}</Data2Provider>
    </Data1Provider>
  );
}
