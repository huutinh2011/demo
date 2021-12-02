import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../Data/user';

function Student() {
    let navigate = useNavigate()
    const [users, setUser] = useState([]);
    useEffect(() => {
        setUser(data);
    }, [])
    function handleClickDetails() {
        alert("dfdg");
    }
    function handleClickDelete(id) {
        //alert("bạn muốn xóa học sinh này ?")
        delete data[id];
        alert("đã xóa thành công")
        //  console.log(data[id]);
    }
    function handleClickEdit(id) {
        navigate(`/Home/${id}/edit`)
    }

    return (
        <div className="student-container">
            {users.map((user, index) => (
                <div className="student" key={index}>
                    <img className="student-img" src={user.image} alt={""} />
                    <p style={{ fontSize: "20px" }}>Position : {user.title}</p>
                    <p style={{ fontSize: "15px" }}>Name : {user.name}</p>
                    <p style={{ fontSize: "15px" }}>Age :{user.age}</p>
                    <p style={{ fontSize: "15px" }}>Address : {user.address}</p>
                    <button className="student-btnDetails" onClick={() => { handleClickDetails(index) }}>{'Details'}</button>
                    <button onClick={() => { handleClickEdit(index) }} className="student-btnEdit" >{'EDIT'}</button>
                    <button onClick={() => handleClickDelete(index)} className="student-btnRemove" >{'DELETE'}</button>
                </div>
            ))}
        </div>
    )
}
export default Student;