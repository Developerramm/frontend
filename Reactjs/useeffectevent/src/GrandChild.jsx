import React from 'react'

const GrandChild = ({username}) => {
  return (
    <div className='row'>
      <div className="col">
        <h3>This is grand child component </h3>
        <h2>My username is {username} </h2>
      </div>
    </div>
  )
}

export default GrandChild
