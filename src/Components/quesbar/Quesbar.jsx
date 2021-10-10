import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./Quesbar.css";


export const Quesbar = () => {

    
    const [users, setUsers] = useState([]);

    
    useEffect(function(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => setUsers(response.data))
        .then(error => console.log(error))
    },[]);


    var count=0;

    function Visted(){
        
    }
    function NotVisted(){
        
    }
    function Marked(){
        
    }

    return (
        <div className="first">
            <div className="second">
            {users.map((user)=>(
                <button className="numbox"> {user.id} </button>
            ))
                }

            </div>
            <span>visted {()=>Visted()}</span><br/>
            <span>Not visted {()=>NotVisted()}</span><br/>
            <span>Marked {()=>Marked()}</span><br/>
        </div>
    )
}
export default Quesbar;