
import './App.css';
import {useEffect, useState } from 'react';
import UserList from './component/UserList';
import { Route, Routes, useParams } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
      const fetchUsers= async () => {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/users=${params.id}`)
            
        setUsers(result.data);}
      
     fetchUsers();}, [])
      
  const params= useParams();
 
  return (
    <div className="App">
   <Routes>
     <Route path="/" element={ users.length> 0 ? (<div className='list'>
    {users.map((el)=> <UserList user={el}/>)}
    </div>) : (<img src='https://media.istockphoto.com/id/1335247217/vector/loading-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=jARr4Alv-d5U3bCa8eixuX2593e1rDiiWnvJLgHCkQM=' alt=''></img>)}>

     </Route>
     <Route path='/:id' element={<profile/>} ></Route>
   </Routes>
     
                 
    </div>
  );
}

export default App;
