// 1. Components are Simple JavaScript Functions.
// 2. Function name should start with uppercase letter.
// 3. Function must return a single JSX elements.
// 4. Function should be exported from its file.

import React from 'react';

const Login = () => {
  
    return (
        <div className='vh-100' style={{backgroundColor : '#ccc'}}>
            <div className="col-md-3 mx-auto pt-5">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <h4 className="text-center">Login</h4>
                            <hr/>

                            <label>Email</label>
                            <input className='form-control mb-4'/>
                            <label>Password</label>
                            <input type="password" className='form-control mb-4'/>

                            <button className='btn btn-primary w-100 mt-4'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login;