# React use toggle hook

## Getting started

Install the latest version:
```sh
npm install --save npm i @erslee/use-toggle
  or
yarn add @erslee/use-toggle
```

Use the hook in the component!
```js
import React from 'react';
import useToggle from '@erslee/use-toggle';

const Component = () => (
  const [value, toggleValue] = useToggle(true);

  return (
    <div className="App">
      <p>{value}</p>
      <button onClick={toggleValue}>toggle value</button>
    </div>
  );
);
```

