import React from 'react'

const Demo = (props) => {
    console.log(props)
  return (
    <div>
      <h3>Demo component here </h3>
      <button onClick={props.onClick}>click here now to show name </button>
    </div>
  )
}

export default Demo
