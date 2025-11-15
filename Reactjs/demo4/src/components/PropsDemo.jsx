import React from 'react'

const PropsDemo = (props) => {
  return (
    <div className='col-md-6 border border-1'>
      <h3>Props in react js </h3>
      <h3> Your name is {props.name} </h3>
       <p>Your city {props.city} </p> 
       <p>Your age {props.age} </p>
    </div>
  )
}

export default PropsDemo
