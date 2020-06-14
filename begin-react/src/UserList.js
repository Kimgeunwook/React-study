import React from 'react';

function User({user}){
    return (
        <div>
                <b>{user.username}, {user.email}</b>
            </div>
    );
}


function UserList(){
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

    return(
        <div>
            
            {
                users.map(
                    user => (<User user = {user} key={user.id}/>)
                )
            }
        </div>
    )
}
export default UserList;