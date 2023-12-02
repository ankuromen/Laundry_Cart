import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Orders from './Orders';
import "../App.css"
import home from "../sidebarassets/home-run (1)@2x.png"
import plus from "../sidebarassets/more@2x.png";
import list from "../sidebarassets/list@2x.png";

const Getorders = () => {
    let navigate = useNavigate();
    
    let handleCreate=()=>{
        navigate("/home");
    }
    let [orderdata, setorderdata] = useState([]);
   
    useEffect(() => {
        let token = localStorage.getItem("token")
        if (token) {
            let authtoken = JSON.parse(token)
            console.log("authtoken  ", authtoken)

            let options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `test ${authtoken}`
                },

            };

            fetch("http://localhost:5055/api/orders", options)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    setorderdata(result.data);
                })
                .catch(error => console.log('error', error));
        }
        console.log(orderdata);
    })

    let handlelogout = () => {
        localStorage.clear("token")
        navigate("/Login")
    }
    let handlehome = () => {
        navigate("/home");
    }
  
    return (
        <>
            <nav>
                <nav className="navbar">
                    <div className="container">
                        <div className="logo">
                            LAUNDRY
                        </div>
                        <div className="nav-elements">
                            <button className='button-elements'>Pricing</button>
                            <button className='button-elements'>Career</button>
                            <button className='button-elements' id='Signin-Button' onClick={handlelogout}>Logout</button>
                        </div>
                    </div>
                </nav>
            </nav>
            <div className='main'>
                <div className='sidebar'>
                    <div className='Sidehome'><img className='Sideimage' onClick={handlehome} src={home} alt="home" /></div>
                    <div className='Sidehome'><img className='Sideimage' src={plus} alt='add' /></div>
                    <div className='Sidehome'><img className='Sideimage' src={list} alt='list' /></div>
                </div>

                <div className='main-content'>
                    <div className='Foooter-next'>
                    <h4 id='Content-Getorders'>Orders |  </h4>
                    <button id='CreateOrder-Btn' onClick={handleCreate} >Create</button>
                    <input type='text' id='Search-button-top' placeholder='Search'/>
                    </div>
                  
                    <Orders orders={orderdata} />
                </div>
            </div>

        </>
    );
};

export default Getorders;
