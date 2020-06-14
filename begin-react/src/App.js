import React,{useRef}  from 'react';

import UserList from './UserList.js';

function App() {
  const users = [
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
];
const nextId = useRef(4);
const onCreate = () =>
{
  console.log(nextId.current); //4
  nextId.current += 1;
}
  return (
   <UserList users = {users}/>
  )
}

export default App;
