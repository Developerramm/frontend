import React from 'react'

const DemoEvent = () => {
    let handleButtonClick = ()=>{
        console.log("button is click")
    }
  return (
    <div>
      <button onClick={handleButtonClick}>click me</button>
    </div>
  )
}

export default DemoEvent
