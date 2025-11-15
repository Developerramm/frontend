import React from 'react'
import asserts from "../assets/11.jpg"

const Bye = () => {
    console.log(asserts)
  return (
    <div className='row'>
      <div className="col-md-6">
        <h3>This is bye componnent here </h3>
        <img src={asserts} alt="" />
      </div>
    </div>
  )
}

export default Bye
