import React from 'react'
import GrandChild from './GrandChild'

const Child = ({username}) => {
  return (
    <div className='row'>
      <div className="col">
        <h3>This is chidl component </h3>
        <GrandChild username = {username} />
      </div>
    </div>
  )
}

export default Child
