import React from 'react'
import { useEffect } from 'react';

const ManageUser = () => {


    
    const getDataFromBackend = async () => {

        const res = await fetch('http://localhost:5000/user/getall');
        console.log(res.status);
    }

    

    useEffect(() => {
      getDataFromBackend();
    }, []);


  return (
    <div className='vh-100'>
        <div className='container'>
            <p className="text-center h3">User Manager</p>
        </div>
    </div>
  )
}

export default ManageUser;