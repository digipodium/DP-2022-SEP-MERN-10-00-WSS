// 1. Components are Simple JavaScript Functions.
// 2. Function name should start with uppercase letter.
// 3. Function must return a single JSX elements.
// 4. Function should be exported from its file.

import React from "react"
import { Formik } from "formik"

const Login = () => {
    
  const loginSubmit = (formdata) => {
    console.log(formdata);
  }

  return (
    <div className="vh-100" style={{ backgroundColor: "#ccc" }}>
      <div className="col-md-3 mx-auto pt-5">
        <div className="card">
          <div className="card-body">
            <Formik initialValues={{ email: "", password: "" }} onSubmit={loginSubmit}>
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <h4 className="text-center">Login</h4>
                  <hr />

                  <label>Email Address</label>
                  <input className="form-control mb-4" name="email" onChange={handleChange} value={values.email} />
                  <label>Password</label>
                  <input type="password" className="form-control mb-4" name="password" onChange={handleChange} value={values.password} />

                  <button className="btn btn-primary w-100 mt-4">Submit</button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
