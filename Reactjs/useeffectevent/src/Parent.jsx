import React from 'react'
import Child from './Child';

const Parent = () => {
    let username = "ramkumar";
  return (
    <div className="row">
      <div className="col">
        <h3>This is parent component </h3>
        <Child username = {username} />
      </div>
    </div>
  )
}

export default Parent
