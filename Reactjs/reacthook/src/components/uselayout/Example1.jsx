import React, { useLayoutEffect, useRef, useState } from 'react'

const Example1 = () => {
    const boxRef = useRef(null);
    const [height,setHeight] = useState(0);
    useLayoutEffect(()=>{
        setHeight(boxRef.current.clientHeight);
    },[])
  return (
    <div >
      <div ref={boxRef} style={{width :"200px",padding : "20px",background : "#eee"}}>
        <h3>Example components </h3>
      </div>
      <p>height is {height} </p>
    </div>
  )
}

export default Example1
