import React from 'react'
import { useEffect } from 'react';

const ManageUser = () => {


    
    const getDataFromBackend = async () => {

        const res = await fetch('http://localhost:5000/user/getall');
        console.log(res.status);
        const data = await res.json();
        console.log(data);
    }

    useEffect(() => {
      getDataFromBackend();
    }, []);


  return (
    <div className='vh-100'>
        <div className='container'>
            <p className="text-center h3 mb-4">User Manager</p>

            <table>

            </table>

        </div>
    </div>
  )
}

export default ManageUser;