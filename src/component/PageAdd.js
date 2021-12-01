import userData from '../Data/user';
import { useState, useEffect } from 'react';
function PageAdd() {
    const [users, setUser] = useState([]);
    const [img, setImage] = useState([]);
    const [position, setPosition] = useState([]);
    const [name, setName] = useState([]);
    const [Age, setAge] = useState([]);
    const [address, setAddress] = useState([]);
    useEffect(() => {
        setUser(userData);
    }, [])

    
console.log(Age);
    function handleClickAdd() {

    }
    return (
        <div className="page-add">
            <h1 className="title-add">Add Student</h1>
            <div className="form-page-add">
                <input onChange={img => setImage(img.target.value)} className="" type="file" />
                <input onChange={position => setPosition(position.target.value)} type="text" placeholder="Position" />
                <input onChange={name => setName(name.target.value)} type="text" placeholder="Name" />
                <input onChange={age => setAge(age.target.value)} type="text" placeholder="Age" />
                <input onChange={address => setAddress(address.target.value)} type="text" placeholder="Address" />
                <button className="btn-add" onClick={handleClickAdd}>Add</button>
            </div>
        </div>
    )
}
export default PageAdd;