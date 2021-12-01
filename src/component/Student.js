import { useState, useEffect } from 'react';

import userData from '../Data/user';

function Student() {
    const [users, setUser] = useState([]);
    useEffect(() => {
        setUser(userData);
    }, [])
    function handleClickDetails(user , idstudent) {
         alert(idstudent + " tên " + user.name);
    }
    return (
        <div className="student-container">
            {users.map((user, id) => (
                <div className="student" key={id}>
                    <img className="student-img" src={user.image} alt={""} />
                    <p style={{ fontSize: "20px" }}>Position : {user.title}</p>
                    <p style={{ fontSize: "15px" }}>Name : {user.name}</p>
                    <p style={{ fontSize: "15px" }}>Age :{user.age}</p>
                    <p style={{ fontSize: "15px" }}>Address : {user.address}</p>
                    <button className="student-btnDetails" onClick={() => { handleClickDetails(user.id) }}>{'Details'}</button>
                    <button className="student-btnEdit" >{'EDIT'}</button>
                    <button className="student-btnRemove" >{'remove'}</button>
                </div>
            ))}
        </div>
    )
}
export default Student;