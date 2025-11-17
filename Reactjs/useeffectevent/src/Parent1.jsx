import React, { useState } from 'react'
import Child1 from './Child1'

const Parent1 = () => {
    const [text,setText] = useState("")
  return (
    <div className='row'>
      <div className="col">
        <h3>This is parent component </h3>
        <Child1 onChange = {setText} />
        <p> {text} </p>
      </div>
    </div>
  )
}

export default Parent1
