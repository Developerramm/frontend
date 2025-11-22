import React, { useEffect, useLayoutEffect } from 'react'

const Test = () => {
    useEffect(()=>{
        console.log("useEffect message ");
    },[])

    useLayoutEffect(()=>{
        console.log("use useLayoutEffect hook ")
    },[])


  return (
    <div className='row'>
      <div className="col">
        
      </div>
    </div>
  )
}

export default Test
