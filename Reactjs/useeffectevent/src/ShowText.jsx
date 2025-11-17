import React from 'react'

const ShowText = ({text}) => {
  return (
    <div className='row'>
      <div className="col">

        <h2>The length of text is {text.length} </h2>
        <h3> {text} </h3>

      </div>
    </div>
  )
}

export default ShowText
