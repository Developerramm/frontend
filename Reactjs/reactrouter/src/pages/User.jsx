import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    let {id} = useParams();
    console.log(id);
  return (
    <div>
      <h3>This is user page </h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab sit iure eligendi laborum odit sed quaerat qui laudantium natus distinctio placeat amet exercitationem, nostrum fuga officiis similique fugit veniam blanditiis at ipsa rerum. Totam?</p>
      <h3> {id && `Your id is ${id}`} </h3>
    </div>
  )
}

export default User
