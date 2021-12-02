import data from '../Data/user';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fs from 'fs';

function PageAdd() {
    const path = require('path');
    const [users, setUser] = useState([]);
    const [image, setImage] = useState("");
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        setUser(data);
    }, [])




    // console.log(img, position, name, age, address);

    // console.log(position);

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
    console.log(newdata);


    function handleClickAdd() {
        data.push(newdata);
       // console.log(data)
        // fs.write(data, path);
        navigate('/Home')


    }
    return (
        <div className="student">
            <h1 className="title-add">Add Student</h1>
            <div className="form-page-add">
                <input onChange={image => setImage(image.target.value)} className="" type="file" />
                <input onChange={id => setId(id.target.value)} type="text" placeholder="id" />
                <input onChange={title => setTitle(title.target.value)} type="text" placeholder="title" />
                <input onChange={name => setName(name.target.value)} type="text" placeholder="Name" />
                <input onChange={age => setAge(age.target.value)} type="text" placeholder="Age" />
                <input onChange={address => setAddress(address.target.value)} type="text" placeholder="Address" />
                <button className="btn-add" onClick={handleClickAdd}>Add</button>
            </div>
        </div>
    )
}
export default PageAdd;