import React, {useRef, useState}  from 'react';

import UserList from './UserList.js';
import CreateUser from './CreateUser.js';

function App() {
  const [inputs, setInputs] = useState({
      username:'',
      email:'',
  });
  const {username, email} = inputs;
  const onChange = e =>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  }

  const [users, setUsers] = useState ([
    {
        id:1,
        username : '근욱',
        email:'wook961206@naver.com'
    },
    {
        id:2,
        username : '지호',
        email:'wlgh@naver.com'
    },
    {
        id:3,
        username : '병준',
        email:'moon@naver.com'
    }
]);


const nextId = useRef(4);
const onCreate = () =>
{
  const user = {
    id:nextId.current,
    username,
    email,
  };

  setUsers(users.concat(user));
  //setUsers([...users, use]);
  setInputs({
    username:'',
    email:''
  });
  console.log(nextId.current); //4
  nextId.current += 1;
}
  return (
    <>
      <CreateUser 
        username = {username}
        email = {email}
        onChange = {onChange}
        onCreate = {onCreate}
        />
      <UserList users = {users}/>
    </>
   
  )
}

export default App;
