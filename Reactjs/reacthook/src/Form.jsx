import React, { useReducer } from 'react'

const Form = () => {

    let reducer = (state,action)=>{
        return {
            ...state,
            [action.name] : action.value
        }
    }

    const [formdata,dispatch] = useReducer(reducer,{
        name : "",
        email : ""
    })


    let handleChange = (e)=>{
        dispatch({
            name : e.target.name,
            value : e.target.value
        })
    }


  return (
    <div className='row'>
      <div className="col">
        <h3>Form component </h3>
        <form action="">
            <div className="mb-3">
                <label htmlFor="" className='form-label'>Name : </label>
                <input type="text"j onChange={handleChange} value={formdata.name} name='name' className='form-control' />
            </div>
            <div className="mb-3">
                <label htmlFor=""  className='form-label'>Email : </label>
                <input onChange={handleChange} value={formdata.email} type="email" name='email' className='form-control' />
            </div>
            <button className='btn btn-outline-primary' type='submit'>Submit</button>
        </form>

        <p> username {formdata.name} </p>
        <p>email {formdata.email} </p>
      </div>
    </div>
  )
}

export default Form
