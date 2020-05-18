![GitHub release (latest by date)](https://img.shields.io/github/v/release/charitha95/react-skeleton-preload)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/charitha95/react-skeleton-preload)
![Travis (.org)](https://img.shields.io/travis/charitha95/react-skeleton-preload)

# React skeleton preloader.

## Demo
Live on: https://react-skeleton-loading.netlify.app/

## How to use

### Installation
```shell
npm i @charie/react-skeleton-preload
```

### How to use
```js
import React, { useEffect, useState } from "react";
import Skeleton from "@charie/react-skeleton-preload";

function App() {

  const [title, setTitle] = useState('');

  useEffect(() => {
    setTimeout(() => { setTitle('hello world') }, 3000)
  }, []);

  return <h2 style={{ width: 150 }}>{title || <Skeleton />}</h2>
  
}

export default App;
```