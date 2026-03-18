# React Context API with Multiple Providers.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

A quick-start guide to scaffolding a new React-Vite project with React Context API and muliple providers.

---

## To run the app:

```bash
cd react-context-multi
yarn install
yarn dev
```

## To build from scratch start a new Vite-React app:

```bash
cd tutorials

yarn create vite react-context-multi --template react
cd react-context-multi
```

## Initiate version control:

```bash
git init
git add .
git commit -m "Empty app"
git branch -m master main
```

## Upload to GitHub:

```bash
gh auth status
gh repo create react-context-multi --public --source=. --remote=origin --push
git remote -v
```

## Create multiple contexts, providers, and hooks. In the providers add data to share:

```js
// src / Data1Context and src / Data2Context
import { useState, useMemo, createContext, useContext } from "react";

const DataContext = createContext(undefined);

function DataProvider({ children }) {
  const [data, setData] = useState("No data");
  const value = useMemo(() => [data, setData], [data, setData]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

function useData() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("useData must be used within DataProvider");

  return context;
}

export { useData, DataProvider };
```

## Consolidate the multiple providers

```js
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
```

## Wrap the consumers

```js
// src / main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppProviders } from "./AppProviders";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
);
```

## Create a component and access the data

```js
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
```

## Integrate the component in the app

```js
// src / App.jsx
...
import MyComponent from "./MyComponent";
...
<MyComponent />
...
```
