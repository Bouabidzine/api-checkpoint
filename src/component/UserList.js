import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({user}) => {
  return (
    <Link to ={`/${user.id}`}>
    <div className='users'>
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt=''></img>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <div>
        <div>

        </div>
        <div> <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt=''></img></div>
        <div> <img src="" alt=''></img></div>
        <div> <img src="" alt=''></img></div>
        <div> <img src="" alt=''></img></div>
      </div>
      
    </div>
    </Link>
  );
}

export default UserList;
