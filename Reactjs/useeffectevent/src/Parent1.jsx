import React, { useState } from 'react'
import Child1 from './Child1'
import ShowText from './ShowText'

const Parent1 = () => {
    const [text,setText] = useState("")
  return (
    <div className='row'>
      <div className="col">
        <h3>This is parent component </h3>
        <Child1 onChange = {setText} />
        <p> {text} </p>
        <ShowText text = {text} />
      </div>
    </div>
  )
}

export default Parent1
