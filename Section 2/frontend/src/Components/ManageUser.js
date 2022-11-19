import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const ManageUser = () => {
  
    const [userList, setUserList] = useState([]);

    const getDataFromBackend = async () => {

        const res = await fetch('http://localhost:5000/user/getall');
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setUserList(data);
    }

    useEffect(() => {
      getDataFromBackend();
    }, []);


    const deleteUser = async (id) => {
      console.log(id);
      const res = await fetch('http://localhost:5000/user/delete/'+id, {method: 'DELETE'});
      console.log(res.status);
      getDataFromBackend();
      if(res.status === 200){
          toast.success('User Deleted');
      };
    }


  return (
    <div className='vh-100'>
        <div className='container'>
            <p className="text-center h3 mb-4">User Manager</p>
            <table className='table table-dark table-striped'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>

                {
                  userList.map((userObj) => (
                    <tr>
                      <td>{userObj._id}</td>
                      <td>{userObj.username}</td>
                      <td>{userObj.email}</td>
                      <td>{userObj.age}</td>
                      <td>
                        <button className='btn btn-danger' onClick={ () => { deleteUser(userObj._id) } }>
                          <i class="fas fa-trash"></i>
                        </button>
                      </td>
                      <td>
                        <button className='btn btn-primary'>
                          <i class="fas fa-pen"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                }

              </tbody>
            </table>

        </div>
    </div>
  )
}

export default ManageUser;