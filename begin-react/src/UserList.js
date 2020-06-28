import React, {useEffect} from 'react';

const User = React.memo(function User({user, onRemove, onToggle}){
    // useEffect(() => {
    //     console.log('컴포넌트가 화면에 나타남');
    //     //props -> state
    //     //rest api
    //     // d3 video.js 
    //     //setinterval, settimeout
    //     //ui가 나타난 이후이므로 dom에 접근 가능
    //     return() => {
    //         //clearinterval, cleartimeout
    //         //라이브러리 인스턴스 제거
    //         console.log('컴포넌트가 화면에서 사라짐')
    //     }
    // }, []);
    useEffect(() => { //렌더링 될 떄도 호출
        console.log('user 값이 설정됨');
        console.log(user);
        return() => { //해당 값이 바뀌기 전 호출
            console.log('user 값이 바뀌기 전');
            console.log(user);

        }
    },[user]);
    return (
        <div>
                <b style ={{
                    color : user.active? 'green' : 'black',
                    cursor : 'pointer'
                }}
                onClick = {() => onToggle(user.id)}
                >{user.username}, {user.email}</b>
                <button onClick = {() => onRemove(user.id)}>삭제</button>
            </div>
    );
});


function UserList({users, onRemove, onToggle}){
   

    return(
        <div>
            
            {
                users.map(
                    user => (<User user = {user} key={user.id}
                    onRemove = {onRemove}
                    onToggle = {onToggle}
                    />)
                )
            }
        </div>
    )
}
export default React.memo(UserList,
    (prevProps, nextProps) => nextProps.users === prevProps.users);