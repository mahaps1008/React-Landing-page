import React from 'react'
import { useState } from 'react'

const Count=() => {
    const [count,setcount]=useState(0)
    const increment=() =>{
        setcount(count+1)
    }
    const decrement=()=> {
        setcount(count-1)
    }
  return (
    <div>
        <h1> count:{count}</h1>
        <button onClick={increment}>increase </button><br/>
        <button onClick={decrement}>decrease</button>
    </div>
  )
}

export default Count