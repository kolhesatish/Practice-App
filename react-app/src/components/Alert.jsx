import React, { useState } from 'react'

const Alert = () => {

    const [click, setClick] = useState(false);
    const [count, setCount] = useState(0);

  return (
    <>
    <h1>Hey</h1>
    <button onClick={() => setClick(!click)}>Click Me</button>
    <button onClick={() => setCount((count) => count + 1)}>{count}</button>

    </>
  )
}

export default Alert