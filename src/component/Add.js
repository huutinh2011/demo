import React from 'react';
import {useNavigate} from 'react-router-dom';

function Add(props){
    const navigate = useNavigate()
    function handleClickAdd(){
        navigate('./PageAdd')
        
    }
    return(
        <div className="add">
            <button className="btn-add"  onClick={handleClickAdd}>{props.button}</button>
        </div>
    )
}
function AddStudent() {
    return (
        <div className="AddStudent">
            <Add
                button="New Student"
            />
        </div>
    )
}

export default AddStudent;