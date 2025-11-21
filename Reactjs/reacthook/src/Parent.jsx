import React, { useMemo, useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [count,setCount] = useState(0);

    const user = useMemo(()=>({name : "ram kumar",age : 20}),[])
    console.log("parent render ")
  return (
    <div className='row'>
      <div className="col">
        <h3>This is parent component </h3>
        <h3>Parent count {count} </h3>
        <button onClick={()=>setCount(count + 1)}>Increse count</button>
        <Child user = {user} />
      </div>
    </div>
  )
}

export default Parent
