import React, { useState, useEffect } from 'react'
import "./Testapi.css";
import axios from 'axios';
import $ from "jquery";


function Testapi () {

    const [users, setUsers] = useState([]);

    useEffect(function(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => setUsers(response.data))
        .then(error => console.log(error))
    },[]);


    var visDiv=0;
    
    function displayDiv(){
        $(".third").hide();
        $(".third:eq("+ visDiv +")").show();
    }
    displayDiv()

    function NextQ() {
        if(visDiv == $(".third").length-1){
            visDiv=0;
        }
        else{
            visDiv ++;
        }
        displayDiv();
    }

    function PrevQ() {
        if(visDiv == 0){
            visDiv=$(".third").length-1;
        }
        else{
            visDiv --;
        }
        displayDiv();
    }


    return (
        <div className="main-div">
           
               {
                   users.map((user) => (
                       <div className="second-div"> 
                            <div className="third">
                                Q-{user.id} {user.name}
                                <div className="option">
                                    {/* <span>Q- {user.id} </span>
                                    <p>{user.name}</p> */}
                                    <input name="option" type="radio" className="optionInput" value="1"/>
                                    <label for="option1">{user.username}</label>
                                </div>
                                
                                
                                <div className="option">
                                    <input name="option" type="radio" className="optionInput" value="1"/>
                                    <label for="option1">{user.email}</label>
                                </div>
                                <div className="option">
                                    <input name="option" type="radio" className="optionInput" value="1"/>
                                    <label for="option1">{user.address.street}</label>
                                </div>
                                <div className="option">
                                    <input name="option" type="radio" className="optionInput" value="1"/>
                                    <label for="option1">{user.address.suite}</label>
                                </div>
                                
                                
                            </div> 
                        </div>    
                       
                   ))}
                   <button onClick={()=>PrevQ()}>Previous</button>
                    <button onClick={()=>NextQ()}>Next</button>
        </div>
    );
}

export default Testapi;
