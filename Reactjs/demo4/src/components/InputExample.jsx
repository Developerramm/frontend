import React, { useState } from 'react'

const InputExample = () => {
    let [name,setName] = useState("");
  return (
    <div className='row'>
      <div className="col">
        <h3>Input example component </h3>
        <br />
        <input type="text" value={name} onChange={(e)=>{
            setName(e.target.value)
        }} className='form-control' placeholder='Enter Your name ' />
        <br />
        <p> {name || "Guest"} </p>
        <p>total character is {name ? name.length : ""} </p>
      </div>
    </div>
  )
}

export default InputExample
