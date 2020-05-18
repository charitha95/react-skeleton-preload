Live on: https://react-skeleton-loading.netlify.app/

###example

````JS
import React, { useEffect, useState } from "react";
import Skeleton from "temp";

function App() {

  const [title, setTitle] = useState('');

  useEffect(() => {
    setTimeout(() => { setTitle('hello world') }, 3000)
  }, []);

  return <>
    <h2 style={{ width: 50 }}>{title || <Skeleton />}</h2>
  </>
}

export default App;
````