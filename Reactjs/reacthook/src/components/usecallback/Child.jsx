import React from 'react'

const Child = ({click}) => {
    console.log("child is render ")
  return (
    <div>
      <h3>This is child component </h3>
      <button className='btn btn-outline-dark' onClick={click}>Click click</button>
    </div>
  )
}

export default React.memo(Child)
