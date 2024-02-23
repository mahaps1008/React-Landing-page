import React, { useState } from 'react'

const Arraylist=()=> {
    const[inputvalue,setinputvalue]=useState('');
    const[submittedvalue,setsubmittedvalue]=useState([]);
    const handlesubmit=()=>{
        setsubmittedvalue([...submittedvalue,inputvalue]);
        setinputvalue('');
    }
  return (
    <div>
        <input type='text' value={inputvalue} onChange={(e)=> setinputvalue(e.target.value)}/>
        <button onClick={handlesubmit}>Add</button>
        <ul>
            {submittedvalue.map((items)=><li>{items}</li>)}

        </ul>
    </div>
  )
}

export default Arraylist