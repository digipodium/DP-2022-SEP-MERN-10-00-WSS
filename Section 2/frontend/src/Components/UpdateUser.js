import { Formik } from 'formik'
import React from 'react'
import Swal from 'sweetalert2';

const UpdateUser = ({ userData, getDataFromBackend }) => {

    const userSubmit = async (formdata) => {
        console.log(formdata);

        // 1. URL
        // 2. Request Method
        // 3. JSON Data
        // 4. Type of Data

        const res = await fetch('http://localhost:5000/user/update/'+formdata._id, {
            method : 'PUT',
            body : JSON.stringify(formdata),
            headers : { 'Content-Type' : 'application/json' }
        });

        console.log(res.status);
        if(res.status === 200){
            Swal.fire({
                icon: 'success',
                title : 'Success',
                text : 'User Updated successfully!'
            })
            getDataFromBackend();
        }else{
            
        }

    }

  return (
    <div className='vh-100'>
        <div className="col-md-10 mx-auto">
            <div className='card'>
                <div className="card-body">

                    <h3>User Update Form</h3>
                    
                    <Formik initialValues={userData} onSubmit={userSubmit}>

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

export default UpdateUser;