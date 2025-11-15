import React from 'react'

const Test = () => {
    let headingStyle = {
        color : "red",
        fontSize : "30px",
        textAlign : "center"
    }
  return (
    <div className='row'>
      <div className="col">
        <h3 style={headingStyle}>Hello this is test component </h3>
        <h3 style={{color :"blueviolet",fontSize : "3rem",textAlign : "center"}}>this is heading here </h3>
      </div>
    </div>
  )
}

export default Test
