import React from 'react';
import { useState } from 'react';

const Hook = () => {
    const [num,updateNum] = useState(0)
    const [text, updateText] = useState("")
    const myfun =()=>{
        // alert("Hello")
        updateNum(num+1)
    }
  return (
    <>
      {/* <h1>Welcome to React Hooks </h1>
      <button onClick={myfun}>Click</button> */}
      <h1>Hook Page</h1>
      <h1>{num}</h1>
      <button onClick={myfun}>update</button><br />
      <h2>updates = {text}</h2>
      <input type="text" value={text} onChange={(e)=>{updateText(e.target.value)}}/>
    </>
  )
}

export default Hook
