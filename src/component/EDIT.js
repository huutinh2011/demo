
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

import data from '../Data/user';

function Edit() {
    const [image, setImage] = useState("");
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const params = useParams()
    const [users, setUser] = useState([]);
    useEffect(() => {
        setUser(data[params.id]);
    }, [])
    let addImg = image;
    let addId = id;
    let addTitle = title;
    let addName = name;
    let addAge = age;
    let addAddress = address;


    const newdata = {
        image: addImg,
        id: addId,
        title: addTitle,
        name: addName,
        age: addAge,
        address: addAddress
    }
    
    
    function handleClickEdit(){
        
    }
    return (
        <>
            <div className="student">
                <h1 className="title-add">EDIT Student</h1>
                <img className="student-img" src={users.image} alt={""} onChange={image => setImage(image.target.value)} />
                <br /><label>ID : <br /></label>
                <input placeholder={users.id} onChange={id => setId(id.target.value)} /><br />
                <label>Position : <br /></label>
                <input placeholder= {users.title} onChange={title => setTitle(title.target.value)} /><br />
                <label>Name : <br /></label>
                <input placeholder= {users.name} onChange={name => setName(name.target.value)} /><br />
                <label>Age : <br /></label>
                <input placeholder= {users.age} onChange={age => setAge(age.target.value)} /><br />
                <label>Address : <br /></label>
                <input placeholder={users.address} onChange={address => setAddress(address.target.value)} /><br />
                <button onClick={handleClickEdit()} className="btn-add" >{'UPDATE'}</button>
            </div>
        </>
    )
}

export default Edit;