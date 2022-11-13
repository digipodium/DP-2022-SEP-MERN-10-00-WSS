import { Formik } from 'formik'
import React from 'react'

const Register = () => {

    const userSubmit = (formdata) => {
        console.log(formdata);
    }

  return (
    <div className='vh-100' style={{backgroundColor: '#ccc'}}>
        <div className="col-md-4 mx-auto pt-5">
            <div className='card'>
                <div className="card-body">

                    <h3>Signup Form</h3>
                    
                    <Formik initialValues={{ username : '', email : '', password : '', age : '' }} onSubmit={userSubmit}>

                        { ( {values, handleChange, handleSubmit} ) => (
                            <form onSubmit={handleSubmit}>
                                <label>Username</label>
                                <input className='form-control mb-4' name="username" onChange={handleChange} value={values.username} />
                                <label>Email</label>
                                <input type="email" className='form-control mb-4' name="email" onChange={handleChange} value={values.email} />
                                <label>Password</label>
                                <input type="password" className='form-control mb-4' name="password" onChange={handleChange} value={values.password} />
                                <label>Age</label>
                                <input type="number" className='form-control mb-4' name="age" onChange={handleChange} value={values.age} />

                                <button type='submit' className='btn btn-primary'>Submit</button>
                            
                            </form>
                        ) }

                    </Formik>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Register