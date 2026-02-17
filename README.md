# React Context for Stateless dataExample.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

A quick-start guide to scaffolding a React-Vite project and implementing a basic "Stateless" Context Provider-Consumer relationship.

---

## To run the app:

```bash
cd reactContextStateless
yarn install
yarn dev
```

## To build from scratch start a new Vite-React project:

```bash
cd tutorials

yarn create vite react-context-stateless --template react
cd react-context-stateless
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
gh repo create react-context-stateless --public --source=. --remote=origin --push
```

## Open in editor (optional):

```bash
code
```

## Create static context consuming React component:

```bash
cd src
code MyComponent.jsx
```

```js
// src / MyComponent.jsx

import { useContext } from "react";
import { MyContext } from "./App";

export default function MyComponent() {
  return (
    <>
      <h2>Component</h2>
      <p>{useContext(MyContext)}</p>
    </>
  );
}
```

## Create context provider in App.jsx:

```js
// src / App.jsx
import { createContext } from 'react';

export const MyContext = createContext(undefined)

<MyContext.Provider value="Context Value">
    <MyComponent />
</MyContext.Provider>
```

## Additional explanation:

- ContextExample is a single returned **OBJECT**. When stored in a variable it becomes a **STABLE REFERENCE**, as opposed to creating a new reference every time by calling a function. As such, it is an **IDENTIFIER** because it refers to one specific object instance.
  `const MyContext = createContext(undefined)`

- It contains **ContextExample.Provider** and **ContextExample.Consumer** properties, which both point to the same object.

- Consumers get access to dataExample once wrapped in a provider like this:
  `<MyContext.Provider />`
  and import useContext from 'react' and ContextExample from the object location.

- The providers receives dataExample ones the it is passed to the value property
  in the provider like this:
  `<MyContext.Provider value={3} />`

- The wrapped consumer access the dataExample like this:
  `const value = useContext(MyContext)`
  when it or any of it's parents wrapped in a provider.

- To be retrived, the value must be located in the nearest ContextExample.Provider
  If no provider is found, the default value is returned.

## Quick-start step guide:

1. Create provider-consumer relationship:
   `const MyContext = createContext(undefined)`

2. Wrap consumers in a provider:
   `<MyContext.Provider />`

3. Pass the dataExample to the "value" property:
   `<MyContext.Provider value="Context Value" />`

4. Retrieve dataExample with useContext hook:
   `const value = useContext(MyContext)`
